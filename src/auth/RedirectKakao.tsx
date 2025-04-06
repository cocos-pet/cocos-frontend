import { API_PATH } from "@api/constants/apiPath";
import { useNavigate } from "react-router-dom";
import { paths } from "@type/schema";
import Loading from "@common/component/Loading/Loading";

const RedirectKakao = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code"); // URL에서 인가 코드 파싱

  type responseType = paths["/api/dev/members/login"]["post"]["responses"]["200"]["content"]["*/*"];

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

      navigate("/onboarding");
    } catch (e) {
      console.log(e);
      // alert("로그인 실패!");
      // navigate("/login");
    }
  };

  getAccessToken();

  return <Loading />;
};

export default RedirectKakao;
