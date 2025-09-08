export interface City {
  id: number;
  name: string;
  districts: District[];
}

export type LocationType = "CITY" | "DISTRICT";

export interface District {
  id: number;
  name: string;
  type: LocationType;
}

export interface LocationResponse {
  code: number;
  message: string;
  data: {
    cities: City[];
  };
}

export interface MemberLocationResponse {
  code: number;
  message: string;
  data: {
    locationId: number;
    locationName: string;
  };
}

export type GetLocationResponse = City[];
export interface UpdateMemberLocationRequest {
  locationId: number;
  locationType: LocationType;
  address?: string;
  roadAddress?: string;
  latitude?: string;
  longitude?: string;
}

export type GetMemberLocationResponse = {
  locationId: number;
  locationName: string;
};
