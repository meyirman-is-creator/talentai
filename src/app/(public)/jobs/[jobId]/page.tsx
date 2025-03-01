"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Job.module.scss";
import { jobsMockData } from "@/services/mockData";

import { Box, Paper, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const jobId = Number(params.jobId);

  const job = jobsMockData.find((item) => item.id === jobId);

  const [currentJob, setCurrentJob] = useState(job);

  if (!currentJob) {
    return (
      <Box className={styles.container}>
        <Link href="/jobs" className={styles.backLink}>
          <Button startIcon={<ArrowBackIosNewIcon />}>Back to Jobs List</Button>
        </Link>
        <Typography variant="h6">Job not found</Typography>
      </Box>
    );
  }

  const handleUploadCV = () => {
    router.push("/upload-cv");
  };

  const handleFilter = () => {
    alert("Filter clicked!");
  };

  const handleDeleteCandidate = (candidateId: number) => {
    const updatedCandidates = currentJob.candidates.filter(
      (cand) => cand.id !== candidateId
    );
    setCurrentJob({ ...currentJob, candidates: updatedCandidates });
  };

  return (
    <Box className={styles.container}>
      <Link href="/jobs" className={styles.backLink}>
        <Button startIcon={<ArrowBackIosNewIcon />}>Back to Jobs List</Button>
      </Link>

      <Paper className={styles.jobHeader} elevation={3}>
        <Typography variant="h5" className={styles.jobTitle}>
          {currentJob.title}
        </Typography>
        <Typography variant="body2" className={styles.jobMeta}>
          {currentJob.location} | {currentJob.employmentType} |{" "}
          {currentJob.experienceLevel}
        </Typography>
        <Typography variant="body1" className={styles.jobDescription}>
          {currentJob.description}
        </Typography>
      </Paper>

      <Box className={styles.actions}>
        <Button variant="contained" color="primary" onClick={handleUploadCV}>
          Upload CV
        </Button>
        <Button variant="outlined" onClick={handleFilter}>
          Filter
        </Button>
      </Box>

      <Typography variant="h6" className={styles.candidatesTitle}>
        Candidates List
      </Typography>

      <Paper className={styles.candidatesWrapper} elevation={3}>
        {currentJob.candidates.map((candidate) => (
          <Box key={candidate.id} className={styles.candidateCard}>
            <Box className={styles.candidateInfo}>
              
              <Link
                href={`/jobs/${jobId}/${candidate.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  className={styles.candidateName}
                >
                  {candidate.name}
                </Typography>
                <Typography variant="body2" className={styles.candidateRole}>
                  {candidate.role} | {candidate.matchPercentage}% match
                </Typography>
              </Link>
            </Box>

            <Button
              variant="contained"
              color="error"
              className={styles.deleteBtn}
              onClick={() => handleDeleteCandidate(candidate.id)}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
