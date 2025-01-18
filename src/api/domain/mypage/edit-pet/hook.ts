import { useQuery } from "@tanstack/react-query";
import { getAnimal, getMemberInfo } from ".";

export const MEMBER_QUERY_KEY = {
  MEMBER_INFO: () => ["memeberInfo"],
};

export const ANIMAL_QUREY_KEY = {
  ANIMAL_ID: () => ["animalId"],
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
