import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import * as styles from "./DirectMyPetInfo.style.css";
import { ReviewFormData } from "../page";
import { TextField } from "@common/component/TextField/index";
import DropDown from "@app/register-pet/index/common/dropDown/DropDown";
import { GENDER, PET_TYPES } from "../constant";
import { usePetIdGet } from "@api/domain/register-pet/petId/hook";
import { useDebounce } from "@shared/hook/useDebounce";

const DirectMyPetInfo = () => {
  const { control, watch, setValue } = useFormContext<ReviewFormData>();

  type PetField = keyof ReviewFormData;
  type FocusableField = keyof ReviewFormData | "petType";

  // 종은 리뷰 제출 항목이 아니므로 리액트 훅폼 상태에서 분리
  const [petType, setPetType] = useState("");
  // 종, 성별 드롭다운
  const [activeDropDown, setActiveDropDown] = useState<"petType" | keyof ReviewFormData | null>(null);
  // 종류, 몸무게 포커스
  const [focusedField, setFocusedField] = useState<FocusableField | null>(null);
  const [breedInput, setBreedInput] = useState("");

  const handleDropDownClick = (field: PetField, value: string) => {
    const trimmedValue = value.replace(/\s+/g, "");
    setValue(field, trimmedValue);
    setActiveDropDown(null);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const input = e.target.value.replace(/[^0-9.]/g, "");
    const [intPart = "", ...rest] = input.split(".");
    const decimal = rest.join("").slice(0, 1);
    const trimmedInt = intPart.slice(0, 3);
    const formatted =
      trimmedInt === "" && input.startsWith(".") ? `0.${decimal}` : `${trimmedInt}${rest.length ? `.${decimal}` : ""}`;
    onChange(formatted);
  };

  // 텍스트 필드 분기 결정
  const getState = (field: PetField, value: string | number) => {
    const isFocused = focusedField === field || activeDropDown === field;
    const hasValue = typeof value === "string" ? !!value.trim() : typeof value === "number" && value !== -1;
    return isFocused ? "focus" : hasValue ? "done" : "default";
  };

  // 내 동물정보 클릭 후 직접 입력하기 클릭시 F/M 렌더링 방지
  const getGenderLabel = (value: string) => {
    if (value === "F") return "암컷";
    if (value === "M") return "수컷";
    return value;
  };

  const breedId = Number(watch("breedId"));
  const inferredPetId = breedId > 0 ? (breedId < 230 ? 2 : 1) : null;
  // api
  const { data: breedIdData } = usePetIdGet(inferredPetId ?? 2); 
  const selectedBreed = breedIdData?.data?.breeds?.find((b) => b.id === breedId);
  // petType 렌더링용 display 값
  const displayPetType = selectedBreed ? (inferredPetId === 2 ? "강아지" : "고양이") : petType;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* 1-3-1. 종 */}
        <div className={styles.halfTextField}>
          <span>종</span>
          <TextField
            value={displayPetType}
            onChange={(e) => setPetType(e.target.value)}
            onClick={() => setActiveDropDown((prev) => (prev === "petType" ? null : "petType"))}
            placeholder="종 선택하기"
            isDelete={false}
            state={activeDropDown === "petType" ? "focus" : displayPetType.trim() ? "done" : "default"}
          />
          {activeDropDown === "petType" && (
            <DropDown
              isOpen
              items={PET_TYPES.filter((item) => item.name.includes(petType))}
              onClickItem={(value) => {
                const trimmedValue = value.replace(/\s+/g, "");
                setPetType(trimmedValue);
                setActiveDropDown(null);
              }}
              size="half"
            />
          )}
        </div>

        {/* 1-3-2. 성별 */}
        <div className={styles.halfTextField}>
          <span>성별</span>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  value={getGenderLabel(field.value)}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="성별 선택하기"
                  isDelete={false}
                  onClick={() => setActiveDropDown((prev) => (prev === "gender" ? null : "gender"))}
                  state={getState("gender", field.value)}
                />
                {activeDropDown === "gender" && (
                  <DropDown
                    isOpen
                    items={GENDER.filter((item) => item.name.includes(field.value))}
                    onClickItem={(value) => {
                      const mapped = value === "암컷" ? "F" : value === "수컷" ? "M" : value;
                      handleDropDownClick("gender", mapped);
                    }}
                    size="half"
                  />
                )}
              </>
            )}
          />
        </div>
      </div>

      <div className={styles.container}>
        {/* 1-3-3. 종류 */}
        <div className={styles.halfTextField}>
          <span>종류</span>
          <Controller
            name="breedId"
            control={control}
            render={({ field }) => {
              const stringValue = field.value === -1 ? "" : String(field.value);
              const debouncedBreedInput = useDebounce(breedInput, 200);

              const filteredBreeds =
                breedIdData?.data?.breeds?.filter(
                  (item): item is { id: number; name: string } =>
                    typeof item.id === "number" &&
                    typeof item.name === "string" &&
                    item.name.replace(/\s+/g, "").includes(debouncedBreedInput.replace(/\s+/g, "")),
                ) ?? [];

              const selectedBreedName = breedIdData?.data?.breeds?.find((b) => b.id === field.value)?.name ?? "";
              return (
                <>
                  <TextField
                    value={selectedBreedName}
                    onChange={(e) => setBreedInput(e.target.value)}
                    onClick={() => setActiveDropDown("breedId")}
                    placeholder="예시: 샴"
                    isDelete={false}
                    maxLength={20}
                    state={getState("breedId", stringValue)}
                  />
                  {activeDropDown === "breedId" && (
                    <DropDown
                      isOpen
                      items={filteredBreeds}
                      onClickItem={(selectedName) => {
                        const selected = filteredBreeds.find((b) => b.name === selectedName);
                        if (selected) {
                          setBreedInput(selected.name);
                          setValue("breedId", selected.id);
                          setActiveDropDown(null);
                        }
                      }}
                      size="half"
                    />
                  )}
                </>
              );
            }}
          />
        </div>

        {/* 1-3-4. 몸무게 */}
        <div className={styles.halfTextField}>
          <span>몸무게(kg)</span>
          <Controller
            name="weight"
            control={control}
            render={({ field }) => {
              const stringValue = field.value === -1 ? "" : String(field.value);
              return (
                <TextField
                  value={stringValue}
                  onChange={(e) => handleWeightChange(e, field.onChange)}
                  onFocus={() => setFocusedField("weight")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="예시: 5.3"
                  isDelete={false}
                  state={getState("weight", stringValue)}
                />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DirectMyPetInfo;
