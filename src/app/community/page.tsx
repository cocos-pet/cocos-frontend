"use client";

import Community from "./index/Community";
import SuspenseWrapper from "../SuspenseWrapper";

export default function CommunityPage() {
  return (
    <SuspenseWrapper>
      <Community />
    </SuspenseWrapper>
  );
} 