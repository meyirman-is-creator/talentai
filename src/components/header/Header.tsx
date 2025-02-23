"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Box
} from "@mui/material";
// Предполагаем, что вы используете контекст авторизации
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const { user, logout, isLoggedIn } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseMenu();
  };

  return (
    <AppBar position="static" elevation={0} className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.brandSection}>
          <Avatar className={styles.brandAvatar} />
          <Typography variant="h6" className={styles.logo}>
            Talent AI
          </Typography>
        </Box>

        {isLoggedIn ? (
          <div className={styles.userSection}>
            <Typography variant="body1">{user?.name || "Jon Snow"}</Typography>
            <IconButton onClick={handleOpenMenu}>
              <Avatar className={styles.userAvatar} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem disabled>
                <strong>{user?.name || "Jon Snow"}</strong>
                <br />
                {user?.email || "jonsnow@example.com"}
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
              <MenuItem onClick={handleLogout} className={styles.logoutItem}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Typography variant="body2">
            {/* Если пользователь не залогинен, например, кнопка Login */}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}
