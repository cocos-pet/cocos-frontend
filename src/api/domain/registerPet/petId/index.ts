import { paths } from "@type/schema";
import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

export type petIdGetResponse = paths["/api/dev/breeds/{animalId}"]["get"]["responses"]["200"]["content"]["*/*"];
export type petIdGetRequest = paths["/api/dev/breeds/{animalId}"]["get"]["parameters"]["path"]["animalId"];

// 품종 조회 api
export const getPetId = async (type: number): Promise<petIdGetResponse> => {
  const validateId = type === 1 || type === 2 ? type : 1;

  const { data } = await get<petIdGetResponse>(`${API_PATH.BREEDS}?type=${validateId}`);
  return data;
};
