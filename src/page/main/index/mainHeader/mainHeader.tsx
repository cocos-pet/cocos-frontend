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

      {/*이미지 추후 변경 예정*/}
      <img className={styles.img} alt="이미지" />
    </div>
  );
};

export default MainHeader;
