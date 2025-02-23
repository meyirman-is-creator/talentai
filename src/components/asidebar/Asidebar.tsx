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
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";

export function Asidebar() {
  return (
    <aside className={styles.aside}>
      <List component="nav">
        <ListItemButton href="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton href="/jobs">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItemButton>
        <ListItemButton href="/candidates">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Candidates" />
        </ListItemButton>
        <ListItemButton href="/reports">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
    </aside>
  );
}
