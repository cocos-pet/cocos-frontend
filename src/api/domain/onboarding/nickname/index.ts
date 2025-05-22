import { API_PATH } from "@api/constants/apiPath";
import { patch } from "@api/index";

export type patchNicknameResponse = {
  isExistNickname: boolean;
};

export const patchNickname = async (nickname: string): Promise<patchNicknameResponse> => {
  const response = await patch<{ data: patchNicknameResponse }>(`${API_PATH.MEMBERS}?nickname=${nickname}`);
  return response.data.data;
};
