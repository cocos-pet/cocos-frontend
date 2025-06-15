import { API_PATH } from "@api/constants/apiPath";
import { del, patch, post, get } from "@api/index";
import { components, paths } from "@type/schema";

export type RequestBody = paths["/api/dev/hospitals"]["post"]["requestBody"]["content"]["application/json"];
export type ResponseType = paths["/api/dev/hospitals"]["post"]["responses"]["200"]["content"]["*/*"];
export type HospitalListType = components["schemas"]["HospitalResponse"][];

export const getHospitalList = async (body: RequestBody) => {
  const response = await post<ResponseType>(`${API_PATH.HOSPITAL}`, body);
  return response.data;
};

/************************************
  mypage & profile
************************************/
//tanstack query를 사용하는 경우, try-catch 문을 사용해서는 안됨. + params는 반드시 {}로 감싸줘야 함.
export const getMemeberFavoriteHospitals = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [, nickname] = queryKey;
  type ResponseType = paths["/api/dev/members/hospitals"]["get"]["responses"]["200"]["content"]["*/*"];
  const response = await get<ResponseType>(`${API_PATH.MEMBERS_HOSPITALS}`, {
    params: { nickname },
  });
  return response.data.data ?? null;
};

export const patchMemberFavoriteHospitals = async (hospitalId: number) => {
  type ResponseType = paths["/api/dev/members/hospitals/{hospitalId}"]["patch"]["responses"]["200"]["content"]["*/*"];
  const response = await patch<ResponseType>(`${API_PATH.MEMBERS_HOSPITALS}/${hospitalId}`, {});
  return response;
};

export const getMemeberHospitalReviews = async (nickname: string, cursorId: number | undefined, size: number) => {
  type ResponseType = paths["/api/dev/hospitals/reviews/members"]["get"]["responses"]["200"]["content"]["*/*"];
  const response = await get<ResponseType>(`${API_PATH.MEMBERS_HOSPITAL_REVIEWS}/members`, {
    params: {
      nickname,
      cursorId: cursorId,
      size,
    },
  });
  return response.data.data;
};

export const deleteReview = async (reviewId: string | number) => {
  type ResponseType = paths["/api/dev/hospitals/reviews/{reviewId}"]["delete"]["responses"]["200"]["content"]["*/*"];
  const response = await del<ResponseType>(`${API_PATH.MEMBERS_HOSPITAL_REVIEWS}/${reviewId}`);
  return response;
};
