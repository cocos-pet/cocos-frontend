import { API_PATH } from "@api/constants/apiPath";
import { paths } from "@type/schema";
import { patch, get, getAccessToken } from "@api/index";

const token = getAccessToken();

// 리뷰 동의 PATCH API
export const patchAgreeReview = async () => {
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

// 리뷰 동의 여부 조회 GET API
export type agreeGetResponse = paths["/api/dev/members/reviews/agree"]["get"]["responses"]["200"]["content"]["*/*"];

export const getReviewAgreementStatus = async () => {
  const { data } = await get<agreeGetResponse>(API_PATH.MEMBERS_REVIEWS_AGREE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data;
};
