"use client";

import { Suspense, ReactNode } from "react";

interface SuspenseWrapperProps {
  children: ReactNode;
}

export default function SuspenseWrapper({ children }: SuspenseWrapperProps) {
  return <Suspense fallback={<div>로딩 중...</div>}>{children}</Suspense>;
} 