import {PATH} from "@route/path";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) navigate(PATH.MAIN);
    else navigate(PATH.LOGIN);
  }, [navigate, user]);

  return <></>;
};

export default Index;
