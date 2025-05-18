import { post } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";
import { paths } from "@type/schema";

/**
 * @description 병원 리뷰 리스트 조회 API
 */

export type PostHospitalListRequest = {
  locationId?: number;
  locationType: string;
  cursorId?: number;
  cursorReviewCount?: number;
  size: number;
  sortBy: string;
  image: string;
};

export type PostHospitalListResponse = paths["/api/dev/hospitals"]["post"]["responses"]["200"]["content"]["*/*"];

export const postHospitalList = async (body: PostHospitalListRequest): Promise<PostHospitalListResponse> => {
  const { data } = await post<PostHospitalListResponse>(API_PATH.HOSPITAL, body);
  return data;
};

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
}

/**
 * @description 병원 리뷰 리스트 조회 API
 */

export const postHospitalList = async (body: PostHospitalListRequest): Promise<HospitalListResponse> => {
  const { data } = await post<HospitalListResponse>(API_PATH.HOSPITALS, body);
  return data;
};
