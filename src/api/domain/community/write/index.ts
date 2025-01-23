import { paths } from "@type/schema";
import { post } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";

export type articlePostRequest =
  paths["/api/dev/posts"]["post"]["requestBody"]["content"]["application/json"];

type articlePostResponse =
  paths["/api/dev/posts"]["post"]["responses"]["200"]["content"]["*/*"];

export const postArticle = async (body: articlePostRequest) => {
  const { data } = await post<articlePostResponse>(API_PATH.POST, body);
  return data;
};
