import * as styles from "./mainHeader.css";
import MainCarousel from "./Carousel/mainCarousel";
import { carouselMock } from "@shared/constant/carouselMock";

const MainHeader = () => {
  const { Images } = carouselMock;
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={styles.headerContainer}>
      <MainCarousel
        images={Images.map((image) => image.ImageUrl)}
        slides={SLIDES}
      />

      <div className={styles.textContainer}>
        <p className={styles.headerText}>
          나의 반려동물을 위해 가장 알맞은 병원을 알아봐요
        </p>
        <p className={styles.textDetail}>자세히 알아보기</p>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default MainHeader;
