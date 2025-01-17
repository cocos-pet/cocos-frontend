import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import { IcSearch } from "@asset/svg";
import React, { ChangeEvent, useState } from "react";
import { useDropDown } from "../component/DropDown/useDropDown";
import { IcMessage, IcUp } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack, IcRight, IcTest } from "@asset/svg";
import { imageContainer, writeWrap } from "@page/community/write/Write.css.ts";
import WriteInputSection from "@page/community/component/WriteInputSection/WriteInputSection.tsx";

import Tag from "@page/community/component/Tag/Tag.tsx";
import TextArea from "@page/community/component/TextArea/TextArea.tsx";
import Spacing from "@common/component/Spacing/Spacing.tsx";
import IcoSkeleton from "@asset/svg/IcoSkeleton.tsx";

interface writeProps {
  category: string;
  title: string;
  content: string;
  image: string[];
  tag: string;
}

const Write = () => {
  const onBackClick = () => {};
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string[]>("");
  const [params, setParams] = useState<writeProps>({
    category: "",
    title: "",
    content: "",
    tag: "",
    image: [],
  });
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

  const setTag = (tag: string) => {
    setParams({ ...params, tag });
  };

  const onChangeValue = (
    target: string,
    value: string | React.ChangeEvent<HTMLInputElement>
  ) => {
    setParams({
      ...params,
      [target]: value,
    });
  };

  return (
    <div>
      <HeaderNav
        leftIcon={<IcDeleteBlack width={24} />}
        onLeftClick={onBackClick}
        centerContent={"글쓰기"}
      />
      <div className={writeWrap}>
        <WriteInputSection title={"제목"}>
          <TextField
            leftIcon={<IcTest width={20} />}
            placeholder={"게시물 선택하기"}
            icon={<IcRight width={20} />}
            onChange={onTextFieldChange}
            onClick={onTextFieldClick}
            isDelete={false}
            value={params.category}
          />
          <DropDown
            isOpen={isDropDownOpen}
            items={[
              { icon: <IcUp width={20} />, label: "Item 1" },
              { icon: <IcUp width={20} />, label: "Item 2" },
              { icon: <IcUp width={20} />, label: "Item 3" },
            ]}
            onClickItem={onChangeValue}
            toggleDropDown={toggleDropDown}
          />
        </WriteInputSection>
        <WriteInputSection title={"글 작성"}>
          <TextField
            placeholder={"제목을 입력해주세요"}
            icon={<IcRight width={20} />}
            onClick={() => {
              console.log("click");
            }}
            state={"write"}
            value={params.title}
            onClearClick={() => onChangeValue("title", "")}
            onChange={(e) => onChangeValue("title", e.target.value)}
          />
          <Spacing marginBottom={"1.2"} />
          <TextArea
            value={params.content}
            placeholder={`커뮤니티에 올릴 게시글 내용을 작성해 주세요.\n\n(예시: ~한 증상은 어디로 가야 하나요?)`}
            onChange={(e) => onChangeValue("content", e.target.value)}
          />
          <div className={imageContainer}>
            <IcoSkeleton />
            <IcoSkeleton />
            <IcoSkeleton />
            <IcoSkeleton />
          </div>
        </WriteInputSection>
      </div>
    </div>
  );
};

export default Write;
