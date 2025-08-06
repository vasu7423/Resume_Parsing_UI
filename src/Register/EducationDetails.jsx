import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const EducationDetails = ({ data, handleChange, addEducation }) => {
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
      {/* Header for Education Section */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Education Details
      </Typography>

      {/* Education Fields */}
      {data.map((education, index) => (
        <Box key={index} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Degree"
            value={education.degree}
            onChange={(e) => handleChange(index, 'degree', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="Institution"
            value={education.institution}
            onChange={(e) => handleChange(index, 'institution', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="Field of Study"
            value={education.field_of_study}
            onChange={(e) => handleChange(index, 'field_of_study', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="Start Year"
            type="number"
            value={education.start_year}
            onChange={(e) => handleChange(index, 'start_year', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
          <TextField
            label="End Year"
            type="number"
            value={education.end_year}
            onChange={(e) => handleChange(index, 'end_year', e.target.value)}
            sx={{ flex: '1 1 calc(50% - 16px)' }}
          />
        </Box>
      ))}

      {/* Button to Add More Education */}
      <Button variant="outlined" onClick={addEducation}>
        Add Education
      </Button>
    </Box>
  );
};

export default EducationDetails;
