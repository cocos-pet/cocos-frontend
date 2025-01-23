import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  articlePostRequest,
  postArticle,
} from "@api/domain/community/write/index.ts";

const ARTICLE_WRITE_QUERY_KEY = {
  ARTICLE_WRITE_QUERY_KEY: () => ["articleWrite"],
};

export const useArticlePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ARTICLE_WRITE_QUERY_KEY.ARTICLE_WRITE_QUERY_KEY(),
    mutationFn: (params: articlePostRequest) => postArticle(params),
    onSuccess: (data, variables) => {},
  });
};
