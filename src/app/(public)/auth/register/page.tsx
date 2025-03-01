"use client";

import React, { useState } from "react";
import styles from "./Register.module.scss";
import { Box, TextField, Button, Typography, Link, Paper } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/authService"; 

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await registerUser({
        username: fullName,
        email: email,
        password: password,
        password2: confirmPassword,
      });

      if (response.status === 201) {
        router.push("/auth/login");
      } else if (response.status === 302) {
        window.location.href = response.data.redirect;
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        setErrorMessage(error.response.data?.errors?.description || "Validation error.");
      } else {
        setErrorMessage(error.response?.data || error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.formWrapper} elevation={3}>
        <Box textAlign="center" mb={2}>
          <PersonAddIcon fontSize="large" className={styles.logo} />
        </Box>
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
          Create an Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          {errorMessage && (
            <Typography color="error" textAlign="center" mb={2}>
              {errorMessage}
            </Typography>
          )}

          <TextField
            label="Full Name"
            variant="outlined"
            required
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            required
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
            Create an Account
          </Button>

          <Typography variant="body2" textAlign="center" mt={2}>
            Already have an Account?{" "}
            <Link href="/auth/login" underline="hover">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}
