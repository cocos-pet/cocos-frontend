import React from "react";
import { iconstyle, InputVariants, styles, WrapVariants } from "@common/component/TextField/styles.css.ts";
import { IcClear } from "@asset/svg";

interface TextFieldProps {
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  active?: boolean;
  isDelete?: boolean;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClearClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  maxLength?: number; // input 입력 가능길이
  mentionedNickname?: string; // 언급된 닉네임
}

type propsType = WrapVariants & TextFieldProps & InputVariants;

/**
 * TextField 공통 컴포넌트
 * @param icon 오른쪽 아이콘
 * @param leftIcon 왼쪽 아이콘
 * @param state 상태 (default, error)
 * @param active 활성화 여부
 * @param isDelete value 가 생기면 삭제 아이콘 표시 여부
 * @param placeholder placeholder
 * @param value 입력값
 * @param onChange 입력값 변경 함수
 * @param onClick input 클릭 함수
 * @param onKeyDown 엔터키 입력 함수
 * @param onClearClick 입력값 삭제 함수
 * @constructor minjeoong
 */

export const TextField = React.forwardRef<HTMLInputElement, propsType>(
  (
    {
      icon,
      leftIcon,
      state = "default",
      active = true,
      placeholder = "검색어를 입력해주세요",
      value,
      isDelete = "true",
      onChange,
      onClick,
      onKeyDown,
      onClearClick,
      maxLength,
      mentionedNickname,
    },
    ref,
  ) => {
    return (
      <div className={styles.wrapper({ state, active })} onClick={onClick}>
        <div className={styles.leftWrap()}>
          {leftIcon && <p className={iconstyle}>{leftIcon}</p>}
          <span className={styles.mention}>{mentionedNickname}</span>
          <input
            ref={ref}
            type="text"
            className={styles.input({ state, active })}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={!active}
            maxLength={maxLength}
          />
        </div>
        {value && isDelete ? (
          <button onClick={onClearClick}>
            <IcClear height={20} width={20} />
          </button>
        ) : (
          icon
        )}
      </div>
    );
  },
);
