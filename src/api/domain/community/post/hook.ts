import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getComments,
  deleteLike,
  getPost,
  postLike,
  postArticle,
  articlePostRequest,
} from "@api/domain/community/post";

export const POST_QUERY_KEY = {
  POST_QUERY_KEY: (postId: number) => ["post", postId],
  COMMENTS_QUERY_KEY: (postId: number) => ["comments", postId],
  LIKE_POST_QUERY_KEY: (postId: string) => ["like", postId],
  LIKE_DELETE_QUERY_KEY: (postId: string) => ["likeDelete", postId],
  ARTICLE_POST_QUERY_KEY: () => ["articlePost"],
};

/**
 * @description 게시글 조회 API
 * @param postId
 */

export const usePostGet = (postId: number) => {
  return useQuery({
    queryKey: POST_QUERY_KEY.POST_QUERY_KEY(postId),
    queryFn: () => {
      return getPost(postId);
    },
  });
};

/**
 * @description 좋아요 추가 API
 * @param postId
 */
export const useLikePost = (postId: string) => {
  return useMutation({
    mutationKey: POST_QUERY_KEY.LIKE_POST_QUERY_KEY(postId),
    mutationFn: (postId: { postId: string }) => {
      return postLike(postId.postId);
    },
  });
};

/**
 * @description 좋아요 삭제 API
 * @param postId
 */
export const useDeleteLike = (postId: string) => {
  return useMutation({
    mutationKey: POST_QUERY_KEY.LIKE_DELETE_QUERY_KEY(postId),
    mutationFn: (postId: { postId: string }) => {
      return deleteLike(postId.postId);
    },
  });
};

/**
 * @description 댓글 & 대댓글 조회 API
 * @param postId
 */

export const useCommentsGet = (postId: number) => {
  return useQuery({
    queryKey: POST_QUERY_KEY.COMMENTS_QUERY_KEY(postId),
    queryFn: () => {
      return getComments(postId);
    },
  });
};

/**
 *
 */

export const useArticlePost = () => {
  return useMutation({
    mutationKey: POST_QUERY_KEY.ARTICLE_POST_QUERY_KEY(),
    mutationFn: (params: articlePostRequest) => {
      return postArticle(params);
    },
  });
};
