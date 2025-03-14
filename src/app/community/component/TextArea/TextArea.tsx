import React from "react";
import {textareaContainer} from "./TextArea.css";
import {WrapVariants} from "@common/component/TextField/styles.css.ts";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

type typeProps = WrapVariants & TextAreaProps;

const TextArea = ({ value, onChange, placeholder }: typeProps) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={textareaContainer}
    ></textarea>
  );
};

export default TextArea;
