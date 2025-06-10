import { API_PATH } from "@api/constants/apiPath";
import { del, post } from "@api/index";
import { paths } from "@type/schema";

export const postLogout = async () => {
  type LogoutResponse = paths["/api/dev/members/logout"]["post"]["responses"]["200"]["content"]["*/*"];
  const { data } = await post<LogoutResponse>(API_PATH.MEMBERS_LOGOUT);
  return data;
};

export const deleteWithdraw = async() =>{
  const response = await del(API_PATH.MEMBERS_WITHDRAW);
  return response
}