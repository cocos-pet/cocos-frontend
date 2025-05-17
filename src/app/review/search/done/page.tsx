"use client";

import HospitalSearchDone from "./HospitalSearchDone";
import SuspenseWrapper from "../../../SuspenseWrapper";

export default function SearchPage() {
  return (
    <SuspenseWrapper>
      <HospitalSearchDone />
    </SuspenseWrapper>
  );
}
