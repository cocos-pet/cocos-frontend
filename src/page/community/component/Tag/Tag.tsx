import { tagContainer } from "@page/community/component/Tag/Tag.css.ts";
import { IcLeftarrow, IcRight } from "@asset/svg";
import React from "react";
import { color } from "@style/styles.css.ts";

interface tagType {
  label: string;
  value?: string;
  setTag: (tag: string) => void;
}

const Tag = ({ label, value, setTag }: tagType) => {
  const isActive = value === label;

  const onClickTag = () => {
    setTag(label);
  };

  return (
    <button className={tagContainer({ active: isActive })} onClick={onClickTag}>
      {label}
      <IcRight
        width={20}
        stroke={isActive ? color.primary.blue500 : "#717171"}
      />
    </button>
  );
};

export default Tag;
