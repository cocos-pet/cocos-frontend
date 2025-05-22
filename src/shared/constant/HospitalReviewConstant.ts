import { ReviewItemType } from "@shared/component/ReviewItem/ReviewItem";
import nocategory from "@asset/image/nocategory.png";

// nocategory의 src 속성을 사용하여 문자열로 변환
const mockImageSrc = nocategory.src;

// ReviewItem에 사용할 mock 데이터 배열
export const mockReviews: ReviewItemType[] = [
  {
    id: 1,
    memberId: 101,
    nickname: "코코스유저",
    breedName: "샴",
    petDisease: "비뇨기 질환",
    petAge: 3,
    vistitedAt: "2025.01.01",
    hospitalId: 201,
    hospitalName: "코코스동물병원",
    hospitalAddress: "서울시 강남구 테헤란로",
    content:
      "진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.",
    goodReviews: [
      { id: 1, name: "시설이 좋아요" },
      { id: 2, name: "친절해요" },
    ],
    badReviews: [],
    images: [mockImageSrc, mockImageSrc, mockImageSrc, mockImageSrc, mockImageSrc, mockImageSrc],
    symptoms: [
      { id: 1, name: "메롱" },
      { id: 2, name: "메롱" },
    ],
    diseases: [
      { id: 1, name: "메롱" },
      { id: 2, name: "메롱" },
    ],
    animal: "고양이",
    gender: "암컷",
    breed: "샴",
    weight: 9.7,
  },
  {
    id: 2,
    memberId: 101,
    nickname: "코코스유저",
    breedName: "샴",
    petDisease: "비뇨기 질환",
    petAge: 3,
    vistitedAt: "2025.01.01",
    hospitalId: 201,
    hospitalName: "코코스동물병원",
    hospitalAddress: "서울시 강남구 테헤란로",
    content:
      "진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.",
    goodReviews: [
      { id: 1, name: "시설이 좋아요" },
      { id: 2, name: "친절해요" },
    ],
    badReviews: [
      { id: 1, name: "시설이 나쁘다구" },
      { id: 2, name: "친절안해요" },
    ],
    images: [mockImageSrc, mockImageSrc, mockImageSrc, mockImageSrc, mockImageSrc, mockImageSrc],
    symptoms: [
      { id: 1, name: "메롱" },
      { id: 2, name: "메롱" },
    ],
    diseases: [
      { id: 1, name: "메롱" },
      { id: 2, name: "메롱" },
    ],
    animal: "고양이",
    gender: "암컷",
    breed: "샴",
    weight: 9.7,
  },
];
