import React from "react";
import * as styles from "../../_style/mypage.css";
import MyPageContent from "../MyPageContent/MyPageContent";
import { ActiveTabType } from "../../_hooks/useMypageState";

interface ContentSectionProps {
  isLogin: boolean;
  activeTab: ActiveTabType;
  nickname: string;
}

const ContentSection = ({ isLogin, activeTab, nickname }: ContentSectionProps) => {
  return (
    <article className={styles.myPageContentWrapper}>
      <div className={styles.contentBody}>
        {isLogin ? (
          <MyPageContent tab={activeTab} nickname={nickname} />
        ) : (
          <div className={styles.nothingContent}>로그인 해주세요.</div>
        )}
      </div>
    </article>
  );
};

export default ContentSection;
