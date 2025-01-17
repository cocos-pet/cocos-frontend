import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import { IcDeleteBlack, IcImagePlus, IcTest, IcUp } from "@asset/svg";
import React, { ChangeEvent, useRef, useState } from "react";
import { useDropDown } from "../component/DropDown/useDropDown";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import {
  bottomButton,
  fileInput,
  imageContainer,
  plusImage,
  writeWrap,
} from "@page/community/write/Write.css.ts";
import WriteInputSection from "@page/community/component/WriteInputSection/WriteInputSection.tsx";

import Tag from "@page/community/component/Tag/Tag.tsx";
import TextArea from "@page/community/component/TextArea/TextArea.tsx";
import Spacing from "@common/component/Spacing/Spacing.tsx";
import ImageCover from "@page/community/component/ImageCover/ImageCover.tsx";
import IcRight from "@asset/svg/IcRight.tsx";
import { Button } from "@common/component/Button";

interface writeProps {
  category: string;
  title: string;
  content: string;
  image: string[];
  tag: string;
}

const TagLabel = [
  { label: "반려동물 종류 추가하기", value: "반려동물 종류 추가하기" },
  { label: "증상 추가하기", value: "증상 추가하기" },
  { label: "질병 추가하기", value: "질병 추가하기" },
];

const Write = () => {
  const onBackClick = () => {};
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

  const [images, setImages] = useState<string[]>([]); // 이미지 URL 리스트
  const fileInputRef = useRef<HTMLInputElement>(null); // input 파일 선택기 레퍼런스

  // 이미지 추가 핸들러
  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]); // 로컬 파일의 URL 생성
      setImages((prev) => [...prev, newImage]); // 기존 이미지에 추가
    }
  };

  // 이미지 삭제 핸들러
  const handleDeleteImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index)); // 선택한 이미지 제거
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click(); // 숨겨진 input[type="file"] 클릭
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
          <Spacing marginBottom={"1.2"} />
          <input
            type="file"
            onChange={handleAddImage}
            accept="image/*"
            ref={fileInputRef}
            className={fileInput}
          />
          <div className={imageContainer}>
            <IcImagePlus
              className={plusImage}
              onClick={handleFileUploadClick}
            />
            {images.map((imageSrc, index) => (
              <ImageCover
                key={index}
                imageSrc={imageSrc}
                onDeleteClick={() => handleDeleteImage(index)}
              />
            ))}
          </div>
        </WriteInputSection>
        <WriteInputSection title={"태그 선택"}>
          {TagLabel.map((label, index) => {
            return (
              <>
                <Tag
                  key={index}
                  label={label.label}
                  value={params.tag}
                  setTag={onChangeValue}
                />
                <Spacing marginBottom={"0.8"} />
              </>
            );
          })}
        </WriteInputSection>
        <Spacing marginBottom={"13.5"} />
      </div>
      <div className={bottomButton}>
        <Button
          variant={"solidNeutral"}
          label={"글 작성 마치기"}
          size={"large"}
        />
      </div>
    </div>
  );
};

export default Write;
