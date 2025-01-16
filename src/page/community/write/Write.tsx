import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import { IcSearch } from "@asset/svg";
import React, { ChangeEvent, useState } from "react";
import { useDropDown } from "../component/DropDown/useDropDown";
import { IcMessage, IcUp } from "@asset/svg";

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
    <div>
      <TextField
        value={searchText}
        placeholder={"검색어를 입력해주세요"}
        icon={<IcSearch />}
        onChange={onTextFieldChange}
        onClick={onTextFieldClick}
        onClearClick={() => setSearchText("")}
      />
      <DropDown
        isOpen={isDropDownOpen}
        items={[
          { icon: <IcUp width={20} />, label: "Item 1" },
          { icon: <IcUp width={20} />, label: "Item 2" },
          { icon: <IcUp width={20} />, label: "Item 3" },
        ]}
        onClickItem={onClickItem}
      />
    </div>
  );
};

export default Write;
