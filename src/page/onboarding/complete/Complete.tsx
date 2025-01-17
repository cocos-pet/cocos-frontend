import * as styles from "./Complete.css";
import { useNavigate } from "react-router-dom";
import Docs from "../index/common/docs/Docs";
import Title from "../index/common/title/Title";
import img from "@asset/image/image 1731.png";
import { Button } from "@common/component/Button";

const Complete = () => {
  // 뒤로 가기 (추후 플로우에 맞게 구현)
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 다음 버튼
  const handleNext = () => {
    navigate("/register-pet");
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.titleWrapper}>
          <div>
            <Title text={"@@@님!"} />
            <Title text={"반려동물을 등록해 주세요."} />
          </div>
          <Docs text={"작은 정보가 우리 아이의 건강을 지켜요 !"} />
        </div>
        <img src={img} alt="onboarding-character" width={296} height={325} />
      </div>
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={false} onClick={handleNext} />
      </div>
    </>
  );
};

export default Complete;
