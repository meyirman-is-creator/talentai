"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
type User = {
  name: string;
  email: string;
};
type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (u: User) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
  const value: AuthContextType = {
    user,
    isLoggedIn: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  return useContext(AuthContext);
}
