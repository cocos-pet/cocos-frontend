import { useQuery } from "@tanstack/react-query";
import { getCategory } from ".";

export const useQueryGetCategory = () => {
  return useQuery({
    queryKey: [CATEGORY_LIST_QUERY_KEY.CATEGORY_LIST],
    queryFn: () => getCategory(),
  });
};

export const CATEGORY_LIST_QUERY_KEY = {
  CATEGORY_LIST: () => ["getCategoryList"],
};
