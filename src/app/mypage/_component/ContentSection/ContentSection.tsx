import React from "react";
import * as styles from "../../_style/mypage.css";
import MyPageContent from "../MyPageContent/MyPageContent";
import { ActiveTabType } from "../../_hooks/useMypageState";
import { useAuth } from "@providers/AuthProvider";

interface ContentSectionProps {
  activeTab: ActiveTabType;
}

const ContentSection = ({ activeTab }: ContentSectionProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <article className={styles.myPageContentWrapper}>
      <div className={styles.contentBody}>
        {isAuthenticated ? (
          <MyPageContent tab={activeTab} />
        ) : (
          <div className={styles.nothingContent}>로그인 후 내 활동을 확인해보세요.</div>
        )}
      </div>
    </article>
  );
};

export default ContentSection;
