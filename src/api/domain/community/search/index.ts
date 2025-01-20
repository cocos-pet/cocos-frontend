import { API_PATH } from "@api/constants/apiPath";
import { get, post } from "@api/index";
import { components, paths } from "src/type/schema";

/**
 * @description 최근 검색어 조회 API
 */

type searchGetResponse =
  paths["/api/dev/search"]["get"]["responses"]["200"]["content"]["*/*"];

export type searchPostRequest = paths["/api/dev/search"]["post"]["requestBody"];

export const getSearch = async () => {
  const { data } = await get<searchGetResponse>(API_PATH.SEARCH, {});
  return data.data;
};

/**
 * @description 포스트 필터 조회 API
 */

export type postPostFiltersResponse =
  paths["/api/dev/posts/filters"]["post"]["responses"]["200"]["content"]["*/*"];
export type postPostFiltersRequest =
  paths["/api/dev/posts/filters"]["post"]["requestBody"]["content"]["application/json"];

export const postPostFilters = async (payload: {
  keyword?: string;
  animalIds?: number[];
  symptomIds?: number[];
  diseaseIds?: number[];
  sortBy?: "RECENT" | "POPULAR";
  cursorId?: number;
  categoryId?: number;
  likeCount?: number;
  createAt?: string;
}) => {
  const { data } = await post<postPostFiltersResponse>(
    API_PATH.POST_FILTERS,
    payload
  );
  return data.data?.posts || [];
};
