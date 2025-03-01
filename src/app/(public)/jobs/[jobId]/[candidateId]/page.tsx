"use client";

import React from "react";
import Link from "next/link";
import { jobsMockData } from "@/services/mockData";
import styles from "./Candidate.module.scss";

import { Box, Paper, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface PageProps {
  params: {
    jobId: string;
    candidateId: string;
  };
}

export default function CandidateDetailPage({ params }: PageProps) {
  const jobId = Number(params.jobId);
  const candidateId = Number(params.candidateId);

  const job = jobsMockData.find((item) => item.id === jobId);
  if (!job) {
    return (
      <Box className={styles.container}>
        <Link href="/jobs" className={styles.backLink}>
          <Button startIcon={<ArrowBackIosNewIcon />}>Back to Jobs List</Button>
        </Link>
        <Typography variant="h6">Job not found</Typography>
      </Box>
    );
  }

  const candidate = job.candidates.find((cand) => cand.id === candidateId);
  if (!candidate) {
    return (
      <Box className={styles.container}>
        <Link href={`/jobs/${jobId}`} className={styles.backLink}>
          <Button startIcon={<ArrowBackIosNewIcon />}>
            Back to Candidates
          </Button>
        </Link>
        <Typography variant="h6">Candidate not found</Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.topActions}>
        <Link href={`/jobs/${jobId}`} className={styles.backLink}>
          <Button startIcon={<ArrowBackIosNewIcon />}>
            Back to Candidates
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          className={styles.resumeBtn}
        >
          Candidate&apos;s Resume
        </Button>
      </Box>

      <Paper className={styles.candidateHeader} elevation={3}>
        <Typography variant="h5" className={styles.candidateName}>
          {candidate.name}
        </Typography>
      </Paper>

      <Paper className={styles.infoSection} elevation={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Candidate role
        </Typography>
        <Box className={styles.infoBox}>
          <Typography variant="body1">{candidate.role}</Typography>
        </Box>
      </Paper>

      <Paper className={styles.infoSection} elevation={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Parsed Resume
        </Typography>
        <Box className={styles.largeBox}>
          <Typography variant="body1">
            {candidate.resumeContent || "Resume content will appear here..."}
          </Typography>
        </Box>
      </Paper>

      <Paper className={styles.infoSection} elevation={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          AI Generated Comment
        </Typography>
        <Box className={styles.largeBox}>
          <Typography variant="body1">
            {candidate.aiComment ||
              "AI analysis and comments will appear here..."}
          </Typography>
        </Box>
      </Paper>

      <Paper className={styles.infoSection} elevation={3}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Generated Interview Questions
        </Typography>
        <Box className={styles.largeBox}>
          <Typography variant="body1">
            {candidate.interviewQuestions ||
              "Suggested Interview questions will appear here..."}
          </Typography>
        </Box>
      </Paper>

      <Box className={styles.approveSection}>
        <Button
          variant="contained"
          color="success"
          className={styles.approveBtn}
        >
          Approve
        </Button>
      </Box>
    </Box>
  );
}
