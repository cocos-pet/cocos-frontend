import { tagContainer } from "@page/community/component/Tag/Tag.css.ts";
import { IcLeftarrow } from "@asset/svg";
import React from "react";
import { color } from "@style/styles.css.ts";
import IcRight from "@asset/svg/IcRight.tsx";

interface tagType {
  label: string;
  value?: string;
  setTag: (tag: string, value: string) => void;
}

const Tag = ({ label, value, setTag }: tagType) => {
  const isActive = value === label;

  const onClickTag = () => {
    setTag("tag", label);
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
