import React from 'react';
import { TextField, MenuItem, Box, Typography } from '@mui/material';

const PersonalDetails = ({ data, handleChange }) => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 3,
      borderRadius: 2,
      backgroundColor: 'rgb(255, 255, 255)', // Light gray background
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
      Width: '1200px', // Increased width of the box
      margin: '0 auto', // Center the box horizontally
      marginTop: '10px',
    }}
  >
      {/* Header for Personal Details */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 2,
          color: '#333', // Dark color for the header
        }}
      >
        Personal Details
      </Typography>

      {/* First Row: First Name and Last Name */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="First Name"
          value={data.first_name}
          onChange={(e) => handleChange('first_name', e.target.value)}
          sx={{
            flex: '1 1 calc(80% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
        <TextField
          label="Last Name"
          value={data.last_name}
          onChange={(e) => handleChange('last_name', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
      </Box>

      {/* Second Row: Email and Phone Number */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
        <TextField
          label="Phone Number"
          value={data.phone_number}
          onChange={(e) => handleChange('phone_number', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
      </Box>

      {/* Third Row: Date of Birth and Gender */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="Date of Birth"
          type="date"
          value={data.date_of_birth}
          onChange={(e) => handleChange('date_of_birth', e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
        <TextField
          label="Gender"
          select
          value={data.gender}
          onChange={(e) => handleChange('gender', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        >
          <MenuItem value="MALE">Male</MenuItem>
          <MenuItem value="FEMALE">Female</MenuItem>
          <MenuItem value="OTHER">Other</MenuItem>
        </TextField>
      </Box>

      {/* Fourth Row: Address and City */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="Address"
          value={data.address}
          onChange={(e) => handleChange('address', e.target.value)}
          sx={{
            flex: '1 1 calc(80% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
        <TextField
          label="City"
          value={data.city}
          onChange={(e) => handleChange('city', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
      </Box>

      {/* Fifth Row: State and Country */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="State"
          value={data.state}
          onChange={(e) => handleChange('state', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
        <TextField
          label="Country"
          value={data.country}
          onChange={(e) => handleChange('country', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
      </Box>

      {/* Sixth Row: Zip Code and Skills */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="Zip Code"
          value={data.zip_code}
          onChange={(e) => handleChange('zip_code', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
        <TextField
          label="Skills"
          value={data.skills}
          onChange={(e) => handleChange('skills', e.target.value)}
          sx={{
            flex: '1 1 calc(50% - 16px)',
            fontSize: '12px', // Decreased font size
          }}
          inputProps={{
            style: {
              fontSize: '12px', // Adjust text inside to a smaller font
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PersonalDetails;
