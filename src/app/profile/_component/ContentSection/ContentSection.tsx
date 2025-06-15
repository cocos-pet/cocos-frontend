import React from "react";
import * as styles from "../../_style/profile.css";
import { ActiveTabType } from "../../_hooks/useProfileState";
import ProfileContent from "../ProfileContent/ProfileContent";

interface ContentSectionProps {
  activeTab: ActiveTabType;
}

const ContentSection = ({ activeTab }: ContentSectionProps) => {
  return (
    <article className={styles.myPageContentWrapper}>
      <div className={styles.contentBody}>
        <ProfileContent tab={activeTab} />
      </div>
    </article>
  );
};

export default ContentSection;
