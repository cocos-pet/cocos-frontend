import { components, paths } from "@type/schema";
import { del, get } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";

type postGetResponse =
  paths["/api/dev/posts/{postId}"]["get"]["responses"]["200"]["content"]["*/*"];

type postGetRequest = paths["/api/dev/posts/{postId}"]["get"]["requestBody"];

/**
 * @description 게시글 조회 API
 */

export const getPost = async (postId: number) => {
  const { data } = await get<postGetResponse>(`${API_PATH.POST}/${postId}`);
  return data.data;
};

/**
 * @description 댓글 & 대댓글 조회 API
 */

export type commentGetResponse =
  paths["/api/dev/comments/{postId}"]["get"]["responses"]["200"]["content"]["*/*"];

export type commentGetResponseCommentType =
  components["schemas"]["CommentAndSubCommentsResponse"];

export type commentGetRequestSubCommentType =
  components["schemas"]["SubCommentResponse"];

export const getComments = async (postId: number) => {
  const { data } = await get<commentGetResponse>(
    `${API_PATH.COMMENTS}/${postId}`
  );
  return data.data?.comments;
};

/**
 * @description 댓글 삭제 API
 */

export type deleteCommentResponse =
  paths["/api/dev/comments/{commentId}"]["delete"]["responses"]["200"]["content"]["*/*"];

export const deleteComment = async (commentId: number) => {
  const { data } = await del<deleteCommentResponse>(
    `${API_PATH.COMMENTS}/${commentId}`
  );
  return data.data;
};
