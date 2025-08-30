"use client";

import * as styles from "./Complete.css";
import { useRouter } from "next/navigation";

import { Button } from "@design-system/Button";
import { PATH } from "@route/path";
import { useGetNickname } from "@api/domain/complete/hook";
import onboarding from "@asset/lottie/onboarding.json";
import Title from "../../onboarding/index/common/title/Title.tsx";
import Docs from "../../onboarding/index/common/docs/Docs.tsx";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Page = () => {
  const router = useRouter();
  const handleSkip = () => {
    router.push(PATH.MAIN);
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
        {/* Lottie 애니메이션 */}
        <Lottie
          animationData={onboarding} // 애니메이션 JSON
          loop={false} // 반복 여부
          autoplay={true} // 자동 재생
          style={{ width: 296, height: 325 }}
        />
      </div>

      <div className={styles.btnWrapper}>
        <Button label="동물 등록 끝내기" size="large" variant="solidPrimary" onClick={handleSkip} />
      </div>
    </div>
  );
};

export default Page;
