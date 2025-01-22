import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import {
  IcCocosM,
  IcDeleteBlack,
  IcHealing,
  IcHospital,
  IcImagePlus,
  IcRightArror,
  IcSymptom,
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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { PATH } from "@route/path.ts";

interface writeProps {
  categoryId: number | undefined;
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
  {
    icon: <IcSymptom width={20} />,
    label: "증상·질병",
    value: 1,
    english: "symptom",
  },
  {
    icon: <IcHospital width={20} />,
    label: "병원고민",
    value: 2,
    english: "hospital",
  },
  {
    icon: <IcHealing width={20} />,
    label: "일상·치유",
    value: 3,
    english: "healing",
  },
  {
    icon: <IcCocosM width={20} />,
    label: "코코스매거진",
    value: 4,
    english: "cocos",
  },
];

const Write = () => {
  const [searchParams] = useSearchParams(); // 쿼리 문자열 파싱
  const category = searchParams.get("category"); // category 값 가져오기

  useEffect(() => {
    if (category) {
      const matchedItem = DropDownItems.find(
        (item) => item.english === category
      );
      if (matchedItem) {
        setParams((prevParams) => ({
          ...prevParams,
          categoryId: matchedItem ? matchedItem.value : undefined,
        }));
      }
    }
  }, []);

  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };
  const [params, setParams] = useState<writeProps>({
    categoryId: undefined,
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
    const selectedValue = DropDownItems.find(
      (item) => item.label === e.target.value
    );

    onChangeValue("categoryId", selectedValue.value);
    if (!isDropDownOpen) closeDropDown();
  };

  const onTextFieldClick = () => {
    toggleDropDown();
  };

  const onChangeValue = (
    target: string,
    value: string | number | undefined | React.ChangeEvent<HTMLInputElement>
  ) => {
    setParams((prevParams) => ({
      ...prevParams,
      [target]: value,
    }));
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

  const getDropdownIcon = (categoryId: number | undefined) => {
    const selectedItem = DropDownItems.find(
      (item) => categoryId === item.value
    );
    console.log(selectedItem ? selectedItem.icon : undefined);
    return selectedItem ? selectedItem.icon : undefined;
  };

  const getDropdownValue = (categoryId: number | undefined) => {
    const selectedItem = DropDownItems.find(
      (item) => categoryId === item.value
    );
    return selectedItem ? selectedItem.label : "";
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
    console.log(getDropdownIcon(params.categoryId));
  }, [params]);

  const isAllParamsFilled =
    params.categoryId &&
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
              leftIcon={getDropdownIcon(params.categoryId)}
              icon={<IcRightArror width={20} />}
              placeholder={"게시물 선택하기"}
              onChange={onTextFieldChange}
              onClick={onTextFieldClick}
              isDelete={false}
              value={getDropdownValue(params.categoryId)}
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
