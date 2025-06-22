import { useQuery } from "@tanstack/react-query";
import { getHospitalSummary } from ".";
import { getHospitalSummaryOption } from "./index";

interface ReviewOption {
  id: number;
  label: string;
  count: number;
}

interface HospitalSummaryOptionData {
  goodReviews: ReviewOption[];
  badReviews: ReviewOption[];
}

export const GET_HOSPITAL_SUMMARY = {
  GET_HOSPITAL_SUMMARY: (hospitalId: number) => ["hospital", "hospitalId"],
};

export const useGetHospitalSummary = (hospitalId: number) => {
  return useQuery({
    queryKey: GET_HOSPITAL_SUMMARY.GET_HOSPITAL_SUMMARY(hospitalId),
    queryFn: async () => {
      try {
        return await getHospitalSummary(hospitalId);
      } catch (error) {
        console.error("리뷰 요약 조회 에러:", error);
        throw error;
      }
    },
  });
};

export const GET_HOSPITAL_SUMMARY_OPTION = {
  queryKey: ["hospital", "summary", "option"],
};

export const useGetHospitalSummaryOption = () => {
  return useQuery<HospitalSummaryOptionData, Error>({
    queryKey: GET_HOSPITAL_SUMMARY_OPTION.queryKey,
    queryFn: async () => {
      try {
        return await getHospitalSummaryOption();
      } catch (error) {
        console.error("리뷰 요약 옵션 조회 에러:", error);
        throw error;
      }
    },
  });
};
