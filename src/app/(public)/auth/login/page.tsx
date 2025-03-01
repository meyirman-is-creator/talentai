"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Box, TextField, Button, Typography, Link, Paper } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./Login.module.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    if (result && !result.error) {
      router.push("/dashboard");
    } else {
      alert("Ошибка: неправильный логин/пароль");
    }
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.formWrapper} elevation={3}>
        <Box textAlign="center" mb={2}>
          <LoginIcon fontSize="large" className={styles.logo} />
        </Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Welcome
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box display="flex" justifyContent="flex-end" mt={1} mb={2}>
            <Link href="/auth/forgot-password" underline="hover">
              Forgot password?
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Sign in
          </Button>

          <Typography variant="body2" textAlign="center" mt={2}>
            Don’t have an account?{" "}
            <Link href="/auth/register" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}
