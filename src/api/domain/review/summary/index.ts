import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

interface ReviewSummaryItem {
  id: number;
  label: string;
  count: number;
}

interface HospitalSummaryResponse {
  code: number;
  message: string;
  data: {
    goodReviews: ReviewSummaryItem[];
    badReviews: ReviewSummaryItem[];
  };
}

//병원 리뷰 요약 조회
//param hospitalId
export const getHospitalSummary = async () => {
  const { data } = await get<HospitalSummaryResponse>(API_PATH.HOSPITAL_SUMMARY_OPTION);
  return data.data;
};

interface ReviewOption {
  id: number;
  label: string;
}

interface HospitalSummaryOptionData {
  goodReviews: ReviewOption[];
  badReviews: ReviewOption[];
}

//리뷰 요약 옵션 리스트 조회 API
export const getHospitalSummaryOption = async (): Promise<HospitalSummaryOptionData> => {
  const { data } = await get<{ data: HospitalSummaryOptionData }>(API_PATH.HOSPITAL_SUMMARY_OPTION);
  return data.data;
};
