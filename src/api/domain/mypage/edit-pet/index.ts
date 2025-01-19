import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

export const getMemberInfo = async () => {
  //type getMemberInfoRequest = paths["/api/dev/members"]["get"]["requestBody"];
  type MemberInfoResponse = paths["/api/dev/members"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<MemberInfoResponse>(API_PATH.MEMBERS, {});

  return data.data;
};

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
