import MainCarousel from "./mainCarousel";

const MainCarouselWrapper = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg", 
  ];

  return <MainCarousel images={images} />;
};

export default MainCarouselWrapper;
