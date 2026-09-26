import * as styles from "./Banner.css.ts";
import bannerInquiry from "@asset/image/banner-inquiry.png";
import LazyImage from "@common/component/LazyImage.tsx";
import { EXTERNAL_URL } from "@shared/constant/externalUrl";

const Banner = () => {
  return (
    <a
      href={EXTERNAL_URL.KAKAO_INQUIRY_CHANNEL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.bannerContainer}
    >
      <LazyImage
        src={bannerInquiry}
        width="100%"
        height="10rem"
        alt="1:1 문의하기 배너"
        className={styles.bannerImage}
      />
    </a>
  );
};

export default Banner;
