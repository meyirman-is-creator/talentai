"use client";

import React from "react";
import styles from "./Asidebar.module.scss";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { usePathname, useRouter } from "next/navigation";

export function Asidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Массив пунктов меню
  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "Jobs", icon: <WorkIcon />, path: "/jobs" },
    { label: "Reports", icon: <AssessmentIcon />, path: "/reports" },
  ];

  return (
    <aside className={styles.aside}>
      <List component="nav">
        {menuItems.map((item) => {
          const isActive = pathname?.includes(item.path);

          return (
            <ListItemButton
              key={item.path}
              onClick={() => router.push(item.path)}
              className={isActive ? styles.activeLink : ""}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </aside>
  );
}
