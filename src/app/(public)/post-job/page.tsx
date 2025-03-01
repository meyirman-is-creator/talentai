"use client";

import React from "react";
import styles from "./PostJob.module.scss";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

export default function PostJobPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Логика отправки формы
  };

  return (
    <div className={styles.container}>
      <Typography variant="body2" className={styles.backLink}>
        &larr; Back to Dashboard
      </Typography>

      <Typography variant="h5" className={styles.title}>
        Post a New Job
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <TextField
          label="Job Title"
          placeholder="e.g. Frontend Developer"
          fullWidth
          required
        />

        <TextField select label="Department" fullWidth required>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
        </TextField>

        <TextField
          label="Location"
          placeholder="e.g. New York, NY (Remote Available)"
          fullWidth
        />

        <TextField select label="Employment type" fullWidth>
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
        </TextField>

        <TextField select label="Experience Level" fullWidth>
          <MenuItem value="Junior">Junior</MenuItem>
          <MenuItem value="Mid">Mid</MenuItem>
          <MenuItem value="Senior">Senior</MenuItem>
        </TextField>

        <TextField
          label="Job Description"
          multiline
          rows={4}
          placeholder="Enter the full job description..."
          fullWidth
        />

        <TextField
          label="Requirements"
          multiline
          rows={3}
          placeholder="Enter the key requirements..."
          fullWidth
        />

        <Box className={styles.buttons}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Post Job
          </Button>
        </Box>
      </Box>
    </div>
  );
}
