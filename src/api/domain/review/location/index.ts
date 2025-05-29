import { get } from "@api/index";
import { API_PATH } from "@api/constants/apiPath";

interface City {
  id: number;
  name: string;
  districts: District[];
}

interface District {
  id: number;
  name: string;
}

interface LocationResponse {
  code: number;
  message: string;
  data: {
    cities: City[];
  };
}

export const getLocation = async (): Promise<City[]> => {
  const { data } = await get<LocationResponse>(`${API_PATH.LOCATION}`);

  if (!data?.data?.cities) {
    return [];
  }

  return data.data.cities;
};
