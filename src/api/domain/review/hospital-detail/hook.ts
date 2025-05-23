import { useQuery } from "@tanstack/react-query";
import { getHospitalDetail } from ".";

export const GET_HOSPITAL_DETAIL_QUERY_KEY = {
  GET_HOSPITAL_DETAIL_QUERY_KEY: (hospitalId: number) => ["hospital", hospitalId],
};

export const useGetHospitalDetail = (hospitalId: number) => {
  return useQuery({
    queryKey: GET_HOSPITAL_DETAIL_QUERY_KEY.GET_HOSPITAL_DETAIL_QUERY_KEY(hospitalId),
    queryFn: () => getHospitalDetail(hospitalId),
  });
};
