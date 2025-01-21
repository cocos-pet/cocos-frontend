import * as styles from "./Banner.css";
import image_banner from "@asset/image/image_banner.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={image_banner} alt="배너 이미지" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
