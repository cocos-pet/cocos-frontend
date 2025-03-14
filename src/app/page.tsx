"use client";
import "../style/global.css.ts";
import {PATH} from "@route/path";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const Index = () => {
  const router = useRouter();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) router.push(PATH.MAIN);
    else router.push(PATH.LOGIN);
  }, [router.push, user]);

  return <></>;
};

export default Index;
