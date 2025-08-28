import * as styles from "./Banner.css.ts";
import banner from "@asset/image/banner.png";
import LazyImage from "@common/component/LazyImage.tsx";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <LazyImage src={banner} width="100%" height="10rem" alt="배너 이미지" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
