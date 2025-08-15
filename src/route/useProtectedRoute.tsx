import { usePathname, useRouter } from "next/navigation";
import { PATH } from "./path";
import { useGetMemberInfo, useGetPetInfoWithError } from "@api/domain/mypage/hook";
import { useEffect, useMemo } from "react";
import { useAuth } from "@providers/AuthProvider";

export const useProtectedRoute = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const {
    data,
    isLoading: isMemberInfoLoading,
    isError: isMemberInfoError,
  } = useGetMemberInfo(undefined, {
    enabled: isAuthenticated, // 인증된 사용자에 대해서만 쿼리 실행
  });
  const { isError: isNoPet } = useGetPetInfoWithError();

  const isOnOnboardingPage = pathname === PATH.ONBOARDING.ROOT;
  const hasNickName = data?.nickname;

  // 데이터가 로딩 중이거나 인증되지 않은 상태에서는 리다이렉트 로직을 실행하지 않음
  const shouldRedirect = isAuthenticated && !isMemberInfoLoading;

  const isWillRedirect = useMemo(() => {
    if (!isAuthenticated || isMemberInfoLoading) return true;

    // 멤버 정보 로딩 완료 후 조건 체크
    return (
      (!hasNickName && !isOnOnboardingPage) ||
      (hasNickName && isOnOnboardingPage) ||
      (isNoPet && pathname === "/community/write")
    );
  }, [isAuthenticated, isMemberInfoLoading, hasNickName, isOnOnboardingPage, isNoPet, pathname]);

  useEffect(() => {
    // 인증되지 않은 경우 즉시 로그인 페이지로 리다이렉트
    if (!isAuthenticated) {
      console.log("Redirecting to login...");
      router.replace(PATH.LOGIN);
      return;
    }

    // 인증되었지만 멤버 정보가 로딩 중인 경우 기다림
    if (!shouldRedirect) {
      return;
    }

    // 멤버 정보 로딩이 완료된 후 리다이렉트 로직 실행
    if (data) {
      if (hasNickName && isOnOnboardingPage) {
        router.replace(PATH.MAIN);
        return;
      }

      if (!hasNickName && !isOnOnboardingPage) {
        console.log("Redirecting to onboarding...");
        router.replace(PATH.ONBOARDING.ROOT);
        return;
      }
    }

    // 멤버 정보 로딩이 실패한 경우에도 온보딩으로 리다이렉트
    if (isMemberInfoError && !isOnOnboardingPage) {
      console.log("Member info error, redirecting to onboarding...");
      router.replace(PATH.ONBOARDING.ROOT);
      return;
    }

    if (isNoPet && pathname === "/community/write") {
      alert("반려동물을 등록하지 않으면 접근할 수 없습니다.");
      router.push(PATH.MYPAGE.ROOT);
    }
  }, [
    data,
    isNoPet,
    isAuthenticated,
    pathname,
    shouldRedirect,
    isMemberInfoError,
    hasNickName,
    isOnOnboardingPage,
    router,
  ]);

  return { isNoPet, isWillRedirect };
};
