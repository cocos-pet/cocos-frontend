import * as styles from "./Step1.css";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { IcIcons } from "@asset/svg";
import { DISEASE, BodyPart } from "@page/registerPet/index/component/petHealth/disease/Step1Constant";

const Step1 = ({
  selectedIds,
  onBodyPartSelection
}: {
  selectedIds: number[];
  onBodyPartSelection: (id: number) => void;
}) => {
  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.title}>
        <div>
          <Title text="질병 부위를 선택하면" />
          <Title text="맞춤형 정보를 추천해드려요" />
        </div>
        <Docs text="최대 2개까지 선택할 수 있어요" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className={styles.contentWrapper}>
        {DISEASE.data.bodies.map((body: BodyPart) => (
          <button
            key={body.id}
            className={`${styles.contentItem} ${selectedIds.includes(body.id) ? styles.selected : ""}`}
            onClick={() => onBodyPartSelection(body.id)}
            type="button"
          >
            <IcIcons width={56} height={56} />
            <p>{body.name}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Step1;