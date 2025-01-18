import { useQuery } from "@tanstack/react-query";
import { getPost } from "@api/domain/community/post/index.ts";

export const POST_QUERY_KEY = {
  POST_QUERY_KEY: (postId: string) => ["post", postId],
};

export const usePostGet = (postId: string) => {
  return useQuery({
    queryKey: POST_QUERY_KEY.POST_QUERY_KEY(postId),
    queryFn: () => {
      return getPost(postId);
    },
  });
};
