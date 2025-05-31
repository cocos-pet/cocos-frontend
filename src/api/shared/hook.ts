import { useMutation, useInfiniteQuery, useQueryClient, useQuery } from "@tanstack/react-query";
import {
  deleteReview,
  getHospitalList,
  getMemeberFavoriteHospitals,
  getMemeberHospitalReviews,
  patchMemberFavoriteHospitals,
  RequestBody,
} from "./index";

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

export const useInfiniteHospitalList = (initialParams: Omit<RequestBody, "cursorId" | "cursorReviewCount">) => {
  return useInfiniteQuery({
    queryKey: HOSPITAL_QUERY_KEY.INFINITE_HOSPITALS(initialParams),
    queryFn: ({ pageParam }) => {
      const params = { ...initialParams, ...pageParam };
      return getHospitalList(params);
    },
    initialPageParam: {},
    getNextPageParam: (lastPage) => {
      //룰은 https://www.notion.so/API-1c3c12bc8533807ca1dee16f155604d4 참고
      const { cursorId, cursorReviewCount, hospitals } = lastPage || {};

      // 더 이상 데이터가 없으면 undefined 반환 -> hasNextPage가 false로 설정됨
      if (!hospitals || hospitals.length === 0) {
        return undefined;
      }
      // 검색어가 있는 경우 cursorId만 필요, 리뷰 정렬인 경우 cursorReviewCount도 필요
      if (initialParams.keyword) {
        return { cursorId };
      }
      if (initialParams.sortBy === "REVIEW") {
        return { cursorId, cursorReviewCount };
      }

      return { cursorId };
    },
  });
};

/************************************
  mypage & profile
************************************/
export const useGetFavoriteHospital = (nickname: string) => {
  return useQuery({
    queryKey: ["getFavoriteHosipital", nickname],
    queryFn: getMemeberFavoriteHospitals,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const usePatchFavoriteHospital = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["patchFavoriteHospital"],
    mutationFn: async (hospitalId: number) => patchMemberFavoriteHospitals(hospitalId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getFavoriteHosipital"],
      });
    },
  });
};

//todo: 무한 스크롤
interface UseInfiniteHospitalReviewProps {
  nickname: string;
  cursorId: number | undefined;
  size: number;
}

export const useInfiniteHospitalReview = (initialParams: UseInfiniteHospitalReviewProps) => {
  return useInfiniteQuery({
    queryKey: ["memberHospitalReview", initialParams.nickname, initialParams.size],
    queryFn: async ({ pageParam }) => {
      return await getMemeberHospitalReviews(
        initialParams.nickname,
        pageParam as number | undefined,
        initialParams.size,
      );
    },
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => {
      const { cursorId, reviews } = lastPage || {};

      // 더 이상 데이터가 없으면 undefined 반환 -> hasNextPage가 false로 설정됨
      if (!reviews || reviews.length === 0) {
        return undefined;
      }

      // 다음 페이지를 위해 마지막 리뷰의 ID를 반환
      return cursorId;
    },
  });
};

export const useGetMemberHospitalReviews = (nickname: string, cursorId: number | undefined, size: number) => {
  return useQuery({
    queryKey: ["memberHospitalReview", nickname, cursorId, size],
    queryFn: () => {
      getMemeberHospitalReviews(nickname, cursorId, size);
    },
    staleTime: 1000 * 60 * 3,
  });
};

export const useDeleteHospitalReview = () => {
  const query = useQueryClient();
  return useMutation({
    mutationKey: ["deleteHospitalReview"],
    mutationFn: (reviewId: string | number) => deleteReview(reviewId),
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["memberHospitalReview"],
      });
    },
  });
};


