import {
  getBodys,
  getBreed,
  getDisease,
  getPetInfo,
  getSymptoms,
  patchPetInfo,
  PatchPetInfoRequestType,
} from "./index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAnimal, getMemberInfo } from ".";

const PET_EDIT_USER_QUERY_COMMON_KEY = "petEditInfo";

export const MEMBER_QUERY_KEY = {
  MEMBER_INFO: () => [PET_EDIT_USER_QUERY_COMMON_KEY, "memeberInfo"],
};

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

export const PETINFO_QUERY_KEY = {
  PET_INFO: (nickname?: string) => [PET_EDIT_USER_QUERY_COMMON_KEY, "petInfo", nickname],
};

export const useGetMemberInfo = () => {
  return useQuery({
    queryKey: MEMBER_QUERY_KEY.MEMBER_INFO(),
    queryFn: () => {
      return getMemberInfo();
    },
    staleTime: 1000 * 60 * 5,
  });
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

export const useGetSymptoms = (bodyIds: number[]) => {
  return useQuery({
    queryKey: SYMPTOMS_QUERY_KEY.SYMPTOMS(bodyIds),
    queryFn: () => getSymptoms(bodyIds),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetDisease = (bodyIds: number[]) => {
  return useQuery({
    queryKey: DISEASE_QUERY_KEY.DISEASE(bodyIds),
    queryFn: () => getDisease(bodyIds),
    staleTime: 1000 * 60 * 10,
  });
};

//궁금증 : undefind을 인자로 보내면, 인식을 할까?
//todo: invaildate 필요(나중에 patch 되면)
export const useGetPetInfo = (nickname?: string) => {
  return useQuery({
    queryKey: PETINFO_QUERY_KEY.PET_INFO(nickname),
    queryFn: () => getPetInfo(nickname),
    staleTime: 1000 * 60 * 10,
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
