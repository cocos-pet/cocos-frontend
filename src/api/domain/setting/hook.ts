import { useMutation } from "@tanstack/react-query";
import { postLogout } from ".";
import { useNavigate } from "react-router-dom";

const LOGOUT_QUERY_KEY = {
  LOGOUT_MEMEBER: () => ["logout"],
};

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: LOGOUT_QUERY_KEY.LOGOUT_MEMEBER(),
    mutationFn: postLogout,
    onSuccess: () => {
      localStorage.removeItem("user");
      navigate("/login");
    },
  });
};
