"use client";

import Hospitals from "./hospitals/Hospitals";
import SuspenseWrapper from "../../SuspenseWrapper.tsx";

export default function SearchPage() {
  return (
    <SuspenseWrapper>
      <Hospitals />
    </SuspenseWrapper>
  );
}
