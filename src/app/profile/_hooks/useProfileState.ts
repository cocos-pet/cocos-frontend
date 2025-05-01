import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetMemberInfo, useGetPetInfo } from "@api/domain/mypage/hook";

export type ActiveTabType = "review" | "post" | "comment";

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

export const useProfileState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

  const query = searchParams?.get("nickname");

  const { isLoading: isMemberLoading, data: member } = useGetMemberInfo(query || "");
  const { isLoading: isPetLoading, data: petInfo } = useGetPetInfo(query || "");

  // 초기화 시 sessionStorage에서 활성 탭 가져오기
  useEffect(() => {
    if (typeof window !== "undefined") {
      const preSavedActiveTab = sessionStorage.getItem("activeTab");
      if (preSavedActiveTab) {
        setActiveTab(preSavedActiveTab as ActiveTabType);
      }
    }
  }, []);

  // activeTab 변경 시 sessionStorage에 저장
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  const navigateBack = () => {
    router.back();
  };

  const isLoading = isMemberLoading || isPetLoading;

  return {
    query,
    activeTab,
    isActiveTab,
    handleTabClick,
    navigateBack,
    member,
    petInfo,
    isLoading,
  };
};
