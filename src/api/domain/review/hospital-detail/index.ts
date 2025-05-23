import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";
import { paths } from "@type/schema";

//병원 상세 조회 API
//param hospitalId

type useGetHospitalDetail = paths["/api/dev/hospitals/{hospitalId}"]["get"]["responses"]["200"]["content"]["*/*"];

export const getHospitalDetail = async (hospitalId: number) => {
  const { data } = await get<useGetHospitalDetail>(`${API_PATH.HOSPITAL_DETAIL}/${hospitalId}`);
  return data.data;
};
