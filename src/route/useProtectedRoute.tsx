import { isLoggedIn } from "@api/index";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "./path";
import { useGetMemberInfo } from "@api/domain/mypage/hook";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useGetMemberInfo();

  useEffect(() => {
    const isLogin = isLoggedIn();
    if (!isLogin) {
      console.log("Redirecting to login...");
      navigate(PATH.LOGIN, { replace: true });
    }

    if (data) {
      const hasNickName = data?.nickname;
      console.log(hasNickName);

      if (location.pathname === "/onboarding") {
        if (hasNickName) {
          navigate(PATH.MAIN, { replace: true });
        }
      }

      if (!hasNickName) {
        console.log("Redirecting to onboarding...");
        navigate(PATH.ONBOARDING.ROOT, { replace: true });
      }
    }
  }, [data]);
};
