import { useQuery } from "@tanstack/react-query";
import { getPurpose, getWritableCategory } from "@api/domain/review/write";

export const usePurposeGet = () => {
  return useQuery({
    queryKey: ["purpose"],
    queryFn: () => {
      return getPurpose();
    },
  });
};

export const useGetWritableCategoryData = () => {
  return useQuery({
    queryKey: ["dropdownDataByCategory"],
    queryFn: () => {
      return getWritableCategory();
    },
  });
};
