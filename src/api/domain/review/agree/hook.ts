"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { patchAgreeReview } from "@api/domain/review/agree";
import { getReviewAgreementStatus } from "./index";

// 리뷰 동의 PATCH API
export const useAgreeReviewMutation = () => {
  return useMutation({
    mutationFn: patchAgreeReview,
    onError: (error) => {
      console.error("동의 API 호출 실패:", error);
    },
  });
};

// 리뷰 동의 여부 조회 GET API
export const REVIEW_AGREE_QUERY_KEY = {
  REVIEW_AGREE_QUERY_KEY: () => ["reviewAgreement"],
};

export const useGetReviewAgreementStatus = () => {
  return useQuery({
    queryKey: REVIEW_AGREE_QUERY_KEY.REVIEW_AGREE_QUERY_KEY(),
    queryFn: () => {
      return getReviewAgreementStatus();
    },
  });
};
