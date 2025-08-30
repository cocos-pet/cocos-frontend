"use client";

import * as styles from "./_style/mypage.css";
import Divider from "src/design-system/Divider/Divider";
import { useMypageState } from "./_hooks/useMypageState";
import ProfileSection from "./_component/ProfileSection/ProfileSection";
import HeaderSection from "./_component/HeaderSection/HeaderSection";
import NavSection from "./_component/NavSection/NavSection";
import TabsSection from "./_component/TabsSection/TabsSection";
import ContentSection from "./_component/ContentSection/ContentSection";

/**
 * 마이페이지 컴포넌트
 *
 * 컨테이너 역할을 하는 이 컴포넌트는 데이터 로직을 처리하고
 * 각 하위 컴포넌트에 필요한 데이터와 이벤트 핸들러를 전달
 */
const Mypage = () => {
  // 커스텀 훅을 통한 상태 관리
  const {
    activeTab,
    isActiveTab,
    handleTabClick,
    navigateToSettings,
    navigateToEditPet,
    navigateToRegisterPet,
  } = useMypageState();

  return (
    <div className={styles.mypageContainer}>
      {/* 헤더 섹션 */}
      <HeaderSection onNavigateToSettings={navigateToSettings} />

      {/* 프로필 섹션 */}
      <article className={styles.myProfileWrapper}>
        <ProfileSection
          onNavigateToEditPet={navigateToEditPet}
          onNavigateToRegisterPet={navigateToRegisterPet}
        />
      </article>

      <Divider />

      {/* 탭 섹션 */}
      <TabsSection
        activeTab={activeTab}
        isActiveTab={isActiveTab}
        onTabClick={handleTabClick}
      />

      {/* 컨텐츠 섹션 */}
      <ContentSection activeTab={activeTab} />

      {/* 네비게이션 섹션 */}
      <NavSection />
    </div>
  );
};

export default Mypage;
