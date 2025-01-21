import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteComment,
  getComments,
  getPost,
} from "@api/domain/community/post/index.ts";

export const POST_QUERY_KEY = {
  POST_QUERY_KEY: (postId: number) => ["post", postId],
};

export const COMMENT_QUERY_KEY = {
  COMMENTS_QUERY_KEY: (postId: number) => ["comments", postId],
  DELETE_COMMENT: (commentId: number | undefined) => [
    "deleteComment",
    commentId,
  ],
};

/**
 * @description 게시글 조회 API
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
 * @description 댓글 & 대댓글 조회 API
 * @param postId
 */

export const useCommentsGet = (postId: number) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEY.COMMENTS_QUERY_KEY(postId),
    queryFn: () => {
      return getComments(postId);
    },
  });
};

/**
 * @description 댓글 삭제 API
 */

export const useDeleteComment = (commentId: number | undefined) => {
  return useMutation({
    mutationKey: COMMENT_QUERY_KEY.DELETE_COMMENT(commentId),
    mutationFn: () => {
      return deleteComment(commentId);
    },
  });
};
