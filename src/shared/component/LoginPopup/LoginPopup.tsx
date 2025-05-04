import React from "react";
import * as styles from "./LoginPopup.css";
import { IcChevronRight } from "@asset/svg";

interface LoginPopupProps {
  isOpen: boolean;
  onClick: () => void;
}

export const LoginPopup = ({ isOpen, onClick }: LoginPopupProps) => {
  return (
    <div className={styles.loginPopupContainer} onClick={onClick}>
      <span className={styles.loginPopupText}>로그인 하고 리뷰 확인하기</span>
      <IcChevronRight width={20} height={20} stroke="#fff" />
    </div>
  );
};
