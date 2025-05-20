import useEmblaCarousel from "embla-carousel-react";
import {useEffect, useState} from "react";
import * as styles from "./mainCarousel.css";
import Image, { StaticImageData } from "next/image";

interface MainCarouselProps {
  images: { id: string; src: StaticImageData | string }[];
}

const MainCarousel = ({ images }: MainCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className={styles.carouselContainer} ref={emblaRef}>
      <div className={styles.carouselSlides}>
        {images.map((image) => (
          <div key={image.id} className={styles.carouselSlide}>
            <Image src={image.src} alt={`Slide ${image.id}`} className={styles.image} width={390} height={156} />
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
