import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getReviewSummaryOption,
  postHospitalReviews,
  postHospitalReviewsRequest,
} from "@api/domain/community/detail/index.ts";

const HOSPITAL_REVIEW_KEY = {
  HOSPITAL_REVIEW_FILTER: () => ["hospitalReviewFilter"],
  REVIEW_SUMMARY_OPTION: () => ["reviewSummaryOption"],
};

/**ø
 * @description 병원리뷰 필터 조회 API
 */
//
export const usePostHospitalReviews = () => {
  return useMutation({
    mutationKey: HOSPITAL_REVIEW_KEY.HOSPITAL_REVIEW_FILTER(),
    mutationFn: (params: postHospitalReviewsRequest) => {
      return postHospitalReviews(params);
    },
  });
};

export const useGetReviewSummaryOption = () => {
  return useQuery({
    queryKey: HOSPITAL_REVIEW_KEY.REVIEW_SUMMARY_OPTION(),
    queryFn: getReviewSummaryOption,
  });
};
