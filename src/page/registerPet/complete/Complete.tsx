import * as styles from "./Complete.css";
import { useNavigate } from "react-router-dom";
import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import { Button } from "@common/component/Button";
import img from "@asset/image/등록전그래픽.png";

const Complete = () => {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate("/main");
  };

  return (
    <div className={styles.backGround}>
      <div className={styles.layout}>
        <div className={styles.titleWrapper}>
          <div>
            <Title text={"@@@님"} />
            <Title text={"등록이 완료되었습니다"} />
          </div>
          <Docs text={"반려동물과 함께하는 긴 시간, 더 잘 돌봐드릴게요"} />
        </div>
        <img src={img} alt="onboarding-character" width={296} height={325} />
      </div>

      <div className={styles.btnWrapper}>
        <Button label="동물 등록 끝내기" size="large" variant="solidPrimary" onClick={handleSkip} />
      </div>
    </div>
  );
};

export default Complete;
