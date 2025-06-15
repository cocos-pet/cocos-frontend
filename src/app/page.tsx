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
    router.push(PATH.MAIN);
  }, [router]);

  return <></>;
};

export default Index;
