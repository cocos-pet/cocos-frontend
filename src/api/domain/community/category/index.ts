import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

//카테고리 리스트 조회 API 연동
type GetCategoryList = paths["/api/dev/posts/categories"]["get"]["responses"]["200"]["content"]["*/*"];

export const getCategory = async (): Promise<GetCategoryList> => {
  const { data } = await get<GetCategoryList>(API_PATH.POST_CATEGORIES);
  return data;
};
