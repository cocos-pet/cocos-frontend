import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteComment, getComments, deleteLike, getPost, postLike } from "@api/domain/community/post";

export const POST_QUERY_KEY = {
  POST_QUERY_KEY: (postId: number) => ["post", postId],
  LIKE_POST_QUERY_KEY: (postId: string) => ["like", postId],
  LIKE_DELETE_QUERY_KEY: (postId: string) => ["likeDelete", postId],

};

export const COMMENT_QUERY_KEY = {
  COMMENTS_QUERY_KEY: (postId: number) => ["comments", postId],
  DELETE_COMMENT: (commentId: number | undefined) => [
    "deleteComment",
    commentId,
  ],
  DELETE_SUB_COMMENT: (subCommentId: number | undefined) => [
    "deleteSubComment",
    subCommentId,
  ],
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

/**
 * @description 대댓글 삭제 API
 */

export const useDeleteSubComment = (subCommentId: number | undefined) => {
  return useMutation({
    mutationKey: COMMENT_QUERY_KEY.DELETE_SUB_COMMENT(subCommentId),
    mutationFn: () => {
      return deleteComment(subCommentId);
    },
  });
};
