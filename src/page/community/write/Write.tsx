import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import {
  IcDeleteBlack,
  IcImagePlus,
  IcRightArror,
  IcTest,
  IcUp,
} from "@asset/svg";
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
  {
    label: "반려동물 종류 추가하기",
    value: "반려동물 종류 추가하기",
  },
  {
    label: "증상 추가하기",
    value: "증상 추가하기",
  },
  {
    label: "질병 추가하기",
    value: "질병 추가하기",
  },
];

const DropDownItems = [
  { icon: <IcUp width={20} />, label: "증상·질병" },
  { icon: <IcTest width={20} />, label: "병원고민" },
  { icon: <IcRightArror width={20} />, label: "일상·치유" },
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

  const { isDropDownOpen, toggleDropDown, closeDropDown } = useDropDown();

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue("category", e.target.value);
    if (!isDropDownOpen) closeDropDown();
  };

  const onTextFieldClick = () => {
    toggleDropDown();
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

  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 추가
  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      setImages((prev) => [...prev, newImage]);
    }
  };

  // 이미지 삭제
  const handleDeleteImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index)); // 선택한 이미지 제거
  };

  // 이미지 업로드 버튼 클릭
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const getDropdownIcon = (category: string) => {
    const selectedItem = DropDownItems.find((item) => item.label === category);
    return selectedItem ? selectedItem.icon : null;
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
            leftIcon={getDropdownIcon(params.category)}
            icon={<IcRightArror width={20} />}
            placeholder={"게시물 선택하기"}
            onChange={onTextFieldChange}
            onClick={onTextFieldClick}
            isDelete={false}
            value={params.category}
          />
          <DropDown
            isOpen={isDropDownOpen}
            items={DropDownItems}
            onClickItem={onChangeValue}
            toggleDropDown={toggleDropDown}
          />
        </WriteInputSection>
        <WriteInputSection title={"글 작성"}>
          <TextField
            placeholder={"제목을 입력해주세요"}
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
