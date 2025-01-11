import clsx from "clsx";
import React from "react";
import { styles } from "@common/component/TextField/styles.css.ts";

interface TextFieldProps {
  icon?: React.ReactNode; // 오른쪽 아이콘
  state?: "default" | "error"; // 상태: 기본 또는 에러
  active?: boolean; // 활성화 여부
  disabled?: boolean; // 비활성화 여부
  placeholder?: string; // 플레이스홀더
  value?: string; // 입력값
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  icon,
  state = "default",
  disabled = false,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={clsx(styles.wrapper, disabled && styles.disabled)}>
      <input
        type="text"
        className={clsx(styles.input, state === "error" && styles.error)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};
