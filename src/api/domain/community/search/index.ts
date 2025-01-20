import { API_PATH } from "@api/constants/apiPath";
import { get, post } from "@api/index";
import { paths } from "src/type/schema";

/**
 * @description 최근 검색어 GET API
 */
export type searchGetResponse =
  paths["/api/dev/search"]["get"]["responses"]["200"]["content"]["*/*"];

export const getSearch = async () => {
  const { data } = await get<searchGetResponse>(API_PATH.SEARCH, {});
  return data.data;
};

/**
 * @description 최근 검색어 POST API
 */

export type searchPostRequest =
  paths["/api/dev/search"]["post"]["parameters"]["query"];

export type searchPostResponse =
  paths["/api/dev/search"]["post"]["responses"]["200"]["content"]["*/*"];

export interface searchPostType {
  keyword: string;
}

export const postSearch = async (body: searchPostType) => {
  return await post<searchPostType>(
    `${API_PATH.SEARCH}?keyword=${body.keyword}`
  );
};
