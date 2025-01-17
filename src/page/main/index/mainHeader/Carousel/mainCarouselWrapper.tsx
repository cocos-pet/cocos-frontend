import MainCarousel from "./mainCarousel";

const MainCarouselWrapper = () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  const formattedImages = images.map((src, index) => ({
    id: `image-${index}`,
    src,
  }));

  return <MainCarousel images={formattedImages} />;
};

export default MainCarouselWrapper;
