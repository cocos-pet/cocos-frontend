import selectImg from "@asset/image/image 1733.png";

// 여기는 api 연결 아니나, api연결뷰와 컴포넌트를 공유해 다음과 같이 구현
export const data = {
  gender: [
    {
      id: 1,
      label: "암컷",
      image: selectImg,
    },
    {
      id: 2,
      label: "수컷",
      image: selectImg,
    },
  ],
};
