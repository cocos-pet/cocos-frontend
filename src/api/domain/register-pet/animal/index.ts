import { paths } from "@type/schema";
import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";

export type animalGetResponse = paths["/api/dev/animals"]["get"]["responses"]["200"]["content"]["*/*"];

export const getAnimal = async () => {
  const { data } = await get<animalGetResponse>(API_PATH.ANIMALS, {});
  return data.data;
};
