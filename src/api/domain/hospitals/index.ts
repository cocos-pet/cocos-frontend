import { post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

export interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  averageRating: number;
  imageUrl?: string;
}

export interface HospitalListResponse {
  hospitals: Hospital[];
  cursorId?: number;
  cursorReviewCount?: number;
  hasNext: boolean;
}

export interface PostHospitalListRequest {
  locationId?: number;
  locationType: string;
  cursorId?: number;
  cursorReviewCount?: number;
  size: number;
  sortBy: string;
  image: string;
}

/**
 * @description 병원 리뷰 리스트 조회 API
 */

export const postHospitalList = async (body: PostHospitalListRequest): Promise<PostHospitalListResponse> => {
  const { data } = await post<PostHospitalListResponse>(API_PATH.HOSPITAL, body);
  return data;
};

export interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  averageRating: number;
  imageUrl?: string;
}

export interface HospitalListResponse {
  hospitals: Hospital[];
  cursorId?: number;
  cursorReviewCount?: number;
  hasNext: boolean;
}

/**
 * @description 병원 리뷰 리스트 조회 API
 */
