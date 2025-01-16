import React from "react";
import { textareaContainer } from "./TextArea.css";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea = ({ value, onChange, placeholder }: TextAreaProps) => {
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
