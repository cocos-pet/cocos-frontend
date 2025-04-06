import { isLoggedIn } from "@api/index";
import { usePathname, useRouter } from "next/navigation";
import { PATH } from "./path";
import { useGetMemberInfo, useGetPetInfoWithError } from "@api/domain/mypage/hook";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useGetMemberInfo();
  const { isError: isNoPet } = useGetPetInfoWithError();

  useEffect(() => {
    const isLogin = isLoggedIn();
    if (!isLogin) {
      console.log("Redirecting to login...");
      router.push(PATH.LOGIN, { replace: true });
    }

    if (data) {
      const hasNickName = data?.nickname;
      //console.log(hasNickName);

      if (pathname === "/onboarding") {
        if (hasNickName) {
          router.push(PATH.MAIN, { replace: true });
        }
      }

      if (!hasNickName) {
        console.log("Redirecting to onboarding...");
        router.push(PATH.ONBOARDING.ROOT, { replace: true });
      }
    }

    if (isNoPet && pathname === "/community/write") {
      alert("반려동물을 등록하지 않으면 접근할 수 없습니다.");
      router.push(PATH.MYPAGE.ROOT);
    }
  }, [data, isNoPet]);

  return { isNoPet };
};
