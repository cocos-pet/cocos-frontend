import React, { useState } from "react";
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
  onDelete: () => void;
  iconSize: number;
  onEdit?: () => void;
}

const MoreModal = ({ onDelete, iconSize, onEdit }: MoreModalParams) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onItemClick = () => {
    onDelete();
    setIsOpen(false);
  };

  const onEditClick = () => {
    onEdit && onEdit();
    setIsOpen(false);
  };

  return (
    <div
      className={container}
      style={assignInlineVars({ [iconSizeVar]: `${iconSize}px` })}
    >
      <IcEllipses
        className={moreIcon}
        style={assignInlineVars({ [iconSizeVar]: `${iconSize}px` })}
        onClick={handleToggleModal}
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
