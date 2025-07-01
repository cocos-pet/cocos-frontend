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

const ReviewPetInfo = () => {
  const { watch, setValue } = useFormContext<ReviewFormWithUIData>();
  const selectedPetInfo = watch("selectedPetInfoType");
  const { data: petInfo } = useGetPetInfo();
  // 토스트 리렌더링
  const [toastKey, setToastKey] = useState(0);
  const [showToast, setShowToast] = useState(false);
  // 내 동물정보 가져오기 클릭 후 내 정보 해지 후 직접 입력하기 위한 상태
  const [isBreedInputTouched, setIsBreedInputTouched] = useState(false);

  const handleSelectPetInfo = (type: "myPet" | "manual") => {
    const nextValue = selectedPetInfo === type ? null : type;
    setValue("selectedPetInfoType", nextValue);
  };

  return (
    <>
      {/* 1-3. 동물 정보 */}
      <div className={styles.wrapper}>
        <div>
          <span className={styles.question}>동물 정보를 알려주세요</span>
          <span className={styles.star}>*</span>
        </div>

        {/* 버튼1. 내 정보 */}
        <button
          className={styles.myPetInfoBtn({
            selected: selectedPetInfo === "myPet" && !!petInfo,
          })}
          onClick={() => {
            handleSelectPetInfo("myPet");
            if (petInfo) {
              setValue("breedId", petInfo?.breedId ?? -1);
              setValue("gender", petInfo?.petGender ?? "F");
              // 종은 리뷰 제출 항목이 아님. 직접입력하기의 활성화 상태를 맞추기위해 추가
              if (typeof petInfo?.breedId === "number") {
                setValue(
                  "petType",
                  petInfo.breedId > 0 ? (petInfo.breedId < PET_TYPE_STANDARD ? "강아지" : "고양이") : "",
                );
              } else {
                setValue("petType", "");
              }
              setIsBreedInputTouched(false); // 다시 selectedBreedName을 믿어도 되는 상태
            } else {
              setToastKey(Date.now());
              setShowToast(true);
            }
          }}
        >
          <span className={styles.buttonText}>
            내 동물 정보에서 불러오기
            <IcRightArror
              width={20}
              height={20}
              stroke={selectedPetInfo === "myPet" ? color.primary.blue700 : color.gray.gray500}
            />
          </span>
        </button>

        {showToast && (
          <Toast
            key={toastKey}
            message="등록된 동물이 없어요. 직접 입력하기를 눌러주세요"
            showDeleteIcon={false}
            variant="blue"
          />
        )}

        {/* 버튼2. 직접 입력하기 */}
        <form
          className={styles.myPetInfoBtn({
            selected: selectedPetInfo === "manual",
            petInfoType: "manual",
          })}
        >
          <span className={styles.buttonText} onClick={() => handleSelectPetInfo("manual")}>
            직접 입력하기
            <IcChevronRight2
              className={styles.rotateIcon({ selected: selectedPetInfo === "manual" })}
              stroke={selectedPetInfo === "manual" ? color.primary.blue700 : color.gray.gray500}
            />
          </span>
          {selectedPetInfo === "manual" && (
            <DirectMyPetInfo
              isBreedInputTouched={isBreedInputTouched}
              setIsBreedInputTouched={setIsBreedInputTouched}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default ReviewPetInfo;
