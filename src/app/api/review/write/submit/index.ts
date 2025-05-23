import { paths } from "@type/schema";
import { ReviewFormData } from "@app/review/write/page";
import { post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

// 리뷰 등록 POST API
export type reviewPostRequest =
  paths["/api/dev/hospitals/{hospitalId}/reviews"]["post"]["requestBody"]["content"]["application/json"];

export const postReview = async (hospitalId:number, data: ReviewFormData) => {
  return await post<ReviewFormData>(`${API_PATH.HOSPITAL}/${hospitalId}/reviews`, data);
};
