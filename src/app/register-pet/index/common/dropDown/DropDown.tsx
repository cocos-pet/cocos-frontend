import Divider from "@common/component/Divider/Divider";
import {container, itemStyle, span} from "./DropDown.css";

type DropDownType = {
  isOpen: boolean;
  items: Array<{ id: number; name: string }>;
  onClickItem: (value: string) => void;
};

const DropDown = ({ isOpen, items, onClickItem }: DropDownType) => {
  if (!isOpen) {
    return null;
  }

  // 최대 4개의 항목
  const visibleItems = items.slice(0, 4);

  return (
    <div className={container}>
      {visibleItems.map((item, index) => (
        <div key={item.id} className={itemStyle} onClick={() => onClickItem(item.name)}>
          <span className={span}>{item.name}</span>
          {index < visibleItems.length - 1 && <Divider size="small" />}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
