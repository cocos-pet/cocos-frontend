import * as styles from "./Complete.css";
import { useNavigate } from "react-router-dom";
import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import { Button } from "@common/component/Button";
import img from "@asset/image/beforeRegisterGraphic.png";
import { PATH } from "@route/path";
import { useGetNickname } from "@api/domain/complete/hook";

const Complete = () => {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate(PATH.MAIN);
  };

  // api
  const { data: nickname } = useGetNickname();

  return (
    <div className={styles.backGround}>
      <div className={styles.layout}>
        <div className={styles.titleWrapper}>
          <div>
            <Title text={`${nickname?.nickname}님`} />
            <Title text={"등록이 완료되었어요"} />
          </div>
          <Docs text={"더 건강한 반려동물을 위해 코코스가 함께할게요"} />
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
