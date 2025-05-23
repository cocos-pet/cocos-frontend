import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getHospitalSearchKeywords,
  postHospitalSearchKeyword,
  postHospitalSearch,
  HospitalSearchRequest,
  HospitalSearchKeywordsResponse,
  postHospitalList,
  PostHospitalListRequest,
  PostHospitalListResponse
} from "./index";

// 최근 검색어 조회
export const useGetHospitalSearchKeywords = () => {
  return useQuery<HospitalSearchKeywordsResponse>({
    queryKey: ["hospitalSearchKeywords"],
    queryFn: getHospitalSearchKeywords,
  });
};

// 최근 검색어 저장
export const usePostHospitalSearchKeyword = () => {
  return useMutation({
    mutationFn: (keyword: string) => postHospitalSearchKeyword(keyword),
  });
};

// 병원 검색 실행
export const usePostHospitalSearch = () => {
  return useMutation({
    mutationFn: (body: HospitalSearchRequest) => postHospitalSearch(body),
  });
};

export const usePostHospitalList = () => {
  return useMutation<PostHospitalListResponse, Error, PostHospitalListRequest>({
    mutationFn: postHospitalList,
  });
};
