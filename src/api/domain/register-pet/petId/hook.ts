import { useQuery } from "@tanstack/react-query";
import { getPetId } from "@api/domain/register-pet/petId/index";

export const BREEDS_QUERY_KEY = {
  BREEDS_QUERY_KEY: (type: number) => ["petId", type],
};

export const usePetIdGet = (type: number) => {
  return useQuery({
    queryKey: BREEDS_QUERY_KEY.BREEDS_QUERY_KEY(type),
    queryFn: () => getPetId(type),
  });
};
