"use client";

import Hospitals from "./hospitals/hospitals";
import SuspenseWrapper from "../../SuspenseWrapper.tsx";

export default function SearchPage() {
  return (
    <SuspenseWrapper>
      <Hospitals />
    </SuspenseWrapper>
  );
}
