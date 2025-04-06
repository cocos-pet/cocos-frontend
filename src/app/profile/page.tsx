"use client";

import Profile from "./index/Profile";
import SuspenseWrapper from "../SuspenseWrapper";

export default function ProfilePage() {
  return (
    <SuspenseWrapper>
      <Profile />
    </SuspenseWrapper>
  );
} 