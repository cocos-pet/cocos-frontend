import { checkboxText } from "./CheckBoxText.css";
import { Check } from "@asset/svg";

interface CheckBoxTextPropTypes {
  children: string;
  isSelected: boolean;
  onClick: () => void;
}
const CheckBoxText = ({ children, isSelected, onClick }: CheckBoxTextPropTypes) => {
  const handleClickTextBox = () => {
    onClick();
  };

  return (
    <div
      className={checkboxText({
        isSelected: isSelected,
      })}
      onClick={handleClickTextBox}
    >
      <span style={{ width: "100%" }}>{children}</span>
      {isSelected && <Check width={24} height={24} style={{ position: "relative", bottom: "3" }} />}
    </div>
  );
};

export default CheckBoxText;
