import { IcChevronLeft, IcChevronRight, IcEditPen } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { PATH } from "@route/path";
import { useNavigate } from "react-router-dom";
import * as styles from "./PetEdit.css";
import Divider from "@common/component/Divider/Divider";
import { Button } from "@common/component/Button";
import { useEffect, useRef, useState } from "react";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { validateNickname } from "@shared/util/validateNickname";
import CategoryBottomSheet from "./component/CategoryBottomSheet/CategoryBottomSheet";
import { useCategoryFilterStore } from "./store/categoryFilter";

const DEFAULT_TYPE = ["종류", "세부 종류", "성별", "나이"] as const;

const PetEdit = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("포리");
  const [validationMessages, setValidationMessages] = useState<string[]>([]);
  const [isValid, setIsVaild] = useState(false);

  const { isOpen, setOpen, setCategory, setCategoryData, selectedChips, categoryData } = useCategoryFilterStore();

  // useEffect(() => {
  //   console.log(selectedChips);
  //   console.log(categoryData);
  // }, [selectedChips]);

  useEffect(() => {
    if (name) {
      const inVaildateMessages = validateNickname(name);
      setValidationMessages(inVaildateMessages); // 유효성 검사 메시지 업데이트
      setIsVaild(inVaildateMessages.length === 0); // 유효성 상태 설정
    }
  }, [name]);

  useEffect(() => {
    if (isEditing && ref.current) {
      ref.current.focus();
    }
  }, [isEditing]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    if (isValid) {
      setIsEditing(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValid) {
      setIsEditing(false);
    }
  };

  type SelectedTab = "disease" | "symptom";
  const openBottomSheet = (which: SelectedTab) => {
    if (which === "disease") {
      setCategory("disease");
      setOpen(true);
    } else {
      setCategory("symptoms");
      setOpen(true);
    }
  };

  return (
    <div>
      <HeaderNav
        leftIcon={<IcChevronLeft width={24} height={24} />}
        centerContent={"반려동물 정보 수정"}
        onLeftClick={() => navigate(PATH.MYPAGE.ROOT)}
      />
      <section className={styles.petEditWrapper}>
        <article className={styles.profileInfo}>
          <img className={styles.profileImage} alt="프로필 이미지" />
          <span className={styles.nicknameWrapper}>
            {isEditing ? (
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <input
                  ref={ref}
                  className={styles.nameInput}
                  value={name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleInputKeyDown}
                />
                <div className={styles.errorLayout}>
                  {validationMessages.map((message) => (
                    <Docs key={`error-${message}`} state="lError" text={message} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {name}
                <IcEditPen width={24} height={24} onClick={handleEditClick} style={{ cursor: "pointer" }} />
              </>
            )}
          </span>
        </article>

        <article className={styles.defaultInfo}>
          <span className={styles.defaultText}>기본 정보</span>
          <Divider size="small" />
          <div className={styles.defaultInfoListWrapper}>
            {DEFAULT_TYPE.map((item) => (
              <div key={`default-type-${item}`} className={styles.defaultInfoList}>
                <span className={styles.defaultInfoListLeft}>{item}</span>
                <button className={styles.defaultInfoListRight}>
                  강아지
                  <IcChevronRight width={20} height={20} />
                </button>
              </div>
            ))}
          </div>
        </article>
        <article className={styles.knownDisease}>
          <span className={styles.defaultText}>앓고있는/관심있는 질병</span>
          <Divider size="small" />
          <div className={styles.chipContainer}></div>
          <span style={{ width: "10.2rem" }}>
            <Button
              variant={"solidNeutral"}
              leftIcon={<IcEditPen width={20} height={20} />}
              label={"수정하기"}
              size="small"
              onClick={() => openBottomSheet("disease")}
            />
          </span>
        </article>
        <article className={styles.knownSymptoms}>
          <span className={styles.defaultText}>앓고있는/관심있는 증상</span>
          <Divider size="small" />
          <div className={styles.chipContainer}></div>
          <span style={{ width: "10.2rem" }}>
            <Button
              variant={"solidNeutral"}
              leftIcon={<IcEditPen width={20} height={20} />}
              label={"수정하기"}
              size="small"
              onClick={() => openBottomSheet("symptom")}
            />
          </span>
        </article>
        <CategoryBottomSheet />
      </section>
    </div>
  );
};

export default PetEdit;
