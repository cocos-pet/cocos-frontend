import { get, post } from "@api/index";
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

export interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  image?: string;
}

export interface HospitalListResponse {
  hospitals: Hospital[];
  cursorId?: number;
  cursorReviewCount?: number;
  hasNext: boolean;
}

export const postHospitalList = async (body: PostHospitalListRequest): Promise<HospitalListResponse> => {
  const { data } = await post<PostHospitalListResponse>(API_PATH.HOSPITAL, body);
  return {
    hospitals: (data.data?.hospitals ?? []).map((hospital) => ({
      id: hospital.id ?? 0,
      name: hospital.name ?? "",
      address: hospital.address ?? "",
      reviewCount: hospital.reviewCount ?? 0,
      image: hospital.image,
    })),
    cursorId: data.data?.cursorId,
    cursorReviewCount: data.data?.cursorReviewCount,
    hasNext: data.data?.hospitals?.length === body.size,
  };
};

type useGetHospitalDetail = paths["/api/dev/hospitals/{hospitalId}"]["get"]["responses"]["200"]["content"]["*/*"];

export const getHospitalDetail = async (hospitalId: number) => {
  const { data } = await get<useGetHospitalDetail>(`${API_PATH.HOSPITALS}/${hospitalId}`);
  return data.data;
};
