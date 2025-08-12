"use client";

import { useEffect } from "react";
import { API_PATH } from "@api/constants/apiPath";
import { useRouter } from "next/navigation";
import { paths } from "@type/schema";
import SuspenseWrapper from "../SuspenseWrapper";
import dynamic from "next/dynamic";
import { useAuth } from "@providers/AuthProvider";
import { API_BASE_URL } from "@api/index";

const Loading = dynamic(() => import("@common/component/Loading/Loading"), { ssr: false });

function AuthRedirectContent() {
  const router = useRouter();
  const { login } = useAuth();
  const code = searchParams?.get("code");

  type responseType = paths["/api/dev/members/login"]["post"]["responses"]["200"]["content"]["*/*"];

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${API_PATH.MEMBERS_LOGIN}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            platform: "KAKAO",
            code: code,
          }),
        });

        if (!response.ok) {
          throw new Error("로그인 실패!");
        }

        const data: responseType = await response.json();
        console.log(data);

        localStorage.setItem(
          "user",
          JSON.stringify({
            accessToken: data.data?.token?.accessToken,
            refreshToken: data.data?.token?.refreshToken,
          }),
        );

        await login();
        router.push("/onboarding");
      } catch (e) {
        console.log(e);
        // alert("로그인 실패!");
        // router.push("/login");
      }
    };

    if (code) {
      getAccessToken();
    }
  }, [code, router, login]);

  return <Loading />;
}

export default function AuthRedirect() {
  return (
    <SuspenseWrapper>
      <AuthRedirectContent />
    </SuspenseWrapper>
  );
}
