import { getBodys, getBreed, getDisease, getSymptoms, patchPetInfo, PatchPetInfoRequestType } from "./index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAnimal } from ".";
import { PET_EDIT_USER_QUERY_COMMON_KEY } from "../hook";

export const ANIMAL_QUREY_KEY = {
  ANIMAL_ID: () => ["animalId"],
};

// animalId가 변할 때마다 쿼리를 계속 보낼 수 있음
export const BREED_QUERY_KEY = {
  BREED_ID: (animalId: number, breedName?: string) => ["breedId", animalId, breedName],
};

export const BODY_QUERY_KEY = {
  BODIES: (petProblem: "DISEASE" | "SYMPTOM") => ["bodies", petProblem],
};

export const SYMPTOMS_QUERY_KEY = {
  SYMPTOMS: (bodyIds: number[]) => ["symptoms", ...bodyIds],
};

export const DISEASE_QUERY_KEY = {
  DISEASE: (bodyIds: number[]) => ["disease", ...bodyIds],
};

export const useGetAnimal = () => {
  return useQuery({
    queryKey: ANIMAL_QUREY_KEY.ANIMAL_ID(),
    queryFn: () => {
      return getAnimal();
    },
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetBreed = (animalId: number, breedName?: string) => {
  return useQuery({
    queryKey: BREED_QUERY_KEY.BREED_ID(animalId, breedName),
    queryFn: () => {
      return getBreed(animalId, breedName);
    },
  });
};

export const useGetBodies = (petProblem: "DISEASE" | "SYMPTOM") => {
  return useQuery({
    queryKey: BODY_QUERY_KEY.BODIES(petProblem),
    queryFn: () => {
      return getBodys(petProblem);
    },
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetSymptoms = (bodyIds: number[] | undefined) => {
  const _bodyIds= bodyIds ? bodyIds : []
  const _enabled= _bodyIds.length > 0
  return useQuery({
    queryKey: SYMPTOMS_QUERY_KEY.SYMPTOMS(_bodyIds),
    queryFn: () => getSymptoms(_bodyIds),
    staleTime: 1000 * 60 * 10,
    enabled: _enabled
  });
};

export const useGetDisease = (bodyIds: number[] | undefined) => {
  const _bodyIds= bodyIds ? bodyIds : []
  const _enabled= _bodyIds.length > 0
  return useQuery({
    queryKey: DISEASE_QUERY_KEY.DISEASE(_bodyIds),
    queryFn: () => getDisease(_bodyIds),
    staleTime: 1000 * 60 * 10,
    enabled: _enabled
  });
};

// default: exact : false, refetchType: active (사용 중인 쿼리 자동 refetching)
// Note: mutationFn은 기본적으로 하나의 매개변수를 받음(여러개 넘기고 싶으면 객체로 감싸야함)
export const usePatchPetInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["mutationPetInfo"],
    mutationFn: (variables: { petId: number; reqBody: PatchPetInfoRequestType }) =>
      patchPetInfo(variables.petId, variables.reqBody),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PET_EDIT_USER_QUERY_COMMON_KEY],
      });
    },
  });
};
