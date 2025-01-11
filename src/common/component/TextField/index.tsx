import clsx from "clsx";
import React from "react";
import { styles } from "@common/component/TextField/styles.css.ts";

interface TextFieldProps {
  icon?: React.ReactNode;
  state?: "default" | "error";
  active?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * TextField 공통 컴포넌트
 * @param icon 오른쪽 아이콘
 * @param state 상태 (default, error)
 * @param active 활성화 여부
 * @param placeholder
 * @param value
 * @param onChange
 * @constructor minjeoong
 */

export const TextField: React.FC<TextFieldProps> = ({
  icon,
  state = "default",
  active = true,
  placeholder = "검색어를 입력해주세요",
  value,
  onChange,
}) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        !active && styles.disabledWrapper,
        state === "error" && styles.error
      )}
    >
      <input
        type="text"
        className={clsx(styles.input, !active && styles.disabledInput)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={!active}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};
