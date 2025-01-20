import { useQuery } from "@tanstack/react-query";
import { getSearch } from "@api/domain/community/search/index.ts";

export const SEARCH_QUERY_KEY = {
  SEARCH_QUERY_KEY: () => ["search"],
};

/**
 * @description 최근 검색어 조회 API
 */
export const useSearchGet = () => {
  return useQuery({
    queryKey: SEARCH_QUERY_KEY.SEARCH_QUERY_KEY(),
    queryFn: () => {
      return getSearch();
    },
  });
};
