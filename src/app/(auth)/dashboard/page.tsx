"use client";

import React from "react";
import styles from "./Dashboard.module.scss";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handlePostJob = () => {
    router.push("/post-job");
  };

  const handleUploadCV = () => {
    router.push("/upload-cv");
  };

  return (
    <div className={styles.container}>
      <Box className={styles.statsSection}>
        <Paper className={styles.statCard}>
          <Typography variant="h6" className={styles.cardTitle}>
            Active Jobs
          </Typography>
          <Typography variant="h4" className={styles.cardNumber}>
            24
          </Typography>
          <Typography variant="body2" className={styles.cardPercent}>
            12% this month
          </Typography>
        </Paper>
        <Paper className={styles.statCard}>
          <Typography variant="h6" className={styles.cardTitle}>
            Total Candidates
          </Typography>
          <Typography variant="h4" className={styles.cardNumber}>
            156
          </Typography>
          <Typography variant="body2" className={styles.cardPercent}>
            8% this month
          </Typography>
        </Paper>
      </Box>

      <Box className={styles.actions}>
        <Button variant="contained" color="primary" onClick={handlePostJob}>
          Post Job
        </Button>
        <Button variant="outlined" color="primary" onClick={handleUploadCV}>
          Upload CVs
        </Button>
      </Box>

      <Box className={styles.listsSection}>
        <Paper className={styles.listCard}>
          <Typography variant="h6" className={styles.listTitle}>
            Recent Jobs
          </Typography>
          <Box className={styles.listItem}>
            <Typography variant="subtitle1">
              Senior Frontend Developer
            </Typography>
            <Typography variant="body2">
              8 candidates | Posted 2 days ago
            </Typography>
          </Box>
        </Paper>

        <Paper className={styles.listCard}>
          <Typography variant="h6" className={styles.listTitle}>
            Recent Applications
          </Typography>
          <Box className={styles.listItem}>
            <Typography variant="subtitle1">Sarah Johnson</Typography>
            <Typography variant="body2">
              Frontend Developer | 92% match
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
