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

  const isOnOnboardingPage = pathname === PATH.ONBOARDING.ROOT;
  const hasNickName = data?.nickname;
  const isWillRedirect =
    !isAuthenticated ||
    (!hasNickName && !isOnOnboardingPage) ||
    (hasNickName && isOnOnboardingPage) ||
    (isNoPet && pathname === "/community/write");

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Redirecting to login...");
      router.replace(PATH.LOGIN);
    }

    if (data) {
      if (hasNickName && isOnOnboardingPage) {
        router.replace(PATH.MAIN);
        return;
      }

      if (!hasNickName && !isOnOnboardingPage) {
        console.log("Redirecting to login...");
        router.replace(PATH.ONBOARDING.ROOT);
        return;
      }
    }

    if (isNoPet && pathname === "/community/write") {
      alert("반려동물을 등록하지 않으면 접근할 수 없습니다.");
      router.push(PATH.MYPAGE.ROOT);
    }
  }, [data, isNoPet, isAuthenticated, pathname]);

  return { isNoPet, isWillRedirect };
};
