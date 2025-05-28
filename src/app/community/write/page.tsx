"use client";

import { TextField } from "@common/component/TextField";
import { IcAddphoto, IcDeleteBlack, IcRightArror } from "@asset/svg";
import React, { ChangeEvent, Suspense, useEffect, useRef, useState } from "react";
import { useDropDown } from "../_component/DropDown/useDropDown";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";

import Spacing from "@common/component/Spacing/Spacing.tsx";
import { Button } from "@common/component/Button";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet.tsx";
import { useFilterStore } from "@store/filter.ts";
import { useRouter, useSearchParams } from "next/navigation";
import { PATH } from "@route/path.ts";
import axios from "axios";
import { useGetBodies, useGetDisease, useGetSymptoms } from "@api/domain/mypage/edit-pet/hook.ts";
import { useArticlePost } from "@api/domain/community/post/hook.ts";
import { CustomAxiosError } from "@type/global";
import WorningToastWrap from "@common/component/WarnningToastWrap/WarningToastWrap.tsx";
import { FillterToName } from "../_utills/getFillterNamebyid.ts";
import { DropDownItems } from "../_constant/writeConfig.tsx";
import { bottomButton, fileInput, imageContainer, plusImage, writeWrap } from "./Write.css.ts";
import WriteInputSection from "../_component/WriteInputSection/WriteInputSection.tsx";
import { getDropdownIdtoIcon, getDropdownIdtoValue } from "../_utills/handleCategoryItem.tsx";
import DropDown from "../_component/DropDown/DropDown.tsx";
import TextArea from "../_component/TextArea/TextArea.tsx";
import ImageCover from "../_component/ImageCover/ImageCover.tsx";
import Tag from "../_component/Tag/Tag.tsx";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), {
  ssr: false,
});

// 로딩 컴포넌트
const LoadingFallback = () => <Loading height={80} />;

interface writeProps {
  categoryId: number | undefined;
  title: string;
  content: string;
  images: string[];
  selectedChips: {
    breedId: number[];
    diseaseIds: number[];
    symptomIds: number[];
  };
}

// 메인 컨텐츠 컴포넌트
const WriteContent = () => {
  //빌테용
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();
  const [imageNames, setImageNames] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isDropDownOpen, toggleDropDown, closeDropDown } = useDropDown();
  const { selectedChips, isOpen, setOpen, clearAllChips, setCategoryData, setCategory } = useFilterStore();
  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]);
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");
  const { mutate } = useArticlePost();
  const { data: symptoms } = useGetSymptoms(bodySymptomsIds);
  const { data: disease } = useGetDisease(bodyDiseaseIds);
  const [params, setParams] = useState<writeProps>({
    categoryId: 1,
    title: "",
    content: "",
    images: [],
    selectedChips: {
      breedId: [],
      diseaseIds: [],
      symptomIds: [],
    },
  });

  const onBackClick = () => {
    router.push(PATH.COMMUNITY.ROOT);
    clearAllChips();
  };

  const TagLabel = [
    {
      label: "반려동물 종류 추가하기",
      category: "breeds",
      value: FillterToName(selectedChips.breedId, "breeds"),
    },
    {
      label: "증상 추가하기",
      category: "symptoms",
      value: FillterToName(selectedChips.symptomIds, "symptoms"),
    },
    {
      label: "질병 추가하기",
      category: "disease",
      value: FillterToName(selectedChips.diseaseIds, "disease"),
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

  useEffect(() => {
    if (category) {
      const matchedItem = DropDownItems.find((item) => item.english === category);
      if (matchedItem) {
        setParams((prevParams) => ({
          ...prevParams,
          categoryId: matchedItem ? matchedItem.value : undefined,
        }));
      }
    }
  }, []);

  useEffect(() => {
    if (symptoms?.bodies) {
      setCategoryData("symptoms", symptoms.bodies);
    }
    if (disease?.bodies) {
      setCategoryData("disease", disease.bodies);
    }
  }, [symptoms, disease]);

  useEffect(() => {
    if (diseaseBodies?.bodies && symptomBodies?.bodies) {
      const diseaseIdArr = diseaseBodies.bodies.map((item) => item.id as number);
      const symptomIdArr = symptomBodies.bodies.map((item) => item.id as number);
      if (diseaseIdArr.length && symptomIdArr.length) {
        setBodyDiseaseIds(diseaseIdArr);
        setBodySymptomsIds(symptomIdArr);
      }
    }
  }, [diseaseBodies, symptomBodies]);

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = DropDownItems.find((item) => item.label === e.target.value);
    if (!selectedValue) return;
    onChangeValue("categoryId", selectedValue.value);
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

      const previewUrl = URL.createObjectURL(file);
      setParams((prev) => ({
        ...prev,
        images: [...prev.images, previewUrl],
      }));
    }
  };

  // 이미지 삭제
  const handleDeleteImage = (index: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      image: prevParams.images.filter((_, i) => i !== index), // 선택한 이미지 제거
    }));
  };

  // 이미지 업로드 버튼 클릭
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
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

  const handleArticlePost = () => {
    if (isAllParamsFilled) {
      mutate(
        {
          categoryId: params.categoryId || undefined,
          title: params.title || undefined,
          content: params.content || undefined,
          images: imageNames || undefined,
          animalId: params.selectedChips.breedId[0] || undefined,
          symptomIds: params.selectedChips.symptomIds || undefined,
          diseaseIds: params.selectedChips.diseaseIds || undefined,
        },
        {
          onSuccess: async (data) => {
            if (!data || !data?.data || !data?.data.images) {
              alert("이미지 업로드 URL이 없습니다.");
              return;
            }
            try {
              await Promise.all(
                data.data.images.map((url: string, index: number) => {
                  const formData = uploadedImageForms[index];
                  const file = formData.get("file");

                  if (!file) {
                    throw new Error("FormData에 파일이 없습니다.");
                  }
                  return axios.put(url, file, {
                    headers: {
                      "Content-Type": (file as File).type,
                    },
                  });
                }),
              );
              clearAllChips();
              router.push(PATH.COMMUNITY.ROOT);
            } catch (error) {
              alert("이미지 업로드에 실패했습니다.");
            }
          },
          // @ts-ignore
          onError: (error: CustomAxiosError) => {
            if (error.response?.data?.code === 40415) {
              setErrorMessage(error.response.data.message);
            } else {
              alert("게시글 작성에 실패했습니다.");
            }
          },
        },
      );
    }
  };

  const isAllParamsFilled =
    params.categoryId && params.title && params.content && params.selectedChips.breedId.length > 0;

  return (
    <>
      <WorningToastWrap errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      <div>
        <HeaderNav leftIcon={<IcDeleteBlack width={24} />} onLeftClick={onBackClick} centerContent={"글쓰기"} />
        <div className={writeWrap}>
          {/* 제목 영역 */}
          <WriteInputSection title={"게시판 선택"}>
            <TextField
              leftIcon={getDropdownIdtoIcon(params.categoryId)}
              icon={<IcRightArror width={20} />}
              placeholder={"게시물 선택하기"}
              onChange={onTextFieldChange}
              onClick={onTextFieldClick}
              isDelete={false}
              value={getDropdownIdtoValue(params.categoryId)}
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
              placeholder={`커뮤니티에 올릴 게시글 내용을 작성해 주세요.\n(예시: ~한 증상은 어디로 가야 하나요?)`}
              onChange={(e) => onChangeValue("content", e.target.value)}
            />
            <Spacing marginBottom={"1.2"} />
            <input type="file" onChange={handleAddImage} accept="image/*" ref={fileInputRef} className={fileInput} />
            <div className={imageContainer}>
              <IcAddphoto className={plusImage} onClick={handleFileUploadClick} />
              {params.images.map((imageSrc, index) => (
                <div key={index}>
                  <ImageCover imageId={index} imageSrc={imageSrc} onDeleteClick={() => handleDeleteImage(index)} />
                </div>
              ))}
            </div>
          </WriteInputSection>
          {/* 태그 선택 영역 */}
          <WriteInputSection title={"태그 선택"}>
            {TagLabel.map((tag, index) => (
              <React.Fragment key={`tag-section-${index}`}>
                <Tag
                  key={`tag-${index}`}
                  placeholder={tag.label}
                  value={tag.value}
                  isActive={tag.value.length > 0}
                  onClick={() => {
                    setOpen(true);
                    // @ts-ignore
                    setCategory(tag.category || "breeds");
                  }}
                />
                <Spacing key={`spacing-${index}`} marginBottom={"0.8"} />
              </React.Fragment>
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

// 페이지 컴포넌트
const Write = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WriteContent />
    </Suspense>
  );
};

export default Write;
