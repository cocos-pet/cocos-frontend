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
  isOpen: boolean;
  onToggleModal: () => void;
  onDelete: () => void;
  iconSize: number;
  onEdit?: () => void;
}

const MoreModal = ({
  isOpen,
  onToggleModal,
  onDelete,
  iconSize,
  onEdit,
}: MoreModalParams) => {
  return (
    <div
      className={container}
      style={assignInlineVars({ [iconSizeVar]: `${iconSize}rem` })}
    >
      <IcEllipses
        className={moreIcon}
        style={assignInlineVars({ [iconSizeVar]: `${iconSize}rem` })}
        onClick={onToggleModal}
      />
      {isOpen && (
        <div className={moreModal({ onEdit: !!onEdit })}>
          <button
            className={moreModalItem({
              position: !!onEdit ? "first" : "default",
            })}
            onClick={onDelete}
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
                onClick={onEdit}
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
