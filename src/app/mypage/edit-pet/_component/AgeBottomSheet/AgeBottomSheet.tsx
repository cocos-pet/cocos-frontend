import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import * as styles from "./AgeBottomSheet.css";
import { TextField } from "@common/component/TextField";
import { ChangeEvent } from "react";
import { usePatchPetInfo } from "@api/domain/mypage/edit-pet/hook";
import { validateBirthDate, toBirthDateString } from "@app/register-pet/index/utils/validateBirthDate";
import { getAgeFromBirthDate } from "@app/register-pet/index/utils/getAgeFromBirthDate";

interface AgeBottomSheetPropTypes {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  petBirth: string;
  updatePetBirth: (e: ChangeEvent<HTMLInputElement>) => void;
  birthError: string | null;
  petId: number;
  onUpdateSuccess?: () => void;
}

const AgeBottomSheet = ({
  isOpen,
  setIsOpen,
  petBirth,
  updatePetBirth,
  birthError,
  petId,
  onUpdateSuccess,
}: AgeBottomSheetPropTypes) => {
  const { mutate: patchPetInfo } = usePatchPetInfo();

  const validationResult = petBirth ? validateBirthDate(petBirth) : null;
  const isValid = validationResult?.valid ?? false;

  const handleClickButton = () => {
    if (isValid) {
      const birthDate = toBirthDateString(petBirth);
      const age = getAgeFromBirthDate(birthDate);
      patchPetInfo(
        { petId, reqBody: { age } },
        {
          onSuccess: () => {
            setIsOpen(false);
            onUpdateSuccess?.();
          },
        },
      );
    } else if (petBirth) {
      alert("올바른 생일을 입력해주세요");
    } else {
      alert("생일을 입력해주세요");
    }
  };

  return (
    <BottomSheet isOpen={isOpen} handleOpen={setIsOpen}>
      <>
        <div className={styles.ageWrapper}>
          <div className={styles.ageContainer}>
            <span className={styles.pleaseAgeText}>반려동물의 생일을 알려주세요.</span>
            <div className={styles.ageInputContainer}>
              <div className={styles.inputWithError}>
                <TextField
                  value={petBirth}
                  onChange={updatePetBirth}
                  placeholder="YYYY/MM/DD"
                  maxLength={10}
                  isDelete={false}
                  state={birthError ? "error" : "default"}
                />
                {birthError && (
                  <p className={styles.errorText} role="alert">
                    {birthError}
                  </p>
                )}
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
