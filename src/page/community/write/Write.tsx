
import React, { ChangeEvent, useState } from "react";
import { useDropDown } from "../component/DropDown/useDropDown";

const Write = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectState, setSelectState] = useState<string>("");

  const { isDropDownOpen, toggleDropDown, closeDropDown } = useDropDown();

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (!isDropDownOpen) closeDropDown();
  };

  const onTextFieldClick = () => {
    toggleDropDown();
  };

  const onClickItem = (item: string) => {
    setSelectState(item);
    toggleDropDown();
    console.log(selectState);
  };

  return (
    <div>Write</div>
  )
}

export default Write;
