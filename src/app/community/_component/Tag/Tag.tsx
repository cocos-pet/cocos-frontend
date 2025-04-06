import { color } from "@style/styles.css.ts";
import IcRight from "@asset/svg/IcRight.tsx";
import { tagContainer, tagValue } from "./Tag.css.ts";

interface tagType {
  placeholder: string;
  value?: string | undefined;
  onClick: () => void;
  isActive: boolean;
}

const Tag = ({ placeholder, value, onClick, isActive }: tagType) => {
  return (
    <button className={tagContainer({ active: isActive })} onClick={onClick}>
      <span className={tagValue}>{value === "" ? placeholder : value}</span>
      <IcRight width={20} height={20} stroke={isActive ? color.primary.blue500 : "#717171"} />
    </button>
  );
};

export default Tag;
