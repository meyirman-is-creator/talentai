import React, { ReactNode } from "react";
import "./globals.scss"; // если нужно
import styles from "./layout.module.scss"; // ваш layout-стили
import { AuthProvider } from "@/contexts/AuthContext";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.authBody}>
        <AuthProvider>
          <div className={styles.contentWrapper}>
            <main className={styles.mainContent}>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
