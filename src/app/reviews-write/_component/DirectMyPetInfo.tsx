import { useState } from "react";
import { useForm } from "react-hook-form";
import * as styles from "./DirectMyPetInfo.style.css";

import { TextField } from "@common/component/TextField/index";
import DropDown from "@app/register-pet/index/common/dropDown/DropDown";

const GENDER = [
  { id: 1, name: "암컷" },
  { id: 2, name: "수컷" },
];

const PET_TYPES = [
  { id: 1, name: "강아지" },
  { id: 2, name: "고양이" },
];

interface PetFormValues {
  petType: string;
  petGender: string;
  petId: string;
  petWeight: string;
}

type PetField = keyof PetFormValues;

const DirectMyPetInfo = () => {
  const { register, setValue, watch } = useForm<PetFormValues>({
    defaultValues: {
      petType: "",
      petGender: "",
      petId: "",
      petWeight: "",
    },
  });

  // 필드 감지
  const { petType, petGender, petId, petWeight } = watch();

  // 드롭다운 열림, 닫힘 상태 관리
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);

  const handleTextFieldClick = (field: string) => {
    setActiveDropDown((prev) => (prev === field ? null : field));
  };

  const handleDropDownClick = (field: PetField, value: string) => {
    const trimmedValue = value.replace(/\s+/g, "");
    setValue(field, trimmedValue);
    setActiveDropDown(null);
  };

  const filteredGenderItems = GENDER.filter((item) => item.name.includes(petGender));
  const filteredPetTypeItems = PET_TYPES.filter((item) => item.name.includes(petType));

  // 몸무게 입력 제한
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자와 소수점만 허용
    const input = e.target.value.replace(/[^0-9.]/g, "");
    // 소수점이 여러 개면 첫 번째만 남기고 제거
    const [intPart = "", ...rest] = input.split(".");
    const decimal = rest.join("").slice(0, 1); // 소수점 이후 첫 자리만
    const trimmedInt = intPart.slice(0, 3);
    const formatted = `${trimmedInt}${rest.length ? `.${decimal}` : ""}`; // 소수점 포함 여부 판단

    setValue("petWeight", trimmedInt === "" && input.startsWith(".") ? `0.${decimal}` : formatted);
  };
  return (
    <div className={styles.wrapper}>
      {/* 1-3-1. 종 */}
      <div className={styles.container}>
        <div>
          <span>종</span>
          <TextField
            {...register("petType")}
            placeholder={"종 선택하기"}
            state="half"
            isDelete={false}
            onClick={() => handleTextFieldClick("petType")}
            focus={petType !== ""}
          />
          {activeDropDown === "petType" && (
            <DropDown
              isOpen={true}
              items={filteredPetTypeItems}
              onClickItem={(value) => handleDropDownClick("petType", value)}
              size="half"
            />
          )}
        </div>

        {/* 1-3-2. 성별 */}
        <div>
          <span>성별</span>
          <TextField
            {...register("petGender")}
            placeholder={"성별 선택하기"}
            state="half"
            isDelete={false}
            onClick={() => handleTextFieldClick("petGender")}
            focus={petGender !== ""}
          />
          {activeDropDown === "petGender" && (
            <DropDown
              isOpen={true}
              items={filteredGenderItems}
              onClickItem={(value) => handleDropDownClick("petGender", value)}
              size="half"
            />
          )}
        </div>
      </div>

      {/* 1-3-3. 종류 */}
      <div className={styles.container}>
        <div>
          <span>종류</span>
          <TextField
            {...register("petId")}
            placeholder={"예시: 샴"}
            state="half"
            isDelete={false}
            focus={petId !== ""}
            maxLength={20}
          />
        </div>

        {/* 1-3-4. 몸무게 */}
        <div>
          <span>몸무게</span>
          <TextField
            {...register("petWeight")}
            placeholder={"예시: 5.3kg"}
            state="half"
            isDelete={false}
            focus={petWeight !== ""}
            onChange={handleWeightChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DirectMyPetInfo;
