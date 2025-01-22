import * as styles from "./Banner.css";
import banner from "@asset/image/banner.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={banner} alt="배너 이미지" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
