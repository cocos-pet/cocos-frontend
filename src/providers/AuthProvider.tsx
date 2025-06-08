"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode, Suspense } from "react";
import { isLoggedIn } from "@api/index";
import Loading from "@common/component/Loading/Loading";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// 실제 인증 상태를 관리하는 내부 컴포넌트
const AuthManager = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const authStatus = isLoggedIn();
        setIsAuthenticated(authStatus);
      } catch (error) {
        console.error("Auth initialization failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  // 초기화가 완료되지 않았으면 로딩 화면 표시
  if (!isInitialized) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loading height={20} />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// AuthProvider 컴포넌트 (Suspense 경계 포함)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loading height={20} />
        </div>
      }
    >
      <AuthManager>{children}</AuthManager>
    </Suspense>
  );
};
