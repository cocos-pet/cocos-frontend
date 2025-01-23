import { paths } from "@type/schema";
import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

export type diseaseGetResponse = paths["/api/dev/diseases"]["get"]["responses"]["200"]["content"]["*/*"];

export const getDisease = async (bodyIds: number[]) => {
  const { data } = await get<diseaseGetResponse>(`${API_PATH.DISEASE}`, {
    params: { bodyIds: bodyIds.join(",") },
  });
  return data.data;
};
