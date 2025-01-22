import * as styles from "./Step1.css";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { bodiesGetResponse } from "@api/domain/register-pet/bodies";
import { ItemType, contentItem } from "./Step1.css";

interface Step1Props {
  selectedIds: number[];
  onBodyPartSelection: (id: number) => void;
  data: bodiesGetResponse["data"];
}
type CombinedStepProps = Step1Props & Exclude<ItemType, undefined>;
const Step1 = ({ selectedIds, data, onBodyPartSelection }: CombinedStepProps) => {
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
          <Title text="질병 부위를 선택하면" />
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
                body.id && handleSelection(body.id);
              }}
              type="button"
            >
              <img src={body.image} width={56} height={56} alt="body-img" />
            </button>
            <p>{body.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Step1;
