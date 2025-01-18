import skin from "@asset/image/skin.png";

//이 목데이터 지울 예정~

export type SymptomItem = {
  id: number;
  name: string;
  image: string;
};

/*아이콘은 바뀔 예정~*/
export const symptomMock: SymptomItem[] = [
  { id: 1, name: "피부/털", image: skin },
  { id: 2, name: "배/소화기", image: skin },
  { id: 3, name: "눈", image: skin },
  { id: 4, name: "귀", image: skin },
  { id: 5, name: "입", image: skin },
  { id: 6, name: "소변/신장", image: skin },
  { id: 7, name: "배설", image: skin },
  { id: 8, name: "폐/호흡기", image: skin },
  { id: 9, name: "뼈/관절/근육", image: skin },
  { id: 10, name: "뇌/신경계", image: skin },
];
