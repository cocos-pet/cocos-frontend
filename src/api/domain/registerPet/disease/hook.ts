import { useQuery } from "@tanstack/react-query";
import { getDisease } from ".";

export const DISEASE_QUERY_KEY = {
  DISEASE_QUERY_KEY: (bodyIds: number[]) => ["disease", ...bodyIds],
};

export const useDiseaseGet = (bodyIds: number[]) => {
  return useQuery({
    queryKey: DISEASE_QUERY_KEY.DISEASE_QUERY_KEY(bodyIds),
    queryFn: () => {
      return getDisease(bodyIds);
    },
  });
};
