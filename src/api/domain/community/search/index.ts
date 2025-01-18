import { API_PATH } from "@api/constants/apiPath";
import { api } from "@api/index";
import { paths } from "src/type/schema";

type searchGetResponse =
  paths["/api/dev/search"]["get"]["responses"]["200"]["content"]["*/*"];

type searchPostRequest = paths["/api/dev/search"]["post"]["requestBody"];

/**
 * @description 최근 검색어 조회 API
 */

export const getSearch = async () => {
  const { data } = await api.get<searchGetResponse>(API_PATH.SEARCH, {});
  return data.data;
};
