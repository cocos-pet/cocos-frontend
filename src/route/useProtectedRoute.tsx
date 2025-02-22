import { isLoggedIn } from "@api/index";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "./path";
import { useGetMemberInfo, useGetPetInfoWithError } from "@api/domain/mypage/hook";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useGetMemberInfo();
  const { isError: isNoPet } = useGetPetInfoWithError();

  useEffect(() => {
    const isLogin = isLoggedIn();
    if (!isLogin) {
      console.log("Redirecting to login...");
      navigate(PATH.LOGIN, { replace: true });
    }

    if (data) {
      const hasNickName = data?.nickname;
      //console.log(hasNickName);

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

    if (isNoPet && location.pathname === "/community/write") {
      alert("반려동물을 등록하지 않으면 접근할 수 없습니다.");
      navigate(PATH.MYPAGE.ROOT);
    }
  }, [data, isNoPet]);

  return { isNoPet };
};
