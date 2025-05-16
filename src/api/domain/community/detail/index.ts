import { post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath.ts";
import { paths } from "src/type/schema";

/**
 * @description 병원리뷰 리스트 조회
 */

export type postHospitalReviewsResponse =
  paths["/api/dev/hospitals/reviews/filter"]["post"]["responses"]["200"]["content"]["*/*"];
export type postHospitalReviewsRequest =
  paths["/api/dev/hospitals/reviews/filter"]["post"]["requestBody"]["content"]["application/json"];

export const postHospitalReviews = async (payload: postHospitalReviewsRequest) => {
  const { data } = await post<postHospitalReviewsResponse>(API_PATH.HOSPITAL_FILTERS, payload);
  return data.data?.reviews || [];
};
