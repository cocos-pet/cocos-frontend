import { IcRightArror, IcChevronRight2 } from "@asset/svg/index";
import { color } from "@style/styles.css";
import * as styles from "./ReviewPetInfo.style.css";
import DirectMyPetInfo from "./DirectMyPetInfo";
import { useGetPetInfo } from "@api/domain/mypage/hook";
import { useFormContext } from "react-hook-form";
import { ReviewFormWithUIData } from "@app/review/write/page";
import { useState } from "react";
import { Toast } from "@common/component/Toast/Toast";
import { PET_TYPE_STANDARD } from "../constant";

// 동물 타입 판단
const getPetTypeFromBreedId = (breedId: number | undefined): string => {
  if (typeof breedId !== "number") return "";
  return breedId > 0 ? (breedId < PET_TYPE_STANDARD ? "강아지" : "고양이") : "";
};

// 동물정보 저장
const usePetInfoSelection = () => {
  const { watch, setValue } = useFormContext<ReviewFormWithUIData>();
  const { data: petInfo } = useGetPetInfo();
  const [toastKey, setToastKey] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isBreedInputTouched, setIsBreedInputTouched] = useState(false);

  const selectedPetInfo = watch("selectedPetInfoType");

  const handleSelectPetInfo = (type: "myPet" | "manual") => {
    const nextValue = selectedPetInfo === type ? null : type;
    setValue("selectedPetInfoType", nextValue);
  };

  const handleMyPetSelection = () => {
    handleSelectPetInfo("myPet");

    if (petInfo) {
      setValue("breedId", petInfo?.breedId ?? -1);
      setValue("gender", petInfo?.petGender ?? "F");
      setValue("petType", getPetTypeFromBreedId(petInfo?.breedId));
      setIsBreedInputTouched(false);
    } else {
      setToastKey(Date.now());
      setShowToast(true);
    }
  };

  return {
    selectedPetInfo,
    petInfo,
    toastKey,
    showToast,
    isBreedInputTouched,
    setIsBreedInputTouched,
    handleSelectPetInfo,
    handleMyPetSelection,
  };
};

// 토스트 컴포넌트 분리
const PetInfoToast = ({ showToast, toastKey }: { showToast: boolean; toastKey: number }) => {
  if (!showToast) return null;

  return (
    <Toast
      key={toastKey}
      message="등록된 동물이 없어요. 직접 입력하기를 눌러주세요"
      showDeleteIcon={false}
      variant="blue"
    />
  );
};

// 기존에 저장된 내 동물 정보로 동물 정보 입력
const MyPetInfoButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => (
  <button className={styles.myPetInfoBtn({ selected })} onClick={onClick}>
    <span className={styles.buttonText}>
      내 동물 정보에서 불러오기
      <IcRightArror width={20} height={20} stroke={selected ? color.primary.blue700 : color.gray.gray500} />
    </span>
  </button>
);

// 직접 동물 정보 입력
const ManualInputButton = ({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <form
    className={styles.myPetInfoBtn({
      selected,
      petInfoType: "manual",
    })}
  >
    <span className={styles.buttonText} onClick={onClick}>
      직접 입력하기
      <IcChevronRight2
        className={styles.rotateIcon({ selected })}
        stroke={selected ? color.primary.blue700 : color.gray.gray500}
      />
    </span>
    {children}
  </form>
);

// 동물 정보 입력방식 선택 UI
const ReviewPetInfo = () => {
  const {
    selectedPetInfo,
    petInfo,
    toastKey,
    showToast,
    isBreedInputTouched,
    setIsBreedInputTouched,
    handleSelectPetInfo,
    handleMyPetSelection,
  } = usePetInfoSelection();

  return (
    <>
      {/* 1-3. 동물 정보 */}
      <div className={styles.wrapper}>
        <div>
          <span className={styles.question}>동물 정보를 알려주세요</span>
          <span className={styles.star}>*</span>
        </div>

        {/* 버튼1. 내 정보 */}
        <MyPetInfoButton selected={selectedPetInfo === "myPet" && !!petInfo} onClick={handleMyPetSelection} />

        <PetInfoToast showToast={showToast} toastKey={toastKey} />

        {/* 버튼2. 직접 입력하기 */}
        <ManualInputButton selected={selectedPetInfo === "manual"} onClick={() => handleSelectPetInfo("manual")}>
          {selectedPetInfo === "manual" && (
            <DirectMyPetInfo
              isBreedInputTouched={isBreedInputTouched}
              setIsBreedInputTouched={setIsBreedInputTouched}
            />
          )}
        </ManualInputButton>
      </div>
    </>
  );
};

export default ReviewPetInfo;
