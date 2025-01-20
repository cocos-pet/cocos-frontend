import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SEARCH_QUERY_KEY } from "@api/domain/community/post/hook.ts";
import {
  getSearch,
  postSearch,
  searchPostType,
} from "@api/domain/community/search/index.ts";

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

/**
 * @description 최근 검색어 입력 API
 */
export const useSearchPost = (params: searchPostType) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: SEARCH_QUERY_KEY.SEARCH_POST_QUERY_KEY(params.keyword),
    mutationFn: (params: searchPostType) => postSearch(params),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: SEARCH_QUERY_KEY.SEARCH_POST_QUERY_KEY(params.keyword),
      });
    },
  });
};
