import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

export const getMemberInfo = async () => {
  //type getMemberInfoRequest = paths["/api/dev/members"]["get"]["requestBody"];
  return await get(API_PATH.)
};
