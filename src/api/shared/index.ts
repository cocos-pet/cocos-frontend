import { API_PATH } from "@api/constants/apiPath";
import { post } from "@api/index";
import { paths } from "@type/schema";

export type RequestBody = paths["/api/dev/hospitals"]["post"]["requestBody"]["content"]["application/json"];
type ResponseType = paths["/api/dev/hospitals"]["post"]["responses"]["200"]["content"]["*/*"];

export const getHospitalList = async (body: RequestBody) => {
  const response = await post<ResponseType>(`${API_PATH.HOSPITAL}`, body);
  return response.data;
};
