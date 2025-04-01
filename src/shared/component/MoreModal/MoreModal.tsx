"use client";

import React from "react";
import { IcEllipses } from "@asset/svg";
import {
  container,
  iconSizeVar,
  moreIcon,
  moreModal,
  moreModalDivider,
  moreModalItem,
} from "@shared/component/MoreModal/MoreModal.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface MoreModalParams {
  isOpen?: boolean;
  onToggleModal: () => void;
  onDelete: () => void;
  iconSize: number;
  onEdit?: () => void;
}

const MoreModal = ({ isOpen = false, onToggleModal, onDelete, iconSize, onEdit }: MoreModalParams) => {
  const onItemClick = () => {
    onDelete();
    onToggleModal();
  };

  const onEditClick = () => {
    onEdit && onEdit();
    onToggleModal();
  };

  return (
    <div className={container} style={assignInlineVars({ [iconSizeVar]: `${iconSize}px` })}>
      <IcEllipses
        className={moreIcon}
        style={assignInlineVars({ [iconSizeVar]: `${iconSize}px` })}
        onClick={(e) => {
          e.stopPropagation(); // 모달 토글을 막는 이벤트 버블링 방지
          onToggleModal();
        }}
      />
      {isOpen && (
        <div className={moreModal({ onEdit: !!onEdit })}>
          <button
            className={moreModalItem({
              position: !!onEdit ? "first" : "default",
            })}
            onClick={onItemClick}
          >
            삭제하기
          </button>
          {onEdit && (
            <>
              <div className={moreModalDivider} />
              <button
                className={moreModalItem({
                  position: !!onEdit ? "last" : "default",
                })}
                onClick={onEditClick}
              >
                수정하기
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MoreModal;
