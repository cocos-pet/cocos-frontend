import * as styles from "./Complete.css";
import { useNavigate } from "react-router-dom";
import Docs from "../index/common/docs/Docs";
import Title from "../index/common/title/Title";
import { Button } from "@common/component/Button";
import { IcComplete } from "@asset/svg";
const Complete = () => {
  // 뒤로 가기 (추후 플로우에 맞게 구현)
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate("/main");
  };
  // 다음 버튼
  const handleNext = () => {
    navigate("/register-pet");
  };
  return (
    <div className={styles.backGround}>
      <div className={styles.layout}>
        <div className={styles.titleWrapper}>
          <div>
            <Title text={"@@@님"} />
            <Title text={"반려동물을 등록해 주세요"} />
          </div>
          <Docs text={"작은 정보가 우리 아이의 건강을 지켜요"} />
        </div>
        <IcComplete />
      </div>
      <div className={styles.btnWrapper}>
        <Button label="건너뛰기" size="large" variant="solidNeutral" disabled={false} onClick={handleSkip} />
        <Button label="등록하기" size="large" variant="solidPrimary" disabled={false} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Complete;
