import * as styles from "./mainHeader.css";
import MainCarousel from "./Carousel/mainCarousel";
import {carouselImages} from "./Carousel/Images";

const MainHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <MainCarousel images={carouselImages} />
    </div>
  );
};

export default MainHeader;
