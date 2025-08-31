import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

export type feedbackGetResponse =
  paths["/api/dev/hospitals/reviews/summary/option"]["get"]["responses"]["200"]["content"]["*/*"];

export const getFeedback = async () => {
  const { data } = await get<feedbackGetResponse>(API_PATH.HOSPITALS_REVIEWS_SUMMARY, {});
  return data.data;
};
