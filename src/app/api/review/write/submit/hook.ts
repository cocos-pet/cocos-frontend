import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview } from ".";
import { ReviewFormData } from "@app/review/write/page";

const REVIEW_QUERY_KEY = {
  REVIEW_QUERY_KEY: (hospitalId: number) => ["hospital", hospitalId],
};

export const useReviewPost = (hospitalId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: REVIEW_QUERY_KEY.REVIEW_QUERY_KEY(hospitalId),
    mutationFn: (data: ReviewFormData) => postReview(hospitalId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REVIEW_QUERY_KEY.REVIEW_QUERY_KEY,
      });
    },
  });
};
