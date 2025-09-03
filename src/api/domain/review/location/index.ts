import { get, patch } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";
import { paths } from "@type/schema";
import {
  City,
  GetLocationResponse,
  GetMemberLocationResponse,
  LocationResponse,
  MemberLocationResponse,
  UpdateMemberLocationRequest,
} from "./types";

// 전체 지역 조회 API
export type getLocationsResponse =
  paths["/api/dev/locations"]["get"]["responses"]["200"]["content"]["*/*"];

export const getLocation = async (): Promise<GetLocationResponse> => {
  const { data } = await get<LocationResponse>(`${API_PATH.LOCATION}`);

  if (!data?.data?.cities) {
    return [];
  }

  return data.data.cities;
};

// 사용자 위치 조회 API
export type getMemberLocationResponse =
  paths["/api/dev/members/location"]["get"]["responses"]["200"]["content"]["*/*"];

export const getMemberLocation =
  async (): Promise<GetMemberLocationResponse> => {
    const { data } = await get<MemberLocationResponse>(
      `${API_PATH.MEMBER_LOCATION}`
    );

    if (!data?.data) {
      return {
        locationId: 0,
        locationName: "",
      };
    }

    return data.data;
  };

// 사용자 위치 업데이트 API
export const updateMemberLocation = async (
  locationData: UpdateMemberLocationRequest
): Promise<void> => {
  await patch(`${API_PATH.MEMBERS}`, locationData);
};

export type getLocationRequest =
  paths["/api/dev/locations"]["get"]["requestBody"][];
