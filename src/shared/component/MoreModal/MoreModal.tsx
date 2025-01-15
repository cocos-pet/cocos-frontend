import React from "react";
import { IcEllipses } from "@asset/svg";
import {
  container,
  moreIcon,
  MoreIconProps,
  moreModal,
  moreModalItem,
} from "@shared/component/MoreModal/MoreModal.css.ts";

interface MoreModalParams {
  isOpen: boolean;
  onToggleModal: () => void;
  onDelete: () => void;
}

type MoreModalProps = MoreModalParams & MoreIconProps;

const MoreModal = ({
  isOpen,
  onToggleModal,
  onDelete,
  iconSize,
}: MoreModalProps) => {
  return (
    <div className={container({ iconSize })}>
      <IcEllipses className={moreIcon({ iconSize })} onClick={onToggleModal} />
      {isOpen && (
        <div className={moreModal}>
          <button className={moreModalItem} onClick={onDelete}>
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreModal;
