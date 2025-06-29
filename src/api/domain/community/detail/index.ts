import { get, post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath.ts";
import { components, paths } from "src/type/schema";

/**
 * @description 병원리뷰 리스트 조회
 */

export type postHospitalReviewsResponse =
  paths["/api/dev/hospitals/reviews/filter"]["post"]["responses"]["200"]["content"]["*/*"];
export type postHospitalReviewsResponseData =
  components["schemas"]["HospitalReviewResponse"];
export type postHospitalReviewsRequest =
  paths["/api/dev/hospitals/reviews/filter"]["post"]["requestBody"]["content"]["application/json"];

export const postHospitalReviews = async (
  payload: postHospitalReviewsRequest
) => {
  const { data } = await post<postHospitalReviewsResponse>(
    API_PATH.HOSPITAL_FILTERS,
    payload
  );
  return data.data?.reviews || [];
};

/**
 * @description 병원 리뷰 요약 옵션 리스트 조회
 */

export type getReviewSummaryOptionResponse =
  paths["/api/dev/hospitals/reviews/summary/option"]["get"]["responses"]["200"]["content"]["*/*"];

export const getReviewSummaryOption = async () => {
  const { data } = await get<getReviewSummaryOptionResponse>(
    API_PATH.HOSPITAL_SUMMARY_OPTION
  );
  return data.data;
};
