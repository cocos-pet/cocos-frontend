import {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ModalContext } from "./context.ts";
import { ModalClose } from "./group/ModalClose.tsx";
import { ModalConfirm } from "./group/ModalConfirm.tsx";
import { ModalContent } from "./group/ModalContent.tsx";
import { ModalRootStyle } from "./style.css.ts";
import { ModalTitle } from "./group/ModalTitle.tsx";
import { ModalBottomAffix } from "./group/ModalBottomAffix.tsx";

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Modal 컴포넌트 입니다.
 * @param children 모달 내부에 렌더링할 컴포넌트
 * @param className 추가적인 클래스 이름
 * @param style 인라인 스타일
 * @param open 모달의 초기 열림 상태
 * @param onOpenChange 모달 열림 상태 변경 핸들러
 * @author minjeoong
 *
 * @example
 * ```tsx
 * import { Modal } from "@common/component/Modal";
 *
 * <Modal.Root open={true}>
 *   <Modal.Content
 *     title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
 *     bottomAffix={
 *       <Modal.BottomAffix>
 *         <Modal.Close label={"취소"} />
 *         <Modal.Confirm label={"로그인"} />
 *       </Modal.BottomAffix>
 *     }
 *   >
 *     코코스를 더 잘 즐기기 위해 로그인을 해주세요.
 *   </Modal.Content>
 * </Modal.Root>
 * ```
 */

const ModalRoot = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, forwardRef) => {
    const { children, className, open, onOpenChange, ...restProps } = props;
    const [internalOpen, setInternalOpen] = useState(open || false);

    const setOpen = (newOpen: boolean) => {
      setInternalOpen(newOpen);
      if (onOpenChange) {
        onOpenChange(newOpen);
      }
    };

    const handleBackdropClick = () => {
      setOpen(false);
    };

    useEffect(() => {
      if (typeof open === "boolean") {
        setInternalOpen(open);
      }
    }, [open]);

    return (
      <ModalContext.Provider value={{ open: internalOpen, setOpen }}>
        <div
          ref={forwardRef}
          className={ModalRootStyle({ isOpen: internalOpen })}
          onClick={handleBackdropClick}
          {...restProps}
        >
          {children}
        </div>
      </ModalContext.Provider>
    );
  }
);

ModalRoot.displayName = "ModalRoot";

export const Modal = {
  Root: ModalRoot,
  Close: ModalClose,
  Confirm: ModalConfirm,
  Content: ModalContent,
  Title: ModalTitle,
  BottomAffix: ModalBottomAffix,
};
