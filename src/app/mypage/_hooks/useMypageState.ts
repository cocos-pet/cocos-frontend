import { useEffect, useState } from "react";
import { useGetMemberInfo, useGetPetInfo } from "@api/domain/mypage/hook";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { useMypageMemberInfo } from "../_store/mypageStore";
import { useAuth } from "@providers/AuthProvider";

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

export const useMypageState = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

  const { data: member } = useGetMemberInfo();
  const { isAuthenticated } = useAuth();
  const setMemberInfo = useMypageMemberInfo((s) => s.setMemberInfo);

  // 초기화 시 sessionStorage에서 활성 탭 가져오기
  useEffect(() => {
    const preSavedActiveTab = sessionStorage.getItem("activeTab");
    if (preSavedActiveTab) {
      setActiveTab(preSavedActiveTab as ActiveTabType);
    }
  }, []);

  // activeTab 변경 시 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (member) setMemberInfo(member);
  }, [member]);

  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  const navigateToSettings = () => {
    if (isAuthenticated) {
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
    activeTab,
    isActiveTab,
    handleTabClick,
    navigateToSettings,
    navigateToEditPet,
    navigateToRegisterPet,
  };
};
