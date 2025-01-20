import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getSearch,
  postPostFilters,
  postPostFiltersRequest,
} from "@api/domain/community/search/index.ts";

export const SEARCH_QUERY_KEY = {
  SEARCH_QUERY_KEY: () => ["search"],
  SEARCH_POST_FILTERS_QUERY_KEY: () => ["postFilters"],
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

export const usePostPostFilters = () => {
  return useMutation({
    mutationKey: SEARCH_QUERY_KEY.SEARCH_POST_FILTERS_QUERY_KEY(),
    mutationFn: (params: {
      keyword?: string;
      animalIds?: number[];
      symptomIds?: number[];
      diseaseIds?: number[];
      sortBy?: "RECENT" | "POPULAR";
      cursorId?: number;
      categoryId?: number;
      likeCount?: number;
      createAt?: string;
    }) => {
      return postPostFilters(params);
    },
  });
};
