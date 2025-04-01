"use client";

import {btnItem, headerItem, HeaderItemVariant, noWrap} from "./HeaderNav.css";
import React from "react";

interface HeaderNavProps {
  leftIcon?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightBtn?: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
type CombinedHeaderNavProps = HeaderNavProps & Exclude<HeaderItemVariant, undefined>;

const HeaderNav = ({ centerContent, leftIcon, rightBtn, type, onLeftClick, onRightClick }: CombinedHeaderNavProps) => {
  return (
    <div className={headerItem({ type })}>
      {/* 왼쪽 아이콘 영역 */}
      <button type="button" className={btnItem({ side: "left" })} onClick={onLeftClick}>
        {leftIcon}
      </button>

      {/* 중앙 컨텐츠 영역_라벨 또는 텍스트필드 */}
      <span className={noWrap}>{centerContent}</span>

      {/* 오른쪽 버튼 영역_아이콘 또는 텍스트 */}
      {rightBtn && (
        <button type="button" className={btnItem({ side: "right" })} onClick={onRightClick}>
          {rightBtn}
        </button>
      )}
    </div>
  );
};

export default HeaderNav;
