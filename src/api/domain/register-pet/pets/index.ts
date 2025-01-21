import { API_PATH } from "@api/constants/apiPath";
import { post } from "@api/index";
import { paths } from "@type/schema";

// 반려동물 등록 POST API
export type myPetPostRequest = paths["/api/dev/pets"]["post"]["requestBody"]["content"]["application/json"];

export interface myPetPostType {
  breedId: number | null;
  name: string;
  gender: "F" | "M" | null;
  age: number | null;
  diseaseIds: number[] | null;
  symptomIds: number[];
}

export const postMyPet = async (data: myPetPostType) => {
  return await post<myPetPostType>(`${API_PATH.PETS}`, data);
};
