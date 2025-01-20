import { get } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";
import { paths } from "@type/schema";

/**
 * @description 최근 검색어 GET API
 */

type searchGetResponse =
  paths["/api/dev/search"]["get"]["responses"]["200"]["content"]["*/*"];
type searchPostRequest = paths["/api/dev/search"]["post"]["requestBody"];

export const getSearch = async () => {
  const { data } = await get<searchGetResponse>(API_PATH.SEARCH, {});
  return data.data;
};
