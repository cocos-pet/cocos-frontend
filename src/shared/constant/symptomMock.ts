import { IcTemporary } from "@asset/svg";

//이 목데이터 지울 예정~

export type SymptomItem = {
  id: number;
  name: string;
  icon: typeof IcTemporary;
};

/*아이콘은 바뀔 예정~*/
export const symptomMock: SymptomItem[] = [
  { id: 1, name: "눈", icon: IcTemporary },
  { id: 2, name: "손", icon: IcTemporary },
  { id: 3, name: "코", icon: IcTemporary },
  { id: 4, name: "피부", icon: IcTemporary },
  { id: 5, name: "피부", icon: IcTemporary },
  { id: 6, name: "김의진", icon: IcTemporary },
  { id: 8, name: "머리", icon: IcTemporary },
  { id: 9, name: "발바닥", icon: IcTemporary },
  { id: 10, name: "꼬리", icon: IcTemporary },
  { id: 7, name: "의진 눈", icon: IcTemporary },
  { id: 11, name: "의진 눈", icon: IcTemporary },
];
