import { useState, useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import * as styles from "./DirectMyPetInfo.style.css";
import { ReviewFormData } from "../page";
import { TextField } from "@common/component/TextField/index";
import DropDown from "@app/register-pet/index/common/dropDown/DropDown";
import { GENDER, PET_TYPES } from "../constant";
import { usePetIdGet } from "@api/domain/register-pet/petId/hook";
import { useDebounce } from "@shared/hook/useDebounce";

type PetField = keyof ReviewFormData;
type FocusableField = keyof ReviewFormData | "petType";

interface DirectMyPetInfoProps {
  petType: string;
  setPetType: (value: string) => void;
}

const DirectMyPetInfo = ({ petType, setPetType }: DirectMyPetInfoProps) => {
  const { control, watch, setValue } = useFormContext<ReviewFormData>();

  // 종, 성별 드롭다운
  const [activeDropDown, setActiveDropDown] = useState<"petType" | keyof ReviewFormData | null>(null);
  // 종류, 몸무게 포커스
  const [focusedField, setFocusedField] = useState<FocusableField | null>(null);
  // 드롭다운 필터링용 검색 입력값
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
  const getState = (field: FocusableField, value: string | number) => {
    const isFocused = focusedField === field || activeDropDown === field;
    const hasValue = typeof value === "string" ? !!value.trim() : value !== -1;
    return isFocused ? "focus" : hasValue ? "done" : "default";
  };

  // 종류 조회 api 연동시 종 정보를 보내야함
  const breedId = Number(watch("breedId"));
  const inferredPetId = useMemo(() => {
    return breedId > 0 ? (breedId < 230 ? 2 : 1) : -1;
  }, [breedId]);

  // api
  const { data: breedIdData } = usePetIdGet(inferredPetId ?? 2);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* 1-3-1. 종 */}
        <div className={styles.halfTextField}>
          <span>종</span>
          <TextField
            value={petType}
            onClick={() => setActiveDropDown((prev) => (prev === "petType" ? null : "petType"))}
            placeholder="종 선택하기"
            isDelete={false}
            state={getState("petType", petType)}
            readOnly
          />
          {activeDropDown === "petType" && (
            <DropDown
              isOpen
              items={PET_TYPES}
              onClickItem={(name) => {
                // 리뷰 제출 항목이 아니므로 handleDropDownClick함수 사용 불가
                setPetType(name);
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
                  value={field.value === "F" ? "암컷" : field.value === "M" ? "수컷" : ""}
                  onClick={() => setActiveDropDown((prev) => (prev === "gender" ? null : "gender"))}
                  placeholder="성별 선택하기"
                  isDelete={false}
                  state={getState("gender", field.value ?? "")}
                  readOnly
                />
                {activeDropDown === "gender" && (
                  <DropDown
                    isOpen
                    items={GENDER}
                    onClickItem={(value) => {
                      const mapped = value === "암컷" ? "F" : "M";
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
