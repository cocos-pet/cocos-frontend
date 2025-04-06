import * as styles from "@app/register-pet/index/component/petHealth/disease/Step1.css";
import Title from "@app/onboarding/index/common/title/Title";
import Docs from "@app/onboarding/index/common/docs/Docs";
import { bodiesGetResponse } from "@api/domain/register-pet/bodies";
import { ItemType, contentItem } from "@app/register-pet/index/component/petHealth/disease/Step1.css";

interface SymStepProps {
  selectedIds: number[];
  onBodyPartSelection: (id: number) => void;
  data: bodiesGetResponse["data"];
}
type CombinedSymStepProps = SymStepProps & Exclude<ItemType, undefined>;
const SymStep1 = ({ data, selectedIds, onBodyPartSelection }: CombinedSymStepProps) => {
  if (!data || !data.bodies) {
    return null;
  }
  const handleSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      // 이미 선택된 항목은 선택 해제
      onBodyPartSelection(id);
    } else if (selectedIds.length < 2) {
      // 2개 미만일 때만 새 항목 추가
      onBodyPartSelection(id);
    }
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
        {data.bodies.map((body) => (
          <div key={body.id} className={contentItem()}>
            <button
              className={contentItem({ isClicked: selectedIds.includes(body.id ?? -1) })}
              onClick={() => {
                if (body.id !== undefined) {
                  handleSelection(body.id);
                }
              }}
              type="button"
            >
              <img src={body.image} height={56} alt="body-img" />
            </button>
            <span className={styles.spanFont}>{body.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SymStep1;
