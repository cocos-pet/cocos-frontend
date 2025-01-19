export interface Symptom {
  id: number;
  name: string;
}

export interface BodyPart {
  id: number;
  name: string;
  symptom: Symptom[];
}

export interface SymptomData {
  data: {
    bodies: BodyPart[];
  };
}

export const SYMPTOM = {
  data: {
    bodies: [
      {
        id: 1,
        name: "눈",
        symptom: [
          {
            id: 1,
            name: "눈이 아파요",
          },
          {
            id: 2,
            name: "눈이 시려요",
          },
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
          {
            id: 4,
            name: "눈이 아파요",
          },
          {
            id: 5,
            name: "눈이 시려요",
          },
          {
            id: 6,
            name: "눈이 붓고 빨갛게 변해요",
          },
          {
            id: 7,
            name: "눈이 아파요",
          },
          {
            id: 8,
            name: "눈이 시려요",
          },
          {
            id: 9,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
      {
        id: 2,
        name: "코",
        symptom: [
          {
            id: 1,
            name: "눈이 아파요",
          },
          {
            id: 2,
            name: "눈이 시려요",
          },
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
          {
            id: 4,
            name: "눈이 아파요",
          },
          {
            id: 5,
            name: "눈이 시려요",
          },
          {
            id: 6,
            name: "눈이 붓고 빨갛게 변해요",
          },
          {
            id: 7,
            name: "눈이 아파요",
          },
          {
            id: 8,
            name: "눈이 시려요",
          },
          {
            id: 9,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
      {
        id: 3,
        name: "목",
        symptom: [
          {
            id: 1,
            name: "목이 아파요",
          },
          {
            id: 2,
            name: "목이 뻣뻣해요",
          },
          {
            id: 3,
            name: "목에 부종이 있어요",
          },
        ],
      },
      {
        id: 4,
        name: "팔",
        symptom: [
          {
            id: 1,
            name: "팔꿈치 통증",
          },
          {
            id: 2,
            name: "팔꿈치가 붓고 아파요",
          },
          {
            id: 3,
            name: "팔꿈치에 압박감",
          },
        ],
      },
      {
        id: 5,
        name: "다리",
        symptom: [
          {
            id: 1,
            name: "다리가 부어요",
          },
          {
            id: 2,
            name: "다리가 저려요",
          },
          {
            id: 3,
            name: "다리에 쥐가 나요",
          },
        ],
      },
      {
        id: 6,
        name: "다리미",
        symptom: [
          {
            id: 1,
            name: "눈이 아파요",
          },
          {
            id: 2,
            name: "눈이 시려요",
          },
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
      {
        id: 7,
        name: "정강이",
        symptom: [
          {
            id: 1,
            name: "코가 아파요",
          },
          {
            id: 2,
            name: "코가 시려요",
          },
          {
            id: 3,
            name: "코 막힘",
          },
        ],
      },
      {
        id: 8,
        name: "이마",
        symptom: [
          {
            id: 1,
            name: "목이 아파요",
          },
          {
            id: 2,
            name: "목이 뻣뻣해요",
          },
          {
            id: 3,
            name: "목에 부종이 있어요",
          },
        ],
      },
      {
        id: 9,
        name: "귓볼",
        symptom: [
          {
            id: 1,
            name: "팔꿈치 통증",
          },
          {
            id: 2,
            name: "팔꿈치가 붓고 아파요",
          },
          {
            id: 3,
            name: "팔꿈치에 압박감",
          },
        ],
      },
      {
        id: 10,
        name: "손톱",
        symptom: [
          {
            id: 1,
            name: "다리가 부어요",
          },
          {
            id: 2,
            name: "다리가 저려요",
          },
          {
            id: 3,
            name: "다리에 쥐가 나요",
          },
        ],
      },
      {
        id: 11,
        name: "발톱",
        symptom: [
          {
            id: 1,
            name: "눈이 아파요",
          },
          {
            id: 2,
            name: "눈이 시려요",
          },
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
      {
        id: 12,
        name: "발목",
        symptom: [
          {
            id: 1,
            name: "코가 아파요",
          },
          {
            id: 2,
            name: "코가 시려요",
          },
          {
            id: 3,
            name: "코 막힘",
          },
        ],
      },
      {
        id: 13,
        name: "복숭아뼈",
        symptom: [
          {
            id: 1,
            name: "목이 아파요",
          },
          {
            id: 2,
            name: "목이 뻣뻣해요",
          },
          {
            id: 3,
            name: "목에 부종이 있어요",
          },
        ],
      },
      {
        id: 14,
        name: "구름과자",
        symptom: [
          {
            id: 1,
            name: "팔꿈치 통증",
          },
          {
            id: 2,
            name: "팔꿈치가 붓고 아파요",
          },
          {
            id: 3,
            name: "팔꿈치에 압박감",
          },
        ],
      },
      {
        id: 15,
        name: "옴냠냠",
        symptom: [
          {
            id: 1,
            name: "다리가 부어요",
          },
          {
            id: 2,
            name: "다리가 저려요",
          },
          {
            id: 3,
            name: "다리에 쥐가 나요",
          },
        ],
      },
      {
        id: 16,
        name: "얄루",
        symptom: [
          {
            id: 1,
            name: "눈이 아파요",
          },
          {
            id: 2,
            name: "눈이 시려요",
          },
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
    ],
  },
};
