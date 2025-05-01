import { useEffect, useState } from "react";
import { isLoggedIn } from "@api/index";
import { useGetMemberInfo, useGetPetInfo } from "@api/domain/mypage/hook";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";

export type ActiveTabType = "review" | "post" | "comment";

// 컴포넌트 간 일관된 타입 사용을 위한 정의
export interface Disease {
  id?: number;
  name?: string;
}

export interface MemberInfo {
  profileImage?: string;
  nickname?: string;
}

export interface PetInfo {
  petImage?: string;
  breed?: string;
  petAge?: string | number;
  diseases?: Disease[];
}

export const useMypageState = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

  const { isLoading, data: member } = useGetMemberInfo();
  const { data: petInfo } = useGetPetInfo();

  // 초기화 시 sessionStorage에서 활성 탭 가져오기
  useEffect(() => {
    const preSavedActiveTab = sessionStorage.getItem("activeTab");
    if (preSavedActiveTab) {
      setActiveTab(preSavedActiveTab as ActiveTabType);
    }
  }, []);

  useEffect(() => {
    setIsLogin(isLoggedIn());
  }, []);

  useEffect(() => {
    if (!petInfo) setIsRegister(false);
    else setIsRegister(true);
  }, [petInfo]);

  // activeTab 변경 시 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  const navigateToSettings = () => {
    if (isLogin) {
      router.push(PATH.SETTING.ROOT);
    }
  };

  const navigateToEditPet = () => {
    router.push(PATH.MYPAGE.EDIT_PET);
  };

  const navigateToRegisterPet = () => {
    router.push(PATH.REGISTER_PET.ROOT);
  };

  return {
    isLogin,
    isRegister,
    activeTab,
    isLoading,
    member,
    petInfo,
    isActiveTab,
    handleTabClick,
    navigateToSettings,
    navigateToEditPet,
    navigateToRegisterPet,
    setIsLogin,
  };
};
