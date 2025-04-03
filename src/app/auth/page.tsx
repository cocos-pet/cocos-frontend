"use client";

import { useEffect } from 'react';
import { API_PATH } from "@api/constants/apiPath";
import { useRouter, useSearchParams } from "next/navigation";
import { paths } from "@type/schema";
import Loading from "@common/component/Loading/Loading";
import SuspenseWrapper from "../SuspenseWrapper";

function AuthRedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  type responseType = paths["/api/dev/members/login"]["post"]["responses"]["200"]["content"]["*/*"];

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API_PATH.MEMBERS_LOGIN}`, {
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
  }, [code, router]);

  return <Loading />;
}

export default function AuthRedirect() {
  return (
    <SuspenseWrapper>
      <AuthRedirectContent />
    </SuspenseWrapper>
  );
} 