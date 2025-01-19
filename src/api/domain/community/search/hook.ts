import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SEARCH_QUERY_KEY } from "@api/domain/community/post/hook.ts";
import { getSearch, postSearch } from "@api/domain/community/search/index.ts";

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
export const useSearchPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { keyword: string }) => postSearch(params),
    onSuccess: (data, variables) => {
      queryClient
        .invalidateQueries({
          queryKey: SEARCH_QUERY_KEY.SEARCH_POST_QUERY_KEY(variables.keyword),
        })
        .then((r) => console.log("성공"));
    },
  });
};
