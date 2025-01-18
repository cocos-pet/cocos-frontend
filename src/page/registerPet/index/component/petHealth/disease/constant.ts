// DiseaseData.ts
export interface Disease {
  id: number;
  name: string;
}

export interface BodyPart {
  id: number;
  name: string;
  diseases: Disease[];
}

export interface DiseaseData {
  data: {
    bodies: BodyPart[];
  };
}

export const DISEASE = {
  data: {
    bodies: [
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
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
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
          {
            id: 3,
            name: "코 막힘",
          },
        ],
      },
      {
        id: 3,
        name: "목",
        diseases: [
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
        diseases: [
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
        diseases: [
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
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
      {
        id: 7,
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
          {
            id: 3,
            name: "코 막힘",
          },
        ],
      },
      {
        id: 8,
        name: "목",
        diseases: [
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
        name: "팔",
        diseases: [
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
        name: "다리",
        diseases: [
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
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
      {
        id: 12,
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
          {
            id: 3,
            name: "코 막힘",
          },
        ],
      },
      {
        id: 13,
        name: "목",
        diseases: [
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
        name: "팔",
        diseases: [
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
        name: "다리",
        diseases: [
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
          {
            id: 3,
            name: "눈이 붓고 빨갛게 변해요",
          },
        ],
      },
    ],
  },
};
