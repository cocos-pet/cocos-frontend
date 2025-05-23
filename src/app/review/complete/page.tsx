"use client";

import dynamic from "next/dynamic";
import * as styles from "./style.css";
import registerPet from "@asset/lottie/registerPet.json";
import { Button } from "@common/component/Button";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const page = () => {
  const handleGoHospitalDetail = () => {
    window.history.go(-2);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>리뷰가 등록되었어요</h1>
      <Lottie animationData={registerPet} loop={false} autoplay={true} style={{ width: 285, height: 200 }} />
      <p className={`${styles.docs} ${styles.docsTop}`}>소중한 리뷰 감사해요!</p>
      <p className={`${styles.docs} ${styles.docsBottom}`}>작성한 리뷰는 마이페이지에서 볼 수 있어요.</p>
      <div className={styles.btnContainer}>
        <Button label="확인하기" onClick={handleGoHospitalDetail} />
      </div>
    </div>
  );
};

export default page;
