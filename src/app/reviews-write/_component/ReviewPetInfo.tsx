import { IcRightArror, IcChevronRight2 } from "@asset/svg/index";
import { color } from "@style/styles.css";
import * as styles from "./ReviewPetInfo.style.css";
import DirectMyPetInfo from "./DirectMyPetInfo";
import { PetInfoType } from "@app/reviews-write/page";

interface ReviewPetInfoProps {
  selectedPetInfo: PetInfoType | null;
  onSelectPetInfo: (type: PetInfoType) => void;
}

const ReviewPetInfo = ({ selectedPetInfo, onSelectPetInfo }: ReviewPetInfoProps) => {
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
          className={styles.myPetInfoBtn({ selected: selectedPetInfo === "myPet" })}
          onClick={() => onSelectPetInfo("myPet")}
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

        {/* 버튼2. 직접 입력하기 */}
        <form
          className={styles.myPetInfoBtn({
            selected: selectedPetInfo === "manual",
            petInfoType: "manual",
          })}
        >
          <span className={styles.buttonText} onClick={() => onSelectPetInfo("manual")}>
            직접 입력하기
            <IcChevronRight2
              className={styles.rotateIcon({ selected: selectedPetInfo === "manual" })}
              stroke={selectedPetInfo === "manual" ? color.primary.blue700 : color.gray.gray500}
            />
          </span>
          {selectedPetInfo === "manual" && <DirectMyPetInfo />}
        </form>
      </div>
    </>
  );
};

export default ReviewPetInfo;
