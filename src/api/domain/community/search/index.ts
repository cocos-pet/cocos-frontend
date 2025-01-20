import { API_PATH } from "@api/constants/apiPath";
import { get, post } from "@api/index";
import { paths } from "src/type/schema";

type searchGetResponse =
  paths["/api/dev/search"]["get"]["responses"]["200"]["content"]["*/*"];

type searchPostRequest = paths["/api/dev/search"]["post"]["requestBody"];

/**
 * @description 최근 검색어 조회 API
 */

export const getSearch = async () => {
  const { data } = await get<searchGetResponse>(API_PATH.SEARCH, {});
  return data.data;
};

/**
 * @description 좋아요 추가 API
 * @param postId
 */

type likePostResponse =
  paths["/api/dev/likes/{postId}"]["post"]["responses"]["204"]["content"]["*/*"];

export const postLike = async (postId: { postId: string }) => {
  const { data } = await post<likePostResponse>(
    API_PATH.LIKE + `${postId.postId}`
  );
  return data;
};
