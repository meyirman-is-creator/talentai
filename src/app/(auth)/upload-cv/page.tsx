"use client";

import React, { useState } from "react";
import styles from "./UploadCV.module.scss";
import { Box, Typography, Button } from "@mui/material";

export default function UploadCVPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <Typography variant="body2" className={styles.backLink}>
        &larr; Back to Dashboard
      </Typography>

      <Typography variant="h5" className={styles.title}>
        Upload CVs
      </Typography>

      <Box
        className={styles.dropArea}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Typography variant="body1" className={styles.instructions}>
          Drag and Drop your CV here
        </Typography>
        <Typography variant="body1" className={styles.orText}>
          or
        </Typography>
        <Button variant="contained" component="label">
          Browse files
          <input type="file" accept=".pdf" hidden onChange={handleBrowse} />
        </Button>
        <Typography variant="caption" className={styles.supportText}>
          Only PDF files are supported
        </Typography>
      </Box>

      {file && (
        <Typography variant="body2" className={styles.fileName}>
          Selected file: {file.name}
        </Typography>
      )}
    </div>
  );
}
