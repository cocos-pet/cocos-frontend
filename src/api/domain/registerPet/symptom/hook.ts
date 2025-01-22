import { useQuery } from "@tanstack/react-query";
import { getSymptoms } from ".";

export const SYMPTOMS_QUERY_KEY = {
  SYMPTOMS_QUERY_KEY: (bodyIds: number[]) => ["symptom", ...bodyIds],
};

export const useSymptomGet = (bodyIds: number[]) => {
  return useQuery({
    queryKey: SYMPTOMS_QUERY_KEY.SYMPTOMS_QUERY_KEY(bodyIds),
    queryFn: () => {
      return getSymptoms(bodyIds);
    },
  });
};
