import * as styles from "./mainHeader.css.ts";
import MainCarousel from "./Carousel/mainCarousel.tsx";
import {carouselImages} from "./Carousel/Images.ts";

const MainHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <MainCarousel images={carouselImages} />
    </div>
  );
};

export default MainHeader;
