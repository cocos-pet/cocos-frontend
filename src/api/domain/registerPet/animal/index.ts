import { paths } from "@type/schema";
import { API_PATH } from "@api/constants/apiPath";
import { api } from "@api/index";

type animalGetResponse = paths["/api/dev/animals"]["get"]["responses"]["200"]["content"]["*/*"];

export const getAnimal = async () => {
  const { data } = await api.get<animalGetResponse>(API_PATH.ANIMALS, {});
  return data.data;
};
