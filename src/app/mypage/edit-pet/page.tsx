"use client";

import {IcChevronLeft, IcChevronRight, IcEditPen, IcPlus} from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import {PATH} from "@route/path";
import {useRouter} from "next/navigation";
import * as styles from "./PetEdit.css";
import Divider from "@common/component/Divider/Divider";
import {Button} from "@common/component/Button";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {validateNickname} from "@shared/util/validateNickname";
import CategoryBottomSheet from "./_component/CategoryBottomSheet/CategoryBottomSheet";
import {CategoryData, useCategoryFilterStore} from "./_store/categoryFilter.ts";
import Chip from "../../../design-system/Chip/Chip";
import {getSelectedChipNamesById} from "./_utils/getSelectedChipNamesById.ts";
import AnimalBottomSheet from "./_component/AnimalBottomSheet/AnimalBottomSheet";
import {useAnimalFilterStore} from "./_store/animalFilter.ts";
import {getAnimalChipNamesById} from "./_utils/getAnimalChipNamesById.ts";
import AgeBottomSheet from "./_component/AgeBottomSheet/AgeBottomSheet";
import {
  useGetAnimal,
  useGetBodies,
  useGetBreed,
  useGetDisease,
  useGetSymptoms,
  usePatchPetInfo,
} from "@api/domain/mypage/edit-pet/hook";
import {useGetMemberInfo, useGetPetInfo} from "@api/domain/mypage/hook";
import Docs from "../../onboarding/index/common/docs/Docs.tsx";
import SearchHospital, {Hospital} from "@shared/component/SearchHospital/SearchHospital.tsx";
import {useGetFavoriteHospital, usePatchFavoriteHospital} from "@api/shared/hook.ts";
import {useMypageMemberInfo} from "../_store/mypageStore.ts";

//todo: 세부 종류는 종류를 기반으로 가져와서 렌더링,
//todo2: 종류가 달라질 경우 세부 종류 선택 off 만들기
const DEFAULT_TYPE = [
  { type: "종류", tab: "animal" },
  { type: "세부 종류", tab: "breeds" },
  { type: "성별", tab: "gender" },
  { type: "나이", tab: "age" },
] as const;

const Page = () => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  //todo: reducer 혹은 하나의 객체로 상태 관리하기
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [validationMessages, setValidationMessages] = useState<string[]>([]);
  const [isValid, setIsVaild] = useState(false);
  const [petAge, setPetAge] = useState("");
  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]); //api 요청으로 받아온 body id들을 저장해두었다가, 다시 요청에 사용
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]); //api 요청으로 받아온 body id들을 저장해두었다가, 다시 요청에 사용

  const member = useMypageMemberInfo((s) => s.member);
  const setMemberInfo = useMypageMemberInfo((s) => s.setMemberInfo);

  // member 정보를 직접 가져와서 스토어에 설정
  const { data: memberData } = useGetMemberInfo();

  const {
    isOpen,
    setOpen,
    category,
    setCategory,
    setCategoryData,
    selectedChips,
    toggleChips,
    categoryData,
    setSelectedChips,
  } = useCategoryFilterStore();
  const {
    isOpen: animalOpen,
    setOpen: setAnimalOpen,
    category: animalCategory,
    setCategory: setAnimalCategory,
    setCategoryData: setAnimalCategoryData,
    selectedChips: animalChips,
    toggleChips: animalToggleChips,
    categoryData: animalCategoryData,
  } = useAnimalFilterStore();
  const [ageBottomSheetOpen, setAgeBottomSheetOpen] = useState(false);
  const updatePetAge = (e: ChangeEvent<HTMLInputElement>) => {
    setPetAge(e.target.value.replace(/[^0-9]/g, "")); // 숫자만 필터링 후 상태 업데이트
  };

  const { data: animal } = useGetAnimal();
  const { data: breed } = useGetBreed((animalChips.animalId as number) || 1);
  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");

  const { data: symptoms } = useGetSymptoms(bodySymptomsIds);
  const { data: disease } = useGetDisease(bodyDiseaseIds);
  const { data: petInfo } = useGetPetInfo();
  const { mutate: patchPetInfo } = usePatchPetInfo();

  // memberData가 있으면 스토어에 설정
  useEffect(() => {
    if (memberData) {
      setMemberInfo(memberData);
    }
  }, [memberData, setMemberInfo]);

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

  useEffect(() => {
    // animalId가 변경되었을 때만 breedId를 초기화
    if (animalChips.animalId !== petInfo?.animalId) {
      animalToggleChips({ id: null, category: "breedId" });
    }
  }, [animalChips.animalId, animalToggleChips, petInfo?.animalId]);

  useEffect(() => {
    if (isEditing && ref.current) {
      ref.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (petInfo) {
      setName(petInfo.petName as string);
    }
    if (animal?.animals) {
      setAnimalCategoryData("animal", animal.animals);
    }
    if (symptoms?.bodies) {
      setCategoryData("symptoms", symptoms.bodies);
    }
    if (disease?.bodies) {
      setCategoryData("disease", disease.bodies);
    }
    if (petInfo?.animalId && petInfo?.breedId && petInfo?.petGender) {
      // 상태가 이미 동일한 값을 가지고 있다면 업데이트하지 않음 -> 무한 렌더링 방지
      if (
        animalChips.animalId !== petInfo.animalId ||
        animalChips.breedId !== petInfo.breedId ||
        animalChips.gender !== petInfo.petGender
      ) {
        animalToggleChips({ id: petInfo.animalId, category: "animalId" });
        animalToggleChips({ category: "breedId", id: petInfo.breedId });
        animalToggleChips({ category: "gender", id: petInfo.petGender });

        if (petInfo.symptoms && petInfo.diseases) {
          setSelectedChips({
            ids: petInfo.symptoms.map((item) => item.id),
            category: "symptomIds",
          });
          setSelectedChips({
            ids: petInfo.diseases.map((item) => item.id),
            category: "diseaseIds",
          });
        }
      }
    }
  }, [animal, symptoms, disease, petInfo, setCategoryData, setAnimalCategoryData, animalToggleChips]);

  useEffect(() => {
    if (breed?.breeds) {
      setAnimalCategoryData("breeds", breed.breeds);
    }
    if (petInfo?.petAge) {
      //todo : 추후 요청 보낼 때는 다시 number로 변환 필요
      setPetAge(String(petInfo.petAge));
    }
  }, [breed, petInfo, setAnimalCategoryData]);

  if (!animal) return;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name);

    //유효성 검사, 유효성 상태 설정
    const inVaildateMessages = validateNickname(name);
    setValidationMessages(inVaildateMessages);
    setIsVaild(inVaildateMessages.length === 0);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleRequestFixName = () => {
    if (petInfo?.petId) {
      patchPetInfo({ petId: petInfo?.petId, reqBody: { name: name } });
    } else {
      alert("pet ID가 존재하지 않습니다.");
    }
  };

  const handleInputBlur = () => {
    if (isValid) {
      handleRequestFixName();
      setIsEditing(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValid) {
      handleRequestFixName();
      setIsEditing(false);
    }
  };

  type SelectedTab = "disease" | "symptom";
  const openCategoryBottomSheet = (which: SelectedTab) => {
    if (which === "disease") {
      setCategory("disease");
      setOpen(true);
    } else {
      setCategory("symptoms");
      setOpen(true);
    }
  };

  type SelectedAnimalTab = "animal" | "breeds" | "gender" | "age";
  const openAnimalBottomSheet = (which: SelectedAnimalTab) => {
    if (which === "animal") {
      setAnimalCategory("animal");
      setAnimalOpen(true);
    } else if (which === "breeds") {
      setAnimalCategory("breeds");
      setAnimalOpen(true);
    } else if (which === "gender") {
      setAnimalCategory("gender");
      setAnimalOpen(true);
    } else {
      setAgeBottomSheetOpen(true);
    }
  };

  if (!petInfo?.petId) {
    return null;
  }

  return (
    <div>
      <HeaderNav
        leftIcon={<IcChevronLeft width={24} height={24} />}
        centerContent={"반려동물 정보 수정"}
        onLeftClick={() => router.push(PATH.MYPAGE.ROOT)}
      />
      <section className={styles.petEditWrapper}>
        <article className={styles.profileInfo}>
          <img className={styles.profileImage} alt="프로필 이미지" src={petInfo.petImage} />
          <span className={styles.nicknameWrapper}>
            {isEditing ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <input
                  ref={ref}
                  className={styles.nameInput}
                  value={name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleInputKeyDown}
                />
                <div className={styles.errorLayout}>
                  {validationMessages.map((message) => (
                    <Docs key={`error-${message}`} state="lError" text={message} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {name}
                <IcEditPen width={24} height={24} onClick={handleEditClick} style={{ cursor: "pointer" }} />
              </>
            )}
          </span>
        </article>

        <article className={styles.defaultInfo}>
          <span className={styles.defaultText}>기본 정보</span>
          <Divider size="small" />
          <div className={styles.defaultInfoListWrapper}>
            {DEFAULT_TYPE.map((item) => (
              <div key={`default-type-${item.tab}`} className={styles.defaultInfoList}>
                <span className={styles.defaultInfoListLeft}>{item.type}</span>
                <button className={styles.defaultInfoListRight} onClick={() => openAnimalBottomSheet(item.tab)}>
                  {item.tab === "animal" &&
                    (animalChips.animalId
                      ? getAnimalChipNamesById(animalChips.animalId as number, "animal", animalCategoryData)
                      : "_")}
                  {item.tab === "breeds" &&
                    (animalChips.breedId
                      ? getAnimalChipNamesById(animalChips.breedId as number, "breeds", animalCategoryData)
                      : "_")}
                  {item.tab === "gender" &&
                    (animalChips.gender
                      ? getAnimalChipNamesById(animalChips.gender as "M" | "F", "gender", animalCategoryData)
                      : "_")}
                  {item.tab === "age" && (`${petAge}살` || "_")}
                  <IcChevronRight width={20} height={20} />
                </button>
              </div>
            ))}
          </div>
        </article>
        <EditArticle
          title="앓고있는/관심있는 질병"
          type="disease"
          selectedChips={selectedChips}
          categoryData={categoryData}
          onButtonClick={() => openCategoryBottomSheet("disease")}
        />
        <EditArticle
          title="앓고있는/관심있는 증상"
          type="symptom"
          selectedChips={selectedChips}
          categoryData={categoryData}
          onButtonClick={() => openCategoryBottomSheet("symptom")}
        />
        <EditFavoriteHospital nickname={member?.nickname || memberData?.nickname} />
        <AnimalBottomSheet petId={petInfo.petId} />
        <CategoryBottomSheet petId={petInfo.petId} />
        <AgeBottomSheet
          isOpen={ageBottomSheetOpen}
          setIsOpen={setAgeBottomSheetOpen}
          age={petAge}
          updatePetAge={updatePetAge}
          petId={petInfo.petId}
        />
      </section>
    </div>
  );
};

export default Page;

interface EditArticleProps {
  title: string;
  type: "symptom" | "disease";
  selectedChips: { symptomIds: number[]; diseaseIds: number[] };
  categoryData: CategoryData;
  onButtonClick: () => void;
}

const EditArticle = ({ title, type, selectedChips, categoryData, onButtonClick }: EditArticleProps) => {
  return (
    <article className={styles.editArticle}>
      <span className={styles.defaultText}>{title}</span>
      <Divider size="small" />
      <div className={styles.chipContainer}>
        {type === "symptom"
          ? selectedChips.symptomIds.map((id) => (
              <Chip
                key={`symptom-edit-${id}`}
                label={getSelectedChipNamesById(id, "symptoms", categoryData) || ""}
                disabled={true}
              />
            ))
          : selectedChips.diseaseIds.map((id) => (
              <Chip
                key={`disease-edit-${id}`}
                label={getSelectedChipNamesById(id, "disease", categoryData) || ""}
                disabled={true}
              />
            ))}
      </div>
      <span style={{ width: "10.2rem" }}>
        <Button
          variant={"solidNeutral"}
          leftIcon={<IcEditPen width={20} height={20} />}
          label={"수정하기"}
          size="small"
          onClick={onButtonClick}
        />
      </span>
    </article>
  );
};

const EditFavoriteHospital = ({ nickname }: { nickname: string | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const prevSelectedHospital = useRef<Hospital | null>(null);

  const { mutate } = usePatchFavoriteHospital();
  const { data } = useGetFavoriteHospital(nickname || "");

  const openCategoryBottomSheet = () => {
    setIsOpen(true);
  };

  const handleCloseBottomSheet = () => {
    if (!selectedHospital?.id) {
      setIsOpen(false);
      return;
    }

    if (prevSelectedHospital.current?.id !== selectedHospital?.id) {
      prevSelectedHospital.current = selectedHospital;
      mutate(selectedHospital.id);
    }

    setIsOpen(false);
  };

  const handleSelectHospital = (hospital: Hospital | null) => {
    setSelectedHospital(hospital);
  };

  return (
    <article className={styles.editArticle}>
      <span className={styles.defaultText}>즐겨찾는 병원</span>
      <Divider size="small" />
      {data ? (
        <div className={styles.favoriteHospitalWrapper}>
          <div className={styles.favoriteHospitalInfo}>
            <span className={styles.favoriteHospitalName}>{data.name}</span>
            <span className={styles.favoriteHospitalSubInfo}>
              {`${data.address} `}
              {/* {` . 리뷰 ${data.reviewCount}`} */}
            </span>
          </div>
          <Button
            variant={"solidNeutral"}
            width="10.5rem"
            leftIcon={<IcEditPen width={20} height={20} />}
            label={"수정하기"}
            size="small"
            onClick={() => setIsOpen(true)}
          />
        </div>
      ) : (
        <Button
          variant={"solidNeutral"}
          rightIcon={<IcPlus width={20} height={20} />}
          label={"즐겨찾는 동물병원 추가하기"}
          size="small"
          width="21.2rem"
          onClick={openCategoryBottomSheet}
        />
      )}

      <SearchHospital
        active={isOpen}
        onCloseBottomSheet={handleCloseBottomSheet}
        selectedHospital={selectedHospital}
        onSelectHospital={handleSelectHospital}
        initialId={data?.id}
      />
    </article>
  );
};
