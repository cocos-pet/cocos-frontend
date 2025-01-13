import { useState } from "react";
import { ChipType, chipItem } from "./ChipStyle.css.ts";
import { IcDelete } from "@asset/svg/index";

interface ChipProps {
  label: string;
  icon?: boolean;
}

type CombinedChipProps = ChipProps & Exclude<ChipType, undefined>;

const Chip = ({ label, icon = false, text = "blue", bgColor = "gray" }: CombinedChipProps) => {
  console.log("icon prop:", icon); // 콘솔 출력 확인

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const size = icon ? "large" : "small";

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={chipItem({ size, text, bgColor })} // 스타일 적용
        onClick={handleClick}
      >
        {label}
        {icon && (
          <IcDelete
            style={{
              position: "relative",
              bottom: "1.3px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default Chip;
