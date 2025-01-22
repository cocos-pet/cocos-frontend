import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postMyPet } from ".";
import { myPetPostType } from ".";

const MY_PET_QUERY_KEY = {
  MY_PET_QUERY_KEY: () => ["myPetPost"],
};

export const useMyPetPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: MY_PET_QUERY_KEY.MY_PET_QUERY_KEY(),
    mutationFn: (data: myPetPostType) => postMyPet(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MY_PET_QUERY_KEY.MY_PET_QUERY_KEY(),
      });
    },
  });
};
