import { IcChevronLeft, IcChevronRight, IcEditPen } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { PATH } from "@route/path";
import { useNavigate } from "react-router-dom";
import * as styles from "./PetEdit.css";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { validateNickname } from "@shared/util/validateNickname";
import CategoryBottomSheet from "./component/CategoryBottomSheet/CategoryBottomSheet";
import { useCategoryFilterStore } from "./store/categoryFilter";
import Chip from "@common/component/Chip/Chip";
import { getSelectedChipNamesById } from "./utils/getSelectedChipNamesById";
import AnimalBottomSheet from "./component/AnimalBottomSheet/AnimalBottomSheet";
import { useAnimalFilterStore } from "./store/animalFilter";
import { getAnimalChipNamesById } from "./utils/getAnimalChipNamesById";
import AgeBottomSheet from "./component/AgeBottomSheet/AgeBottomSheet";
import {
  useGetAnimal,
  useGetBodies,
  useGetBreed,
  useGetDisease,
  useGetMemberInfo,
  useGetPetInfo,
  useGetSymptoms,
} from "@api/domain/mypage/edit-pet/hook";

//todo: 세부 종류는 종류를 기반으로 가져와서 렌더링,
//todo2: 종류가 달라질 경우 세부 종류 선택 off 만들기
const DEFAULT_TYPE = [
  { type: "종류", tab: "animal" },
  { type: "세부 종류", tab: "breeds" },
  { type: "성별", tab: "gender" },
  { type: "나이", tab: "age" },
] as const;

const PetEdit = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  //todo: reducer 혹은 하나의 객체로 상태 관리하기
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [validationMessages, setValidationMessages] = useState<string[]>([]);
  const [isValid, setIsVaild] = useState(false);
  const [petAge, setPetAge] = useState("");
  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]); //api 요청으로 받아온 body id들을 저장해두었다가, 다시 요청에 사용
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]); //api 요청으로 받아온 body id들을 저장해두었다가, 다시 요청에 사용
  const [petId, setPetId] = useState<number | null>(null);

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

  const { isLoading, data: member } = useGetMemberInfo();
  const { data: animal } = useGetAnimal();
  const { data: breed } = useGetBreed((animalChips.animalId as number) || 1);
  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");

  const { data: symptoms } = useGetSymptoms(bodySymptomsIds);
  const { data: disease } = useGetDisease(bodyDiseaseIds);
  const { data: petInfo } = useGetPetInfo();

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
    console.log(animalCategory);
  }, [animalCategory]);

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
    if (member) {
      setName(member.nickname as string);
    }
    if (animal?.animals) {
      console.log(animal.animals);
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
        console.log(petInfo.symptoms);
        if (petInfo.symptoms && petInfo.diseases) {
          setSelectedChips({ ids: petInfo.symptoms.map((item) => item.id), category: "symptomIds" });
          setSelectedChips({ ids: petInfo.diseases.map((item) => item.id), category: "diseaseIds" });
        }
      }
    }
  }, [member, animal, symptoms, disease, petInfo, setCategoryData, setAnimalCategoryData, animalToggleChips]);

  useEffect(() => {
    if (breed?.breeds) {
      setAnimalCategoryData("breeds", breed.breeds);
    }
  }, [breed, setAnimalCategoryData]);

  if (isLoading || !member || !animal) return;

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

  const handleInputBlur = () => {
    if (isValid) {
      setIsEditing(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValid) {
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

  return (
    <div>
      <HeaderNav
        leftIcon={<IcChevronLeft width={24} height={24} />}
        centerContent={"반려동물 정보 수정"}
        onLeftClick={() => navigate(PATH.MYPAGE.ROOT)}
      />
      <section className={styles.petEditWrapper}>
        <article className={styles.profileInfo}>
          <img className={styles.profileImage} alt="프로필 이미지" src={member.profileImage} />
          <span className={styles.nicknameWrapper}>
            {isEditing ? (
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
        <article className={styles.knownDisease}>
          <span className={styles.defaultText}>앓고있는/관심있는 질병</span>
          <Divider size="small" />
          <div className={styles.chipContainer}>
            {selectedChips.diseaseIds.map((id) => (
              <Chip key={`disease-edit-${id}`} label={getSelectedChipNamesById(id, "disease", categoryData) || ""} />
            ))}
          </div>
          <span style={{ width: "10.2rem" }}>
            <Button
              variant={"solidNeutral"}
              leftIcon={<IcEditPen width={20} height={20} />}
              label={"수정하기"}
              size="small"
              onClick={() => openCategoryBottomSheet("disease")}
            />
          </span>
        </article>
        <article className={styles.knownSymptoms}>
          <span className={styles.defaultText}>앓고있는/관심있는 증상</span>
          <Divider size="small" />
          <div className={styles.chipContainer}>
            {selectedChips.symptomIds.map((id) => (
              <Chip key={`symptom-edit-${id}`} label={getSelectedChipNamesById(id, "symptoms", categoryData) || ""} />
            ))}
          </div>
          <span style={{ width: "10.2rem" }}>
            <Button
              variant={"solidNeutral"}
              leftIcon={<IcEditPen width={20} height={20} />}
              label={"수정하기"}
              size="small"
              onClick={() => openCategoryBottomSheet("symptom")}
            />
          </span>
        </article>

        <AnimalBottomSheet />
        <CategoryBottomSheet />
        <AgeBottomSheet
          isOpen={ageBottomSheetOpen}
          setIsOpen={setAgeBottomSheetOpen}
          age={petAge}
          updatePetAge={updatePetAge}
        />
      </section>
    </div>
  );
};

export default PetEdit;
