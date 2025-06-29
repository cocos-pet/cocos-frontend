import { useState, useMemo } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";
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
  isBreedInputTouched: boolean;
  setIsBreedInputTouched: (value: boolean) => void;
}

const DirectMyPetInfo = ({
  petType,
  setPetType,
  isBreedInputTouched,
  setIsBreedInputTouched,
}: DirectMyPetInfoProps) => {
  // 내 동물정보 가져오고 직접 입력하기로 동물 종류 수정하는 경우
  const watchedBreedId = useWatch({ name: "breedId" });
  const { control, watch, setValue } = useFormContext<ReviewFormData>();

  // 종, 성별 드롭다운
  const [activeDropDown, setActiveDropDown] = useState<"petType" | keyof ReviewFormData | null>(null);
  // 종류, 몸무게 포커스
  const [focusedField, setFocusedField] = useState<FocusableField | null>(null);
  // 드롭다운 필터링용 검색 입력값 (breedId는 리뷰 제출용)
  const [breedInput, setBreedInput] = useState("");

  const handleDropDownClick = (field: PetField, value: string | number) => {
    setValue(field, value);
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
    setValue("weight", formatted === "" ? -1 : Number(formatted));
  };

  // 텍스트 필드 분기 결정
  const getState = (field: FocusableField, value: string | number) => {
    const isFocused = focusedField === field || activeDropDown === field;
    const hasValue = typeof value === "string" ? !!value.trim() : value !== -1;
    return isFocused ? "focus" : hasValue ? "done" : "default";
  };

  // 종류 조회 api 연동시 종 정보를 보내야함
  const inferredPetId = useMemo(() => {
    if (petType === "고양이") return 1;
    if (petType === "강아지") return 2;
    return -1;
  }, [petType]);

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
            onClick={() => {
              setActiveDropDown((prev) => (prev === "petType" ? null : "petType"));
              setValue("breedId", -1); // 종 선택 시 breedId 초기화 (내 동물 정보에서 불러오기 먼저 클릭한 경우 초기화하기 위함)
              setBreedInput(""); // 입력값도 초기화
              setIsBreedInputTouched(false); // 입력 상태도 초기화
            }}
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
              const debouncedBreedInput = useDebounce(breedInput, 200);
              // 필터링된 종류
              const filteredBreeds = useMemo(() => {
                const breeds = (breedIdData?.data?.breeds ?? []).filter(
                  (item): item is { id: number; name: string } =>
                    typeof item.id === "number" && typeof item.name === "string",
                );
                const inputFiltered = breeds.filter((item) =>
                  item.name.replace(/\s+/g, "").includes(debouncedBreedInput.replace(/\s+/g, "")),
                );
                const lastBreed = breeds.at(-1); // 찾는종이 없음 필드
                const isLastIncluded = inputFiltered.some((b) => b.id === lastBreed?.id);

                return lastBreed && !isLastIncluded ? [...inputFiltered, lastBreed] : inputFiltered;
              }, [breedIdData, debouncedBreedInput]);

              const selectedBreedName = breedIdData?.data?.breeds?.find((b) => b.id === field.value)?.name ?? "";
              return (
                <>
                  <TextField
                    value={isBreedInputTouched ? breedInput : selectedBreedName}
                    onChange={(e) => {
                      setBreedInput(e.target.value);
                      setIsBreedInputTouched(true); // 유저가 입력한 시점부터는 selectedBreedName 금지
                    }}
                    onClick={() => {
                      setActiveDropDown("breedId");
                      setFocusedField("breedId");
                      setIsBreedInputTouched(true); // 클릭만 해도 이제부터는 breedInput만 보여줌
                    }}
                    placeholder="예시: 샴"
                    isDelete={false}
                    maxLength={20}
                    state={watchedBreedId !== -1 ? "done" : getState("breedId", watchedBreedId)}
                  />
                  {activeDropDown === "breedId" && (
                    <DropDown
                      isOpen
                      items={filteredBreeds}
                      onClickItem={(selectedName) => {
                        const selected = filteredBreeds.find((b) => b.name === selectedName);
                        if (selected) {
                          setBreedInput(selected.name);
                          setIsBreedInputTouched(true); // 이 시점부터는 breedInput 고정
                          handleDropDownClick("breedId", selected.id);
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
