import { ReactNode } from "react";
import "@style/global.css.ts";
import Provider from "./Provider";
import { Metadata } from "next";

// Metadata는 서버 컴포넌트에서만 사용 가능합니다.
// 이 파일은 이제 클라이언트 컴포넌트이므로 메타데이터 정의를 제거합니다.
export const metadata: Metadata = {
  title: "코코스",
  description: "반려동물 증상을 겪는 반려인들이 고민을 공유하고 병원 정보를 확인할 수 있는 서비스",
};

// 클라이언트 컴포넌트에서는 getServerSideProps나 metadata 등 서버 기능을 사용할 수 없습니다.
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko" style={{ scrollbarWidth: "none" }}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
