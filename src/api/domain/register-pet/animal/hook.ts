import { useQuery } from "@tanstack/react-query";
import { getAnimal } from "@api/domain/register-pet/animal/index";

export const ANIMALS_QUERY_KEY = {
  ANIMALS_QUERY_KEY: () => ["animals"],
};

export const useAnimalGet = () => {
  return useQuery({
    queryKey: ANIMALS_QUERY_KEY.ANIMALS_QUERY_KEY(),
    queryFn: () => {
      return getAnimal();
    },
  });
};
