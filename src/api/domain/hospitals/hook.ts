import { useInfiniteQuery } from "@tanstack/react-query";
import { postHospitalList, PostHospitalListRequest, PostHospitalListResponse } from "./index";

type HospitalCursor = { cursorId?: number; cursorReviewCount?: number };

export const useInfiniteHospitalList = (initialRequest: PostHospitalListRequest) => {
  return useInfiniteQuery<
    PostHospitalListResponse, 
    Error,                    
    PostHospitalListResponse, 
    [string, PostHospitalListRequest], 
    HospitalCursor            
  >({
    queryKey: ["hospitals", initialRequest],
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
      if (!lastPage.data?.hospitals?.length) return undefined;
      return {
        cursorId: lastPage.data.cursorId,
        cursorReviewCount: lastPage.data.cursorReviewCount,
      };
    },
  });
};

export const HOSPITAL_QUERY_KEY = {
    POST_HOSPITAL_LIST: () => ["postHospitalList"],
};