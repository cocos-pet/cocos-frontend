import { paths } from "@type/schema";
import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

export type symptomGetResponse = paths["/api/dev/symptoms"]["get"]["responses"]["200"]["content"]["*/*"];

export const getSymptoms = async (bodyIds: number[]) => {
  const { data } = await get<symptomGetResponse>(`${API_PATH.SYMPTOMS}`, {
    params: { bodyIds: bodyIds.join(",") },
  });
  return data.data;
};
