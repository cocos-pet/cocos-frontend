import { paths } from "@type/schema";
import { get } from "@api/index.ts";
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

export const getComments = async (postId: number) => {
  const { data } = await get<commentGetResponse>(
    `${API_PATH.COMMENTS}/${postId}`
  );
  return data.data;
};
