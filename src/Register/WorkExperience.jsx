import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const WorkExperienceDetails = ({ data, handleChange, addExperience }) => {
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
        maxWidth: '700px', // Constrain the width of the box
        margin: '0 auto', // Center the box horizontally
        marginTop: '10px',

      }}
    >
      {/* Header for Work Experience Section */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Work Experience Details
      </Typography>

      {/* Work Experience Fields */}
      {data.map((experience, index) => (
        <Box key={index} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Job Title"
            value={experience.job_title}
            onChange={(e) => handleChange(index, 'job_title', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="Company"
            value={experience.company}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="Start Date"
            type="date"
            value={experience.start_date}
            onChange={(e) => handleChange(index, 'start_date', e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="End Date"
            type="date"
            value={experience.end_date}
            onChange={(e) => handleChange(index, 'end_date', e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
       
        </Box>
      ))}

      {/* Button to Add More Work Experience */}
      <Button variant="outlined" onClick={addExperience}>
        Add Work Experience
      </Button>
    </Box>
  );
};

export default WorkExperienceDetails;
