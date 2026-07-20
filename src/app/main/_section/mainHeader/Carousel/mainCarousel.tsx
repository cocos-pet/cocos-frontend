"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import * as styles from "./mainCarousel.css.ts";
import Image, { StaticImageData } from "next/image";

interface MainCarouselProps {
  images: { id: string; src: StaticImageData | string }[];
}

const CAROUSEL_SIZES = "(max-width: 76.8rem) 100vw, 76.8rem";

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
        {images.map((image, index) => (
          <div key={image.id} className={styles.carouselSlide}>
            <Image
              src={image.src}
              alt={`Slide ${image.id}`}
              className={styles.image}
              width={390}
              height={156}
              sizes={CAROUSEL_SIZES}
              // priority: <link rel="preload"> 추가
              // fetchPriority: img + preload 요청 모두에 high 적용 (Next 15부터 분리됨)
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
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
