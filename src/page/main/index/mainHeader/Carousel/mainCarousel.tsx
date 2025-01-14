import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import * as styles from "./mainCarousel.css";

interface MainCarouselProps {
  images: string[];
  slides: number[];
}

const MainCarousel = ({ images }: MainCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={styles.carouselContainer} ref={emblaRef}>
      <div className={styles.carouselSlides}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* 현재 슬라이드 / 총 슬라이드 표시 */}
      <div className={styles.carouselStatus}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default MainCarousel;
