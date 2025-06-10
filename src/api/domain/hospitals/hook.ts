import { useInfiniteQuery, InfiniteData, useQuery } from "@tanstack/react-query";
import { getHospitalDetail, postHospitalList, PostHospitalListRequest, HospitalListResponse } from "./index";

type HospitalCursor = { cursorId?: number; cursorReviewCount?: number };

export const HOSPITAL_QUERY_KEY = {
  INFINITE_LIST: (params: PostHospitalListRequest) => ["hospitals", "infinite", params] as const,
} as const;

type QueryKey = ReturnType<typeof HOSPITAL_QUERY_KEY.INFINITE_LIST>;

export const useInfiniteHospitalList = (initialRequest: PostHospitalListRequest) => {
  return useInfiniteQuery<HospitalListResponse, Error, InfiniteData<HospitalListResponse>, QueryKey, HospitalCursor>({
    queryKey: HOSPITAL_QUERY_KEY.INFINITE_LIST(initialRequest),
    initialPageParam: { cursorId: undefined, cursorReviewCount: undefined },
    queryFn: async ({ pageParam }) => {
      const req: PostHospitalListRequest = {
        ...initialRequest,
        cursorId: pageParam.cursorId,
        cursorReviewCount: pageParam.cursorReviewCount,
      };
      return postHospitalList(req);
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.hospitals?.length || !lastPage.hasNext) return undefined;
      return {
        cursorId: lastPage.cursorId,
        cursorReviewCount: lastPage.cursorReviewCount,
      };
    },
  });
};
export const GET_HOSPITAL_DETAIL_QUERY_KEY = {
  GET_HOSPITAL_DETAIL_QUERY_KEY: (hospitalId: number) => ["hospital", hospitalId],
};

export const useGetHospitalDetail = (hospitalId: number) => {
  return useQuery({
    queryKey: GET_HOSPITAL_DETAIL_QUERY_KEY.GET_HOSPITAL_DETAIL_QUERY_KEY(hospitalId),
    queryFn: () => getHospitalDetail(hospitalId),
  });
};
