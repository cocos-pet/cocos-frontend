import { searchPostRequest } from "@api/domain/community/search";

export const SEARCH_QUERY_KEY = {
  SEARCH_QUERY_KEY: () => ["search"],
  SEARCH_POST_QUERY_KEY: (keyword: string) => ["search", keyword],
};
