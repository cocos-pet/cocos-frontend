import { useInfiniteQuery } from "@tanstack/react-query";
import { postHospitalList, PostHospitalListRequest, HospitalListResponse } from "./index";

type HospitalCursor = { cursorId?: number; cursorReviewCount?: number };

export const HOSPITAL_QUERY_KEY = {
  INFINITE_LIST: (params: PostHospitalListRequest) => ["hospitals", "infinite", params] as const,
} as const;

export const useInfiniteHospitalList = (initialRequest: PostHospitalListRequest) => {
  return useInfiniteQuery<
    HospitalListResponse,
    Error,
    HospitalListResponse,
    ReturnType<typeof HOSPITAL_QUERY_KEY.INFINITE_LIST>,
    HospitalCursor
  >({
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
