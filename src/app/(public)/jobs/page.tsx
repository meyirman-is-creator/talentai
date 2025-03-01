"use client"; // если используете хуки router, обязательно "use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Jobs.module.scss";
import { jobsMockData } from "@/services/mockData";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

export default function JobsPage() {
  const router = useRouter();

  const handleDeleteJob = (jobId: number) => {
    console.log(`Delete job with id = ${jobId}`);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Link href="/dashboard" className={styles.backLink}>
          &larr; Back to Dashboard
        </Link>
        <Button
          variant="contained"
          color="primary"
          className={styles.postJobBtn}
          onClick={() => router.push("/auth/dashboard/post-job")}
        >
          + Post Job
        </Button>
      </Box>

      <Typography variant="h5" className={styles.title}>
        Total Jobs List
      </Typography>

      {jobsMockData.map((job) => (
        <Card key={job.id} className={styles.jobCard}>
          <CardContent
            className={styles.jobInfo}
            onClick={() => router.push(`/jobs/${job.id}`)}
          >
            <Typography variant="h6" component="h3">
              {job.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.candidates.length} candidates | Posted 2 days ago
            </Typography>
          </CardContent>

          <CardActions className={styles.jobActions}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push("/upload-cv")}
            >
              Upload CV
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteJob(job.id)}
            >
              Delete Job
            </Button>

            <Button variant="outlined" onClick={() => alert("Reports clicked")}>
              Reports
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
