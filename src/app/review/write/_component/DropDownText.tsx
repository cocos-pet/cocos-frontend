import { IcUp } from "@asset/svg";
import * as styles from "@common/component/DropDownText/DropDownText.css";
import { useState } from "react";
import Chip from "@common/component/Chip/Chip";

interface DropDownTextProps {
  children: string;
  content: { id: number; name: string }[];
  selectedChipIds: number[];
  onChipToggle: (chip: { id: number; name: string }) => void;
}

const DropDownText = ({ children, content, selectedChipIds, onChipToggle }: DropDownTextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = (id: number) => selectedChipIds.includes(id);

  return (
    <div className={styles.dropdownTextWrapper}>
      {/* 대분류 */}
      <div className={styles.dropdownText} onClick={() => setIsOpen((prev) => !prev)}>
        <span style={{ width: "100%" }}>{children}</span>
        <IcUp className={styles.rotateIcon({ isOpen })} />
      </div>

      {/* 소분류 칩 */}
      {isOpen && (
        <div className={styles.dropdownContent}>
          {content.map((data) => (
            <Chip key={data.id} label={data.name} isSelected={isSelected(data.id)} onClick={() => onChipToggle(data)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownText;
