import { paths } from "@type/schema";
import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";

export type purposeGetResponse =
  paths["/api/dev/hospitals/purposes"]["get"]["responses"]["200"]["content"]["*/*"];

export const getPurpose = async () => {
  const { data } = await get<purposeGetResponse>(
    API_PATH.HOSPITALS_PURPOSE,
    {},
  );
  return data.data;
};

export type writableCategoryDataResponse =
  paths["/api/dev/posts/categories/writable"]["get"]["responses"]["200"]["content"]["*/*"];

export const getWritableCategory = async () => {
  const { data } = await get<writableCategoryDataResponse>(
    API_PATH.POST_CATEGORIES_WRITABLE,
    {},
  );
  return data.data;
};
