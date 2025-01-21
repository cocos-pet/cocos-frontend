import {
  getSearch,
  postPostFilters,
  postSearch,
  searchPostType,
} from "@api/domain/community/search/index.ts";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const SEARCH_QUERY_KEY = {
  SEARCH_QUERY_KEY: () => ["search"],
  SEARCH_POST_QUERY_KEY: () => ["searchPost"],
  SEARCH_POST_FILTERS_QUERY_KEY: () => ["postFilters"],
};

/**
 * @description 최근 검색어 GET API
 */
export const useSearchGet = () => {
  return useQuery({
    queryKey: SEARCH_QUERY_KEY.SEARCH_QUERY_KEY(),
    queryFn: () => {
      return getSearch();
    },
  });
};

/**
 * @description 게시물 필터 조회 API
 */

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

/**
 * @description 최근 검색어 입력 API
 */
export const useSearchPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: SEARCH_QUERY_KEY.SEARCH_POST_QUERY_KEY(),
    mutationFn: (params: searchPostType) => postSearch(params),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: SEARCH_QUERY_KEY.SEARCH_POST_QUERY_KEY(),
      });
    },
  });
};
