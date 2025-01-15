import React from "react";
import { IcEllipses } from "@asset/svg";
import {
  container,
  moreIcon,
  MoreIconProps,
  moreModal,
  moreModalDivider,
  moreModalItem,
} from "@shared/component/MoreModal/MoreModal.css.ts";

interface MoreModalParams {
  isOpen: boolean;
  onToggleModal: () => void;
  onDelete: () => void;
  onEdit?: () => void; // 선택적 수정하기 동작
}

type MoreModalProps = MoreModalParams & MoreIconProps;

const MoreModal = ({
  isOpen,
  onToggleModal,
  onDelete,
  iconSize,
  onEdit,
}: MoreModalProps) => {
  return (
    <div className={container({ iconSize })}>
      <IcEllipses className={moreIcon({ iconSize })} onClick={onToggleModal} />
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
