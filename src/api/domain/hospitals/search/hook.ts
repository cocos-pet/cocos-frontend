import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";
import {
  HospitalSearchRequest,
  HospitalSearchKeywordsResponse,
  postHospitalList,
  PostHospitalListRequest,
  PostHospitalListResponse,
} from "./index";

export interface Keyword {
  id: number;
  content: string;
}

export const useGetHospitalSearchKeywords = (enabled: boolean) => {
  return useQuery<HospitalSearchKeywordsResponse>({
    queryKey: ["hospital", "search", "keywords"],
    queryFn: async () => {
      const { data } = await get<HospitalSearchKeywordsResponse>(API_PATH.HOSPITAL_SEARCH);
      return data;
    },
    enabled
  });
};

export const usePostHospitalSearchKeyword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (keyword: string) => {
      const { data } = await post<{
        code: number;
        message: string;
        data: {
          keywords: Keyword[];
        };
      }>(`${API_PATH.HOSPITAL_SEARCH}?keyword=${keyword}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hospital", "search", "keywords"] });
    },
    onError: (error) => {
      console.error("검색어 저장 에러:", error);
    },
  });
};

// 병원 검색 실행
export const useGetHospitalSearch = (params: HospitalSearchRequest) => {
  return useQuery({
    queryKey: ["hospital", "search", params.keyword],
    queryFn: async () => {
      const { data } = await post(API_PATH.HOSPITALS, params);
      return data;
    },
    enabled: !!params.keyword,
  });
};

export const usePostHospitalList = () => {
  return useMutation<PostHospitalListResponse, Error, PostHospitalListRequest>({
    mutationFn: postHospitalList,
  });
};
