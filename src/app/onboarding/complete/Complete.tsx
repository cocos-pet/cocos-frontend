import * as styles from "./Complete.css";
import {useRouter} from "next/navigation";
import Docs from "../index/common/docs/Docs";
import Title from "../index/common/title/Title";
import {Button} from "@common/component/Button";
import {PATH} from "@route/path";
import {useGetNickname} from "@api/domain/complete/hook";
import registerPet from "@asset/lottie/registerPet.json";
import Lottie from "lottie-react";

const Complete = () => {
  const router = useRouter();
  const handleSkip = () => {
    router.push(PATH.MAIN);
    window.location.reload();
  };

  const handleNext = () => {
    router.push(PATH.REGISTER_PET.ROOT);
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
        </div>
        {/* Lottie 애니메이션 */}
        <Lottie
          animationData={registerPet} // 애니메이션 JSON
          loop={false} // 반복 여부
          autoplay={true} // 자동 재생
          style={{ width: 296, height: 325 }}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button label="건너뛰기" size="large" variant="solidNeutral" onClick={handleSkip} />
        <Button label="등록하기" size="large" variant="solidPrimary" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Complete;
