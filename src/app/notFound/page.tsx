"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFoundPage() {
  const router = useRouter();
  
  useEffect(() => {
    // 3초 후 메인 페이지로 리다이렉트
    const timer = setTimeout(() => {
      router.push("/main");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      padding: '0 20px',
      textAlign: 'center'
    }}>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않습니다. 3초 후 메인 페이지로 이동합니다.</p>
    </div>
  );
} 