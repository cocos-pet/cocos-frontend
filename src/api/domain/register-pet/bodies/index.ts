import { paths } from "@type/schema";
import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

// 신체부위 조회 api
export type bodiesGetRequest = paths["/api/dev/bodies"]["get"]["parameters"]["query"];
export type bodiesGetResponse = paths["/api/dev/bodies"]["get"]["responses"]["200"]["content"]["*/*"];

export const getBodies = async (petProblem: string): Promise<bodiesGetResponse> => {
  const validProblem = petProblem === "symptom" || petProblem === "disease" ? petProblem : "symptom";

  const { data } = await get<bodiesGetResponse>(`${API_PATH.BODY}?petProblem=${validProblem}`);
  return data;
};
