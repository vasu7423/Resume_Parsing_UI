import React from 'react';
import { TextField, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';

const ResumeAndTerms = ({ data, handleChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        padding: 3,
        borderRadius: 2,
        backgroundColor: '#fff', // Light gray background
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        maxWidth: '600px', // Constrain the width of the box
        margin: '0 auto', // Center the box horizontally
      }}
    >
      {/* Header for Resume and Terms */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Resume & Terms
      </Typography>

      {/* Resume Location */}
      <TextField
        label="Resume Location"
        value={data.resumeLocation}
        onChange={(e) => handleChange('resumeLocation', e.target.value)}
        sx={{ flex: '1 1 calc(50% - 16px)' }}
        placeholder="Enter file path to resume"
      />

      {/* Job Applied For */}
      <TextField
        label="Job Applied For"
        value={data.jobAppliedFor}
        onChange={(e) => handleChange('jobAppliedFor', e.target.value)}
        sx={{ flex: '1 1 calc(50% - 16px)' }}
        placeholder="Enter job title"
      />

      {/* Terms and Conditions Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={data.agreedToTerms}
            onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
            color="primary"
          />
        }
        label="I agree to the Terms and Conditions"
        sx={{
          fontSize: '12px',
        }}
      />
    </Box>
  );
};

export default ResumeAndTerms;
