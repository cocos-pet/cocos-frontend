import {child, container, label,} from "@page/community/component/WriteInputSection/WriteInputSection.css.ts";
import React from "react";

interface WriteInputProps {
  title: string;
  children: React.ReactNode;
}

const WriteInputSection = ({ title, children }: WriteInputProps) => {
  return (
    <div className={container}>
      <div className={label}>{title}</div>
      <div className={child}>{children}</div>
    </div>
  );
};

export default WriteInputSection;
