import { paths } from "@type/schema";
import { del, get, post } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";

/**
 * @description 게시글 조회 API
 * @param postId
 */

type postGetResponse =
  paths["/api/dev/posts/{postId}"]["get"]["responses"]["200"]["content"]["*/*"];

type postGetRequest = paths["/api/dev/posts/{postId}"]["get"]["requestBody"];

export const getPost = async (postId: number) => {
  const { data } = await get<postGetResponse>(`${API_PATH.POST}/${postId}`);
  return data.data;
};

/**
 * @description 좋아요 추가 API
 * @param postId
 */

type likePostResponse =
  paths["/api/dev/likes/{postId}"]["post"]["responses"]["204"]["content"]["*/*"];
export const postLike = async (postId: string) => {
  const { data } = await post<likePostResponse>(`${API_PATH.LIKE}/${postId}`);
  return data;
};
/**
 * @description 좋아요 삭제 API
 * @param postId
 */

type likeDeleteResponse =
  paths["/api/dev/likes/{postId}"]["delete"]["responses"]["204"]["content"]["*/*"];
export const deleteLike = async (postId: string) => {
  const { data } = await del<likeDeleteResponse>(`${API_PATH.LIKE}/${postId}`);
  return data;
};
