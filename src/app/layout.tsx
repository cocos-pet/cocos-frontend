import React, { ReactNode } from "react";
import { Metadata } from "next";
import "./../style/global.css.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "코코스",
  description: "반려동물 증상을 겪는 반려인들이 고민을 공유하고 병원 정보를 확인할 수 있는 서비스",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <html lang="ko" style={{ scrollbarWidth: "none" }}>
      <body>
        <QueryClientProvider client={queryClient}>
          <div id="root">{children}</div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
