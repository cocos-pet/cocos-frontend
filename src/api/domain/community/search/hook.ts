import { useMutation, useQuery } from "@tanstack/react-query";
import { getSearch, postLike } from "@api/domain/community/search/index.ts";

export const SEARCH_QUERY_KEY = {
  SEARCH_QUERY_KEY: () => ["search"],
  LIKE_POST_QUERY_KEY: (postId: string) => ["like", postId],
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

export const useLikePost = (postId: string) => {
  return useMutation({
    mutationKey: SEARCH_QUERY_KEY.LIKE_POST_QUERY_KEY(postId),
    mutationFn: (postId: { postId: string }) => {
      return postLike(postId);
    },
  });
};
