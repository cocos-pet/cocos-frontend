import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

export const getMemberInfo = async () => {
  //type getMemberInfoRequest = paths["/api/dev/members"]["get"]["requestBody"];
  type MemberInfoResponse = paths["/api/dev/members"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<MemberInfoResponse>(API_PATH.MEMBERS, {});
  return data.data;
};
