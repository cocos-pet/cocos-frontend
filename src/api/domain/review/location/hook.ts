import { useMutation, useQuery } from "@tanstack/react-query";
import { getLocation, getMemberLocation, updateMemberLocation } from "./index";
import { UpdateMemberLocationRequest } from "./types";

export const QUERY_KEY = {
  LOCATION: "location",
  MEMBER_LOCATION: "memberLocation",
} as const;

export const useGetLocation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.LOCATION],
    queryFn: () => getLocation(),
  });
};

export const useGetMemberLocation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MEMBER_LOCATION],
    queryFn: () => getMemberLocation(),
  });
};

export const useUpdateMemberLocation = () => {
  return useMutation({
    mutationFn: (locationData: UpdateMemberLocationRequest) =>
      updateMemberLocation(locationData),
  });
};
