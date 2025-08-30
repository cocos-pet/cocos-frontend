import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@design-system/Button";
import * as styles from "./AgeBottomSheet.css";
import { TextField } from "src/design-system/TextField";
import { ChangeEvent } from "react";
import { usePatchPetInfo } from "@api/domain/mypage/edit-pet/hook";

interface AgeBottomSheetPropTypes {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  age: string;
  updatePetAge: (e: ChangeEvent<HTMLInputElement>) => void;
  petId: number;
}

const AgeBottomSheet = ({ isOpen, setIsOpen, age, updatePetAge, petId }: AgeBottomSheetPropTypes) => {
  const { mutate: patchPetInfo } = usePatchPetInfo();

  const handleClickButton = () => {
    if (age) {
      patchPetInfo({ petId, reqBody: { age: Number(age) } });
      setIsOpen(false);
    } else {
      alert("올바른 나이를 입력해주세요");
    }
  };

  return (
    <BottomSheet isOpen={isOpen} handleOpen={setIsOpen}>
      <>
        <div className={styles.ageWrapper}>
          <div className={styles.ageContainer}>
            <span className={styles.pleaseAgeText}>반려동물의 나이를 알려주세요.</span>
            <div className={styles.ageInputContainer}>
              <div className={styles.ageInputWrapper}>
                <span style={{ minWidth: "10rem" }}>
                  <TextField
                    state="centerPlaceholder"
                    value={age}
                    onChange={(e) => {
                      updatePetAge(e);
                    }}
                    placeholder="나이"
                    maxLength={2}
                    isDelete={false}
                  />
                </span>
                살
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button label="수정하기" size="large" style={{ width: "100%" }} onClick={handleClickButton} />
        </div>
      </>
    </BottomSheet>
  );
};

export default AgeBottomSheet;
