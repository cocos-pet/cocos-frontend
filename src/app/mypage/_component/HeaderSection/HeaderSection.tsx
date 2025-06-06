import React from "react";
import * as styles from "../../_style/mypage.css";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcSettings } from "@asset/svg";
import { useAuth } from "@providers/AuthProvider";

interface HeaderSectionProps {
  onNavigateToSettings: () => void;
}

const HeaderSection = ({ onNavigateToSettings }: HeaderSectionProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <span style={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
      <HeaderNav
        centerContent={"마이페이지"}
        rightBtn={
          <span
            className={styles.settingWrapper({
              isLogin: isAuthenticated,
            })}
            onClick={onNavigateToSettings}
          >
            <IcSettings width={24} height={24} />
          </span>
        }
      />
    </span>
  );
};

export default HeaderSection;
