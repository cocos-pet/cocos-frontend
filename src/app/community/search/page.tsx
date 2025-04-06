"use client";

import Search from "./index/Search.tsx";
import SuspenseWrapper from "../../SuspenseWrapper.tsx";

export default function SearchPage() {
  return (
    <SuspenseWrapper>
      <Search />
    </SuspenseWrapper>
  );
}
