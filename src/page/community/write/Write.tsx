import DropDown from "@page/community/component/DropDown/DropDown.tsx";
import { TextField } from "@common/component/TextField";
import { IcDeleteBlack, IcImagePlus, IcRightArror, IcTest, IcUp } from "@asset/svg";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDropDown } from "../component/DropDown/useDropDown";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { bottomButton, fileInput, imageContainer, plusImage, writeWrap } from "@page/community/write/Write.css.ts";
import WriteInputSection from "@page/community/component/WriteInputSection/WriteInputSection.tsx";

import Tag from "@page/community/component/Tag/Tag.tsx";
import TextArea from "@page/community/component/TextArea/TextArea.tsx";
import Spacing from "@common/component/Spacing/Spacing.tsx";
import ImageCover from "@page/community/component/ImageCover/ImageCover.tsx";
import { Button } from "@common/component/Button";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet.tsx";
import { useFilterStore } from "@store/filter.ts";
import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "@route/path.ts";
import {} from "@api/domain/mypage/edit-pet/hook.ts";
import { useArticlePost } from "@api/domain/community/post/hook.ts";
import axios from "axios";

interface writeProps {
  categoryId: string;
  title: string;
  content: string;
  images: string[];
  selectedChips: {
    breedId: number[];
    diseaseIds: number[];
    symptomIds: number[];
  };
}

const DropDownItems = [
  { icon: <IcUp width={20} />, label: "증상·질병", value: 1 },
  { icon: <IcTest width={20} />, label: "병원고민", value: 2 },
  { icon: <IcRightArror width={20} />, label: "일상·치유", value: 3 },
];

const Write = () => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };
  const [params, setParams] = useState<writeProps>({
    categoryId: "",
    title: "",
    content: "",
    images: [],
    selectedChips: {
      breedId: [],
      diseaseIds: [],
      symptomIds: [],
    },
  });
  const [imageNames, setImageNames] = useState<string[]>([]); // 이미지 이름 저장

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isDropDownOpen, toggleDropDown, closeDropDown } = useDropDown();
  const { selectedChips, isOpen, setOpen } = useFilterStore();
  const { mutate } = useArticlePost();

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

  const onChangeValue = (target: string, value: string | number | React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      [target]: value,
    });
  };
  const [uploadedImageForms, setUploadedImageForms] = useState<FormData[]>([]);

  // 이미지 추가
  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const fileName = file.name;
      setImageNames((prev) => [...prev, fileName]);
      const formData = new FormData();
      formData.append("file", file);
      setUploadedImageForms((prev) => [...prev, formData]);

      // 2. 로컬 미리보기 이미지 추가
      const previewUrl = URL.createObjectURL(file);
      setParams((prev) => ({
        ...prev,
        images: [...prev.images, previewUrl],
      }));
    }
  };

  // 이미지 삭제
  const handleDeleteImage = (index: number) => {
    setParams((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
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

  const { category } = useParams();
  useEffect(() => {
    if (category) {
      setParams((prevParams) => ({
        ...prevParams,
        categoryId: category,
      }));
    }
  }, []);

  const handleArticlePost = () => {
    if (isAllParamsFilled) {
      mutate(
        {
          categoryId: Number(params.categoryId) || undefined,
          title: params.title || undefined,
          content: params.content || undefined,
          images: imageNames || undefined,
          animalId: params.selectedChips.breedId[0] || undefined,
          symptomIds: params.selectedChips.symptomIds || undefined,
          diseaseIds: params.selectedChips.diseaseIds || undefined,
        },
        {
          onSuccess: async (data) => {
            console.log(data);
            if (!data.data?.images) {
              return;
            }
            try {
              // presigned URL과 FormData를 매칭하여 순차적으로 업로드
              await Promise.all(
                data?.data.images.map((url: string, index: number) => {
                  const formData = uploadedImageForms[index];
                  const file = formData.get("file"); // FormData에서 파일 가져오기

                  if (!file) {
                    throw new Error("FormData에 파일이 없습니다.");
                  }

                  return axios.put(url, file, {
                    headers: {
                      "Content-Type": (file as File).type, // 파일의 MIME 타입 설정
                    },
                  });
                }),
              );

              console.log("모든 이미지가 성공적으로 업로드되었습니다.");
              navigate(PATH.COMMUNITY.ROOT);
            } catch (error) {
              console.error("이미지 업로드 중 오류 발생:", error);
              alert("이미지 업로드에 실패했습니다.");
            }
          },
          onError: (error) => {
            alert("글 작성에 실패했습니다.");
          },
        },
      );
    }
  };

  useEffect(() => {
    console.log(params);
  }, [params]);

  const isAllParamsFilled =
    params.categoryId && params.title && params.content && params.selectedChips.breedId.length > 0;

  return (
    <>
      <div>
        <HeaderNav leftIcon={<IcDeleteBlack width={24} />} onLeftClick={onBackClick} centerContent={"글쓰기"} />
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
              value={params.categoryId}
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
            <input type="file" onChange={handleAddImage} accept="image/*" ref={fileInputRef} className={fileInput} />
            <div className={imageContainer}>
              <IcImagePlus className={plusImage} onClick={handleFileUploadClick} />
              {params.images.map((imageSrc, index) => (
                <ImageCover key={index} imageSrc={imageSrc} onDeleteClick={() => handleDeleteImage(index)} />
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
                <Spacing key={`spacing-write-${index}`} marginBottom={"0.8"} />
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
            onClick={handleArticlePost}
          />
        </div>
      </div>
      <FilterBottomSheet />
    </>
  );
};

export default Write;
