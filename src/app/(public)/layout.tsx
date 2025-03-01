"use client";
import React from "react";
import { Header } from "@/components/header/Header";
import { Asidebar } from "@/components/asidebar/Asidebar";
import styles from "./layout.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.authLayout}>
      <Header />
      <div className={styles.contentWrapper}>
        <Asidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}
