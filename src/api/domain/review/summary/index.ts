import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";
import { paths } from "@type/schema";

//병원 리뷰 요약 조회
//param hospitalId

type useGetHospitalSummary =
  paths["/api/dev/hospitals/{hospitalId}/reviews/summary"]["get"]["responses"]["200"]["content"]["*/*"];

export const getHospitalSummary = async (hospitalId: number) => {
  const { data } = await get<useGetHospitalSummary>(`${API_PATH.HOSPITAL_DETAIL}/${hospitalId}/reviews/summary`);
  return data.data;
};
