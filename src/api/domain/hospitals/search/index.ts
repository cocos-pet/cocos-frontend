import { API_PATH } from "@api/constants/apiPath";
import { get, post } from "@api/index";
import { paths } from "@type/schema";

export interface PostHospitalListRequest {
    locationId: number;
    locationType: "CITY" | "DISTRICT";
    size: number;
    cursorId?: number;
    keyword?: string;
  }
  
  export interface Hospital {
    id: number;
    name: string;
    address: string;
    reviewCount: number;
    image: string;
  }
  
  export interface PostHospitalListResponse {
    code: number;
    message: string;
    data: {
      cursorId: number;
      cursorReviewCount: number | null;
      hospitals: Hospital[];
    };
  }
  
  export const postHospitalList = async (body: PostHospitalListRequest): Promise<PostHospitalListResponse> => {
    const { data } = await post<PostHospitalListResponse>(API_PATH.HOSPITAL, body);
    return data;
  };

export const searchHospitalGetResponse = async () => {
  const response = await get(API_PATH.HOSPITAL_SEARCH);
  return response.data;
};

export type searchHospitalPostRequest = { keyword: string };

export type searchPostHospitalResponse = paths['/api/dev/search/hospital']['post']['responses']['200']['content']['*/*'];

export interface Keyword {
  id: number;
  content: string;
}

export interface HospitalSearchKeywordsResponse {
  code: number;
  message: string;
  data: {
    keywords: Keyword[];
  };
}

/**
 * @description 최근 검색어 조회 API
 */
export const getHospitalSearchKeywords = async (): Promise<HospitalSearchKeywordsResponse> => {
  const response = await get(API_PATH.HOSPITAL_SEARCH);
  return response.data as HospitalSearchKeywordsResponse;
};

export type HospitalSearchKeywordSaveRequest = { keyword: string };
export const postHospitalSearchKeyword = async (keyword: string) => {
  const response = await post(`${API_PATH.HOSPITAL_SEARCH}?keyword=${encodeURIComponent(keyword)}`, {});
  return response.data;
};

export type HospitalSearchRequest = { keyword: string };
export const postHospitalSearch = async (body: HospitalSearchRequest) => {
  const response = await post(API_PATH.HOSPITAL_SEARCH, body);
  return response.data;
};

