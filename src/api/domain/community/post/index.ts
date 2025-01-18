import { paths } from "@type/schema";
import { get } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";

type postGetResponse =
  paths["/api/dev/posts/{postId}"]["get"]["responses"]["200"]["content"]["*/*"];

type postGetRequest = paths["/api/dev/posts/{postId}"]["get"]["requestBody"];

/**
 * @description 최근 검색어 조회 API
 */

export const getPost = async (postId: string) => {
  const { data } = await get<postGetResponse>(API_PATH.POST + `/${postId}`);
  return data.data;
};
