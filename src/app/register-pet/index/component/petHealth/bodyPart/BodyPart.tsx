import * as styles from "./BodyPart.css";
import Title from "@app/onboarding/index/common/title/Title";
import Docs from "@app/onboarding/index/common/docs/Docs";
import { bodiesGetResponse } from "@api/domain/register-pet/bodies";
import { ItemType, contentItem } from "./BodyPart.css";
import Checkbox from "@asset/svg/Checkbox";

interface BodyPartProps {
  selectedIds: number[];
  onBodyPartSelection: (id: number) => void;
  isSkipSelected: boolean;
  onSkipToggle: () => void;
  data: bodiesGetResponse["data"];
}
type CombinedStepProps = BodyPartProps & Exclude<ItemType, undefined>;

const BodyPart = ({ selectedIds, data, onBodyPartSelection, isSkipSelected, onSkipToggle }: CombinedStepProps) => {
  if (!data || !data.bodies) {
    return null; // 데이터가 없으면 컴포넌트 렌더링하지 않음
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
          <Title text="궁금한 부위를 선택하면" />
          <Title text="맞춤형 정보를 추천해드려요" />
        </div>
        <Docs text="최대 2개까지 선택할 수 있어요" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className={styles.scrollContainer}>
        <div className={styles.contentWrapper}>
          {data.bodies.map((body) => (
            <div key={body.id} className={contentItem()}>
              <button
                className={contentItem({ isClicked: selectedIds.includes(body.id ?? -1) })}
                onClick={() => {
                  body.id && handleSelection(body.id);
                }}
                type="button"
              >
                <img src={body.image} height={56} alt="body-img" />
              </button>
              <span className={styles.spanFont}>{body.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.skipTextWrapper}>
          <span className={styles.skipText}>특별한 문제는 없지만, 정보를 보고 싶어요</span>
          <Checkbox isSelected={isSkipSelected} className={styles.checkbox} onClick={onSkipToggle} />
        </div>
      </div>
    </>
  );
};

export default BodyPart;
