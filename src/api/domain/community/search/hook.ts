import { useQuery } from "@tanstack/react-query";
import { SEARCH_QUERY_KEY } from "@api/domain/community/post/hook.ts";
import { getSearch } from "@api/domain/community/search/index.ts";

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
