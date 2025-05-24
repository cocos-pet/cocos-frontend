import { useQuery } from "@tanstack/react-query";
import { getHospitalSummary } from ".";

export const GET_HOSPITAL_SUMMARY = {
  GET_HOSPITAL_SUMMARY: (hospitalId: number) => ["hospital", "hospitalId"],
};

export const useGetHospitalSummary = (hospitalId: number) => {
  return useQuery({
    queryKey: GET_HOSPITAL_SUMMARY.GET_HOSPITAL_SUMMARY(hospitalId),
    queryFn: () => getHospitalSummary(hospitalId),
  });
};
