import { useEffect, useState } from "react";
import { useGetPetInfo } from "@api/domain/mypage/hook";

// 반려동물 등록 여부만 반환하는 훅
export const useIsPetRegistered = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { data: petInfo } = useGetPetInfo();

  useEffect(() => {
    setIsRegister(!!petInfo);
  }, [petInfo]);

  return isRegister;
};

