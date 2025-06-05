"use client";

import * as styles from "./_style/profile.css";
import Divider from "@common/component/Divider/Divider";
import { useProtectedRoute } from "@route/useProtectedRoute";
import { useProfileState } from "./_hooks/useProfileState";
import HeaderSection from "./_component/HeaderSection/HeaderSection";
import ProfileSection from "./_component/ProfileSection/ProfileSection";
import TabsSection from "./_component/TabsSection/TabsSection";
import ContentSection from "./_component/ContentSection/ContentSection";
import NavSection from "./_component/NavSection/NavSection";
import SuspenseWrapper from "@app/SuspenseWrapper";
import { Suspense } from "react";

/**
 * 프로필 페이지 컴포넌트
 *
 * 컨테이너 역할을 하는 이 컴포넌트는 데이터 로직을 처리하고
 * 각 하위 컴포넌트에 필요한 데이터와 이벤트 핸들러를 전달합니다.
 */
const Profile = () => {
  // 보호된 라우트 설정
  useProtectedRoute();

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ProfileContent />
    </Suspense>
  );
};

const ProfileContent = () => {
  // 커스텀 훅을 통한 상태 관리
  const { query, activeTab, isActiveTab, handleTabClick, navigateBack, member, petInfo, isLoading } = useProfileState();

  // 쿼리 파라미터가 없거나 로딩 중이거나 데이터가 없는 경우 렌더링하지 않음
  if (!query || isLoading || !member || !petInfo) return null;

  return (
    <SuspenseWrapper>
      <div style={{ position: "relative", height: "auto" }}>
        {/* 헤더 섹션 */}
        <HeaderSection onNavigateBack={navigateBack} />

        {/* 프로필 섹션 */}
        <article className={styles.myProfileWrapper}>
          <ProfileSection member={member} petInfo={petInfo}  />
        </article>

        <Divider />

        {/* 탭 섹션 */}
        <TabsSection activeTab={activeTab} isActiveTab={isActiveTab} onTabClick={handleTabClick} />

        {/* 컨텐츠 섹션 */}
        <ContentSection activeTab={activeTab} />

        {/* 네비게이션 섹션 */}
        <NavSection />
      </div>
    </SuspenseWrapper>
  );
};

export default Profile;
