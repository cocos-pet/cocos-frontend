import { useMutation, useInfiniteQuery } from "@tanstack/react-query";
import { getHospitalList, RequestBody } from "./index";

export const useGetHospitalList = (body: RequestBody) => {
  return useMutation({
    mutationFn: () => getHospitalList(body),
  });
};

export const HOSPITAL_QUERY_KEY = {
  INFINITE_HOSPITALS: (params: Omit<RequestBody, "cursorId" | "cursorReviewCount">) => [
    "hospitals",
    "infinite",
    params.locationId,
    params.locationType,
    params.keyword,
    params.sortBy,
  ],
};

// 무한 스크롤을 위한 병원 목록 조회 훅
export const useInfiniteHospitalList = (initialParams: Omit<RequestBody, "cursorId" | "cursorReviewCount">) => {
  return useInfiniteQuery({
    queryKey: HOSPITAL_QUERY_KEY.INFINITE_HOSPITALS(initialParams),
    queryFn: async ({ pageParam = {} }) => {
      const params: RequestBody = {
        ...initialParams,
        ...pageParam,
      };
      const response = await getHospitalList(params);
      return response.data;
    },
    initialPageParam: {},
    // 다음 페이지 파라미터 반환
    getNextPageParam: (lastPage) => {
      const { cursorId, cursorReviewCount, hospitals } = lastPage || {};

      // 더 이상 데이터가 없으면 undefined 반환 -> hasNextPage가 false로 설정됨
      if (!hospitals || hospitals.length === 0) {
        return undefined;
      }

      // 검색어가 있는 경우 cursorId만 필요, 리뷰 정렬인 경우 cursorReviewCount도 필요
      if (initialParams.keyword) {
        return { cursorId };
      }

      //https://www.notion.so/API-1c3c12bc8533807ca1dee16f155604d4 참고
      if (initialParams.sortBy === "REVIEW") {
        return { cursorId, cursorReviewCount };
      }

      return { cursorId };
    },
  });
};
