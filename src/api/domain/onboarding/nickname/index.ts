import { API_PATH } from "@api/constants/apiPath";
import { patch } from "@api/index";

export type PatchNicknameResponse = {
  isExistNickname: boolean;
};

export const patchNickname = async (nickname: string): Promise<PatchNicknameResponse> => {
  const response = await patch<{ data: PatchNicknameResponse }>(API_PATH.MEMBERS, {
    nickname,
  });
  return response.data.data;
};
