import { tagContainer } from "@page/community/component/Tag/Tag.css.ts";
import { IcRight } from "@asset/svg";
import React from "react";
import { color } from "@style/styles.css.ts";
import IcRight from "@asset/svg/IcRight.tsx";

interface tagType {
  placeholder: string;
  value?: string | undefined;
  onClick: () => void;
  isActive: boolean;
}

const Tag = ({ placeholder, value, onClick, isActive }: tagType) => {
  return (

    <button className={tagContainer({ active: isActive })} onClick={onClick}>
      {value === "" ? placeholder : value}
      <IcRight
        width={20}
        stroke={isActive ? color.primary.blue500 : "#717171"}
      />
    </button>
  );
};

export default Tag;
