import { usePathname, useRouter } from "next/navigation";
import { PATH } from "./path";
import { useGetMemberInfo, useGetPetInfoWithError } from "@api/domain/mypage/hook";
import { useEffect } from "react";
import { useAuth } from "@providers/AuthProvider";

export const useProtectedRoute = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const { data } = useGetMemberInfo();
  const { isError: isNoPet } = useGetPetInfoWithError();

  const hasNickName = data?.nickname;
  const isWillRedirect =
    !isAuthenticated ||
    !hasNickName ||
    (hasNickName && pathname === "/onboarding") ||
    (isNoPet && pathname === "/community/write");

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Redirecting to login...");
      router.replace(PATH.LOGIN);
    }

    if (data) {
      if (pathname === "/onboarding") {
        if (hasNickName) {
          router.replace(PATH.MAIN);
        }
      }

      if (!hasNickName) {
        console.log("Redirecting to onboarding...");
        router.replace(PATH.ONBOARDING.ROOT);
      }
    }

    if (isNoPet && pathname === "/community/write") {
      alert("반려동물을 등록하지 않으면 접근할 수 없습니다.");
      router.push(PATH.MYPAGE.ROOT);
    }
  }, [data, isNoPet, isAuthenticated]);

  return { isNoPet, isWillRedirect };
};
