import { question } from "./../../../../app/review/write/_component/ReviewHospital.style.css";
import { nickname } from "./../../../../common/component/SubComment/SubComment.css";
import { API_PATH } from "@api/constants/apiPath";
import { del, get, patch } from "@api/index";
import { paths } from "@type/schema";
import { AxiosError } from "axios";

export const getAnimal = async () => {
  type AnimalResponse = paths["/api/dev/animals"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<AnimalResponse>(API_PATH.ANIMALS, {});
  return data.data;
};

export const getBreed = async (animalId: number, breedName?: string) => {
  type BreedResponse = paths["/api/dev/breeds/{animalId}"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<BreedResponse>(`${API_PATH.BREEDS}/${animalId}`, {
    params: { breedName },
  });
  return data.data;
};

export const getBodys = async (petProblem: "DISEASE" | "SYMPTOM") => {
  type BodyResponse = paths["/api/dev/bodies"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<BodyResponse>(`${API_PATH.BODY}`, {
    params: { petProblem },
  });
  return data.data;
};

export const getSymptoms = async (bodyIds: number[]) => {
  type SymptomsResponse = paths["/api/dev/symptoms"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<SymptomsResponse>(`${API_PATH.SYMPTOMS}`, {
    params: { bodyIds: bodyIds.join(",") },
  });
  return data.data;
};

export const getDisease = async (bodyIds: number[]) => {
  type DiseaseResponse = paths["/api/dev/diseases"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<DiseaseResponse>(`${API_PATH.DISEASE}`, {
    params: { bodyIds: bodyIds.join(",") },
  });
  return data.data;
};

export type PatchPetInfoRequestType =
  paths["/api/dev/pets/{petId}"]["patch"]["requestBody"]["content"]["application/json"];
export const patchPetInfo = async (petId: number, reqBody: PatchPetInfoRequestType) => {
  console.log(petId);
  type PatchPetInfoResponseType = paths["/api/dev/pets/{petId}"]["patch"]["responses"]["200"]["content"]["*/*"];
  const response = await patch<PatchPetInfoResponseType>(`${API_PATH.PETS}/${petId}`, reqBody);
  return response;
};

//tanstack query를 사용하는 경우, try-catch 문을 사용해서는 안됨.
export const getMemeberFavoriteHospitals = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [, nickname] = queryKey;
  type ResponseType = paths["/api/dev/members/hospitals"]["get"]["responses"]["200"]["content"]["*/*"];
  const response = await get<ResponseType>(`${API_PATH.MEMBERS_HOSPITALS}`, {
    params: nickname,
  });
  return response;
};

export const patchMemberFavoriteHospitals = async (hospitalId: number) => {
  type ResponseType = paths["/api/dev/members/hospitals/{hospitalId}"]["patch"]["responses"]["200"]["content"]["*/*"];
  const response = await patch<ResponseType>(`${API_PATH.MEMBERS_HOSPITALS}/${hospitalId}`, {});
  return response;
};

export const getMemeberHospitalReviews = async (nickname: string, cursorId: number | undefined, size: number) => {
  type ResponseType = paths["/api/dev/hospitals/reviews/members"]["get"]["responses"]["200"]["content"]["*/*"];
  const response = await get<ResponseType>(`${API_PATH.MEMBERS_HOSPITAL_REVIEWS}/members`, {
    params: {
      nickname,
      cursorId : cursorId,
      size,
    },
  });
  return response;
};

export const deleteReview = async (reviewId: string | number) => {
  type ResponseType = paths["/api/dev/hospitals/reviews/{reviewId}"]["delete"]["responses"]["200"]["content"]["*/*"];
  const response = await del<ResponseType>(`${API_PATH.MEMBERS_HOSPITAL_REVIEWS}/${reviewId}`);
  return response;
};
