import * as styles from "./mainHeader.css";
import MainCarousel from "./Carousel/mainCarousel";
import { carouselMock } from "@shared/constant/carouselMock";

const MainHeader = () => {
  const { Images } = carouselMock;

  const formattedImages = Images.map((image, index) => ({
    id: `slide-${index}`,
    src: image.ImageUrl,
  }));

  return (
    <div className={styles.headerContainer}>
      <MainCarousel images={formattedImages} />

      <div className={styles.textContainer}>
        <p className={styles.headerText}>나의 반려동물을 위해 가장 알맞은 병원을 알아봐요</p>
        <p className={styles.textDetail}>자세히 알아보기</p>
      </div>
      {/*이미지 추후 변경 예정*/}
      <img className={styles.img} alt="이미지" />
    </div>
  );
};

export default MainHeader;
