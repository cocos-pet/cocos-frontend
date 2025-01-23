import { CategoryGender } from "@page/mypage/edit-pet/store/animalFilter";

// todo: api 요청으로 받아오는 예시
export const CATEGORY_KIND = [
  { id: 1, name: "고양이" },
  { id: 2, name: "강아지" },
];

export const CATEGORY_SYMPTOM = [
  {
    id: 1,
    name: "눈",
    symptoms: [
      { id: 1, name: "눈이 아파요" },
      {
        id: 2,
        name: "눈이 시려요",
      },
      {
        id: 3,
        name: "눈이 시려요",
      },
      {
        id: 4,
        name: "눈이 시려요",
      },
      {
        id: 5,
        name: "눈이 시려요",
      },
      {
        id: 6,
        name: "눈이 시려요",
      },
      {
        id: 7,
        name: "눈이 실실요",
      },
      {
        id: 8,
        name: "눈이 하하요",
      },
    ],
  },
  {
    id: 2,
    name: "코",
    symptoms: [
      {
        id: 1,
        name: "코가 아파요",
      },
      {
        id: 2,
        name: "코가 시려요",
      },
    ],
  },
];

export const CATEGORY_DISEASE = [
  {
    id: 1,
    name: "눈",
    diseases: [
      {
        id: 1,
        name: "눈이 아파요",
      },
      {
        id: 2,
        name: "눈이 시려요",
      },
    ],
  },
  {
    id: 2,
    name: "코",
    diseases: [
      {
        id: 1,
        name: "코가 아파요",
      },
      {
        id: 2,
        name: "코가 시려요",
      },
    ],
  },
];

//todo : 이 정보는 추후 api 요청으로 받아와야함
export const CATEGORY_BREED = [
  {
    id: 1,
    name: "포메라니안",
  },
  {
    id: 3,
    name: "달마시안",
  },
];

//이건 그냥 고정
export const CATEGORY_GENDER: CategoryGender = [
  { gender: "M", value: "수컷" },
  { gender: "F", value: "암컷" },
];
