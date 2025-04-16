import React from "react";
import * as styles from "../../style/mypage.css";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcSettings } from "@asset/svg";

interface HeaderSectionProps {
  isLogin: boolean;
  onNavigateToSettings: () => void;
}

const HeaderSection = ({ isLogin, onNavigateToSettings }: HeaderSectionProps) => {
  return (
    <span style={{ position: "fixed", top: 0, width: "100%" }}>
      <HeaderNav
        centerContent={"마이페이지"}
        rightBtn={
          <span
            className={styles.settingWrapper({
              isLogin: isLogin,
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
