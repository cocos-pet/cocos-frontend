import { useQuery } from "@tanstack/react-query";
import { getFeedback } from "@app/api/review/write/feedback";

export const useFeedbackGet = () => {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: getFeedback,
  });
};
