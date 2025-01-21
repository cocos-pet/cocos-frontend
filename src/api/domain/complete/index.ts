import { paths } from "@type/schema";
import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";

export type nicknameGetResponse = paths["/api/dev/members"]["get"]["responses"]["200"]["content"]["*/*"];

export const getNickname = async () => {
  const { data } = await get<nicknameGetResponse>(API_PATH.MEMBERS, {});
  return data.data;
};
