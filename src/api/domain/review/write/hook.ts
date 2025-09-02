import { useQuery } from "@tanstack/react-query";
import { getPurpose } from "@api/domain/review/write";

export const usePurposeGet = () => {
  return useQuery({
    queryKey: ["purpose"],
    queryFn: () => {
      return getPurpose();
    },
  });
};
