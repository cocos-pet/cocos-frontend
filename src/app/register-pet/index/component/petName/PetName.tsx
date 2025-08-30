import React, {ChangeEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import * as styles from "./PetName.css";

import {TextField} from "@design-system/TextField";
import {Button} from "@design-system/Button";
import {validatePetName} from "@shared/util/validatePetName";
import petNameBori from "@asset/image/petNameBori.png";
import {PATH} from "@route/path";
import Image from "next/image";
import {PetData} from "../../RegisterPet.tsx";
import {ONBOARDING_GUIDE} from "../../../../onboarding/index/constant/onboardingGuide.ts";
import Title from "../../../../onboarding/index/common/title/Title.tsx";
import Docs from "../../../../onboarding/index/common/docs/Docs.tsx";
import {useIsPetRegistered} from "@common/hook/useIsPetRegistered.ts";

interface PetNameProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: string) => void; // PetData의 key와 string 값
}

const PetName = ({ setStep, updatePetData }: PetNameProps) => {
  const [petName, setPetName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPetName(e.target.value);
  };

  const validationMessages = petName ? validatePetName(petName) : [];
  const isValid = petName && validationMessages.length === 0;

  const isPetRegistered = useIsPetRegistered();

  useEffect(() => {
    if (isPetRegistered) {
      alert("이미 반려동물이 등록되어 있습니다.");
      window.history.go(-1);
    }
  }, [isPetRegistered]);

  // 등록된 경우엔 화면 자체를 보여주지 않음
  if (isPetRegistered) return null;

  // 뒤로 가기
  const router = useRouter();
  const handleGoBack = () => {
    router.push(PATH.LOGIN);
  };

  const handleNext = () => {
    if (isValid) {
      updatePetData("name", petName);
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Image src={petNameBori} alt="onboarding-character" className={styles.imgStyle} width={276} height={155} />
          <Title text={ONBOARDING_GUIDE.petName.title} />
          <Docs text={ONBOARDING_GUIDE.petName.docs} />
        </div>

        {/* 펫 이름 입력 영역 */}
        <div>
          <TextField
            state={petName === "" ? "default" : isValid ? "default" : "error"}
            value={petName}
            onChange={handleChange}
            placeholder="반려동물의 이름을 입력해주세요."
            isDelete={false}
          />
          <div className={styles.errorLayout}>
            {validationMessages.map((message) => (
              <Docs key={`error-${message}`} state="lError" text={message} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!isValid} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetName;
