import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import {
  IcDeleteBlack,
  IcImagePlus,
  IcRightArror,
  IcTest,
  IcUp,
} from "@asset/svg";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
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
import { Button } from "@common/component/Button";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet.tsx";
import { useFilterStore } from "@store/filter.ts";
import { useNavigate } from "react-router-dom";
import { PATH } from "@route/path.ts";

interface writeProps {
  category: string;
  title: string;
  content: string;
  image: string[];
  selectedChips: {
    breedId: number[];
    diseaseIds: number[];
    symptomIds: number[];
  };
}

const DropDownItems = [
  { icon: <IcUp width={20} />, label: "증상·질병" },
  { icon: <IcTest width={20} />, label: "병원고민" },
  { icon: <IcRightArror width={20} />, label: "일상·치유" },
];

const Write = () => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };
  const [params, setParams] = useState<writeProps>({
    category: "",
    title: "",
    content: "",
    image: [],
    selectedChips: {
      breedId: [],
      diseaseIds: [],
      symptomIds: [],
    },
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isDropDownOpen, toggleDropDown, closeDropDown } = useDropDown();
  const { selectedChips, isOpen, setOpen } = useFilterStore();

  const TagLabel = [
    {
      label: "반려동물 종류 추가하기",
      value: selectedChips.breedId,
    },
    {
      label: "증상 추가하기",
      value: selectedChips.symptomIds,
    },
    {
      label: "질병 추가하기",
      value: selectedChips.diseaseIds,
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  // 이미지 추가
  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      setParams((prevParams) => ({
        ...prevParams,
        image: [...prevParams.image, newImage],
      }));
    }
  };

  // 이미지 삭제
  const handleDeleteImage = (index: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      image: prevParams.image.filter((_, i) => i !== index), // 선택한 이미지 제거
    }));
  };

  // 이미지 업로드 버튼 클릭
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const getDropdownIcon = (category: string) => {
    const selectedItem = DropDownItems.find((item) => item.label === category);
    return selectedItem ? selectedItem.icon : null;
  };

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      selectedChips: {
        ...prevParams.selectedChips,
        breedId: selectedChips.breedId,
        diseaseIds: selectedChips.diseaseIds,
        symptomIds: selectedChips.symptomIds,
      },
    }));
  }, [selectedChips]);

  useEffect(() => {
    console.log(params);
  }, [params]);

  const isAllParamsFilled =
    params.category &&
    params.title &&
    params.content &&
    params.selectedChips.breedId.length > 0;

  return (
    <>
      <div>
        <HeaderNav
          leftIcon={<IcDeleteBlack width={24} />}
          onLeftClick={onBackClick}
          centerContent={"글쓰기"}
        />
        <div className={writeWrap}>
          {/* 제목 영역 */}
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
          {/* 글 작성 영역 */}
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
              {params.image.map((imageSrc, index) => (
                <ImageCover
                  key={index}
                  imageSrc={imageSrc}
                  onDeleteClick={() => handleDeleteImage(index)}
                />
              ))}
            </div>
          </WriteInputSection>
          {/* 태그 선택 영역 */}
          <WriteInputSection title={"태그 선택"}>
            {TagLabel.map((tag, index) => (
              <>
                <Tag
                  key={index}
                  placeholder={tag.label}
                  value={tag.value.length > 0 ? tag.value.join(", ") : ""}
                  isActive={tag.value.length > 0}
                  onClick={() => setOpen(true)}
                />
                <Spacing marginBottom={"0.8"} />
              </>
            ))}
          </WriteInputSection>
          <Spacing marginBottom={"13.5"} />
        </div>
        {/* 바닥 버튼 영역 */}
        <div className={bottomButton}>
          <Button
            variant={isAllParamsFilled ? "solidPrimary" : "solidNeutral"}
            label={"글 작성 마치기"}
            size={"large"}
          />
        </div>
      </div>
      <FilterBottomSheet />
    </>
  );
};

export default Write;
