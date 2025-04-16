import React from "react";
import * as styles from "../../style/mypage.css";
import MyPageContent from "../MyPageContent/MyPageContent";
import { ActiveTabType } from "../../hooks/useMypageState";

interface ContentSectionProps {
  isLogin: boolean;
  activeTab: ActiveTabType;
}

const ContentSection = ({ isLogin, activeTab }: ContentSectionProps) => {
  return (
    <article className={styles.myPageContentWrapper}>
      <div className={styles.contentBody}>
        {isLogin ? <MyPageContent tab={activeTab} /> : <div className={styles.nothingContent}>로그인 해주세요.</div>}
      </div>
    </article>
  );
};

export default ContentSection;
