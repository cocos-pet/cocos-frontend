import * as styles from "./Complete.css";
import { useNavigate } from "react-router-dom";
import Docs from "../index/common/docs/Docs";
import Title from "../index/common/title/Title";
import { Button } from "@common/component/Button";
// import img from "@asset/image/beforeRegisterGraphic.png";
import { PATH } from "@route/path";
import { useGetNickname } from "@api/domain/complete/hook";
import { Player } from "@lottiefiles/react-lottie-player"; // lottie-react 대신 Player 사용
import registerPet from "@asset/lottie/registerPet.json";

const Complete = () => {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate(PATH.MAIN);
  };

  const handleNext = () => {
    navigate(PATH.REGISTER_PET.ROOT);
  };

  // api
  const { data: nickname } = useGetNickname();
  if (!nickname) return;

  return (
    <div className={styles.backGround}>
      <div className={styles.layout}>
        <div className={styles.titleWrapper}>
          <div>
            <Title text={`${nickname.nickname}님`} />
            <Title text={"반려동물을 등록해 주세요"} />
          </div>
          <Docs text={"작은 정보가 우리 아이의 건강을 지켜요"} />
        </div>{" "}
        <Player autoplay loop={false} src={registerPet} />
        {/* <img src={img} alt="onboarding-character" width={296} height={325} /> */}
      </div>
      <div className={styles.btnWrapper}>
        <Button label="건너뛰기" size="large" variant="solidNeutral" onClick={handleSkip} />
        <Button label="등록하기" size="large" variant="solidPrimary" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Complete;
