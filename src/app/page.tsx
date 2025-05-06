"use client";

import { PATH } from "@route/path";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    localStorage.setItem("dummy", "jun, min, ye, yoon");
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) router.push(PATH.MAIN);
    else router.push(PATH.LOGIN);
  }, [router]);

  return <></>;
};

export default Index;
