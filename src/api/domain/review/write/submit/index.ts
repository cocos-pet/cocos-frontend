import { paths } from "@type/schema";
import { post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

type reviewPostResponse =
  paths["/api/dev/hospitals/{hospitalId}/reviews"]["post"]["responses"]["201"]["content"]["*/*"];

// 리뷰 등록 POST API
export type reviewPostRequest =
  paths["/api/dev/hospitals/{hospitalId}/reviews"]["post"]["requestBody"]["content"]["application/json"];

export const postReview = async (hospitalId: number, data: reviewPostRequest) => {
  return await post<reviewPostResponse>(`${API_PATH.HOSPITAL}/${hospitalId}/reviews`, data);
};
