import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview, reviewPostRequest } from ".";

const REVIEW_QUERY_KEY = {
  REVIEW_QUERY_KEY: (hospitalId: number) => ["hospital", hospitalId],
};

export const useReviewPost = (hospitalId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: REVIEW_QUERY_KEY.REVIEW_QUERY_KEY(hospitalId),
    mutationFn: (data: reviewPostRequest) => postReview(hospitalId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REVIEW_QUERY_KEY.REVIEW_QUERY_KEY,
      });
    },
  });
};
