import { get, post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath.ts";
import { paths } from "src/type/schema";

/**
 * @description 최근 검색어 GET API
 */

/**
 * @description 최근 검색어 GET API
 */
export type searchGetResponse = paths["/api/dev/search"]["get"]["responses"]["200"]["content"]["*/*"];

export const getSearch = async () => {
  const { data } = await get<searchGetResponse>(API_PATH.SEARCH, {});
  return data.data;
};

/**
 * @description 최근 검색어 POST API
 */

export type searchPostRequest = paths["/api/dev/search"]["post"]["parameters"]["query"];

export interface searchPostType {
  keyword: string;
}

export const postSearch = async (body: searchPostType) => {
  return await post<searchPostType>(`${API_PATH.SEARCH}?keyword=${body.keyword}`);
};

/**
 * @description 포스트 필터 조회 API
 */

export type postPostFiltersResponse = paths["/api/dev/posts/filters"]["post"]["responses"]["200"]["content"]["*/*"];
export type postPostFiltersRequest =
  paths["/api/dev/posts/filters"]["post"]["requestBody"]["content"]["application/json"];

export const postPostFilters = async (payload: postPostFiltersRequest) => {
  const { data } = await post<postPostFiltersResponse>(API_PATH.POST_FILTERS, payload);

  return data.data?.posts || [];
};
