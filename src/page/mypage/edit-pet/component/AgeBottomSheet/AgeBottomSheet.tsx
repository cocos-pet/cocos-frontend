import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import * as styles from "./AgeBottomSheet.css";
import { TextField } from "@common/component/TextField";
import { ChangeEvent } from "react";

interface AgeBottomSheetPropTypes {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  age: string;
  updatePetAge: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AgeBottomSheet = ({ isOpen, setIsOpen, age, updatePetAge }: AgeBottomSheetPropTypes) => {
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
          <Button label="확인하기" size="large" width="100%" onClick={() => setIsOpen(false)} />
        </div>
      </>
    </BottomSheet>
  );
};

export default AgeBottomSheet;
