import { useEffect, useState } from "react";
import { Disease } from "./useMypageState";
import { useGetPetInfo } from "@api/domain/mypage/hook";

export interface PetInfo {
  petImage?: string;
  breed?: string;
  petAge?: string | number;
  diseases?: Disease[];
}

export const useProfileSectionState = () => {
  const [isRegister, setIsRegister] = useState(true);
  const { data: petInfo } = useGetPetInfo();

  useEffect(() => {
    if (!petInfo) setIsRegister(false);
    else setIsRegister(true);
  }, [petInfo]);

  return {
    petInfo,
    isRegister,
  };
};
