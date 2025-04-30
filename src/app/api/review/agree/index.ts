import { API_PATH } from "@api/constants/apiPath";
import { getAccessToken } from "@api/index";
import { patch } from "@api/index";

export const patchAgreeReview = async () => {
  const token = getAccessToken();
//   if (!token) {
//     throw new Error("로그인 후 다시 시도해주세요.");
//   }

  const response = await patch(
    API_PATH.MEMBERS_REVIEWS_AGREE,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
