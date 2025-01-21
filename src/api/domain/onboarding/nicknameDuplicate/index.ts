import { paths } from "@type/schema";
import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

export type isExistNicknameGetResponse = paths["/api/dev/members/check"]["get"]["responses"]["200"]["content"]["*/*"];

export const getIsExist = async (nickname: string) => {
  const { data } = await get<isExistNicknameGetResponse>(`${API_PATH.MEMBERS}/check`, { params: { nickname } });

  return data.data;
};
