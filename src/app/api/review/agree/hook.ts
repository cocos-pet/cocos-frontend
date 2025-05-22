"use client";

import { useMutation } from "@tanstack/react-query";
import { patchAgreeReview } from "@app/api/review/agree";

export const useAgreeReviewMutation = () => {
  return useMutation({
    mutationFn: patchAgreeReview,
    onError: (error) => {
      console.error("동의 API 호출 실패:", error);
    },
  });
};
