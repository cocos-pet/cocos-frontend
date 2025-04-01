import * as styles from "./Banner.css";
import banner from "@asset/image/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Image src={banner} alt="배너 이미지" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
