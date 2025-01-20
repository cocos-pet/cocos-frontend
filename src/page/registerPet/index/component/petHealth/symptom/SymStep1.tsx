import * as styles from "@page/registerPet/index/component/petHealth/disease/Step1.css";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { IcIcons } from "@asset/svg";
import { SYMPTOM, BodyPart } from "@page/registerPet/index/component/petHealth/symptom/SymStep1Constant";

const SymStep1 = ({
  selectedIds,
  onBodyPartSelection,
}: {
  selectedIds: number[];
  onBodyPartSelection: (id: number) => void;
}) => {
  const handleSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      // 이미 선택된 항목은 선택 해제
      onBodyPartSelection(id);
    } else if (selectedIds.length < 2) {
      // 2개 미만일 때만 새 항목 추가
      onBodyPartSelection(id);
    }
    // 선택 개수가 2개를 초과하는 경우 무시
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.title}>
        <div>
          <Title text="증상 부위를 선택하면" />
          <Title text="맞춤형 정보를 추천해드려요" />
        </div>
        <Docs text="최대 2개까지 선택할 수 있어요" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className={styles.contentWrapper}>
        {SYMPTOM.data.bodies.map((body: BodyPart) => (
          <button
            key={body.id}
            className={`${styles.contentItem} ${selectedIds.includes(body.id) ? styles.selected : ""}`}
            onClick={() => handleSelection(body.id)}
            type="button"
          >
            {/* 아이콘도 api */}
            <IcIcons width={56} height={56} />
            <p>{body.name}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default SymStep1;
