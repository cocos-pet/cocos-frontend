import { useState } from "react";
import { checkboxText } from "./CheckBoxText.css";

interface CheckBoxTextPropTypes {
  children: string;
  onClick: () => void;
}
const CheckBoxText = ({ children, onClick }: CheckBoxTextPropTypes) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClickTextBox = () => {
    onClick();
    setIsSelected((prev) => !prev);
  };

  return (
    <div
      className={checkboxText({
        isSelected: isSelected,
      })}
      onClick={handleClickTextBox}
    >
      {children}
    </div>
  );
};

export default CheckBoxText;
