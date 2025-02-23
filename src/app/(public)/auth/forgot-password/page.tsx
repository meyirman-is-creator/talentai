"use client";

import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { Box, TextField, Button, Typography, Link, Paper } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.formWrapper} elevation={3}>
        <Box textAlign="center" mb={2}>
          <KeyIcon fontSize="large" className={styles.logo} />
        </Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Forgot Password?
        </Typography>
        <Typography variant="body2" textAlign="center" mb={3}>
          Enter your email address and we'll send you instructions to reset your
          password.
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Send Reset Instructions
          </Button>
          <Box textAlign="center" mt={2}>
            <Link href="/auth/login" underline="hover">
              &larr; Back to Sign In
            </Link>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
