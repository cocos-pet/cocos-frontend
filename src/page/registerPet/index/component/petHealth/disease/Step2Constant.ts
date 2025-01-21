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
export const GOGO = {
  data: {
    bodies: [
      {
        id: 1,
        name: "눈",
        diseases: [
          { id: 1, name: "눈이 아파요" },
          { id: 2, name: "눈이 시려요" },
          { id: 3, name: "눈이 붓고 빨갛게 변해요" },
          { id: 4, name: "눈이 아파요" },
          { id: 5, name: "눈이 시려요" },
          { id: 6, name: "눈이 붓고 빨갛게 변해요" },
          { id: 7, name: "눈이 아파요" },
          { id: 8, name: "눈이 시려요" },
          { id: 9, name: "눈이 붓고 빨갛게 변해요" },
        ],
      },
      {
        id: 2,
        name: "코",
        diseases: [
          { id: 10, name: "눈이 아파요" },
          { id: 11, name: "눈이 시려요" },
          { id: 12, name: "눈이 붓고 빨갛게 변해요" },
          { id: 13, name: "눈이 아파요" },
          { id: 14, name: "눈이 시려요" },
          { id: 15, name: "눈이 붓고 빨갛게 변해요" },
          { id: 16, name: "눈이 아파요" },
          { id: 17, name: "눈이 시려요" },
          { id: 18, name: "눈이 붓고 빨갛게 변해요" },
        ],
      },
    ],
  },
};
