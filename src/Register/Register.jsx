import React, { useState } from 'react';
import { Button, Typography, Stepper, Step, StepLabel, TextField, Checkbox, FormControlLabel, Box } from '@mui/material';
import axios from 'axios'; // Import axios
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import WorkExperience from './WorkExperience';

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    personalDetails: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      date_of_birth: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zip_code: '',
      skills: ''
    },
    education: [{ degree: '', institution: '', field_of_study: '', start_year: '', end_year: '' }],
    workExperience: [{ job_title: '', company: '', start_date: '', end_date: '' }],
    resumeLocation: '',
    jobAppliedFor: '',
    agreedToTerms: false
  });

  const steps = ['Personal Details', 'Education', 'Work Experience', 'Resume & Terms'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const updatePersonalDetails = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      personalDetails: {
        ...prevValues.personalDetails,
        [field]: value
      }
    }));
  };

  const updateEducationDetails = (index, field, value) => {
    const updatedEducation = [...formValues.education];
    updatedEducation[index][field] = value;
    setFormValues((prevValues) => ({ ...prevValues, education: updatedEducation }));
  };

  const addEducation = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      education: [
        ...prevValues.education,
        { degree: '', institution: '', field_of_study: '', start_year: '', end_year: '' }
      ]
    }));
  };

  const updateWorkExperience = (index, field, value) => {
    const updatedWorkExperience = [...formValues.workExperience];
    updatedWorkExperience[index][field] = value;
    setFormValues((prevValues) => ({ ...prevValues, workExperience: updatedWorkExperience }));
  };

  const addWorkExperience = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      workExperience: [
        ...prevValues.workExperience,
        { job_title: '', company: '', start_date: '', end_date: '' }
      ]
    }));
  };

  const updateResumeLocation = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      resumeLocation: e.target.value
    }));
  };

  const updateJobAppliedFor = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      jobAppliedFor: e.target.value
    }));
  };

  const handleTermsChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      agreedToTerms: e.target.checked
    }));
  };

  const handleSubmit = async () => {
    // Create a formData object based on the form values
    const formData = {
      firstName: formValues.personalDetails.first_name,
      lastName: formValues.personalDetails.last_name,
      email: formValues.personalDetails.email,
      phoneNumber: formValues.personalDetails.phone_number,
      dateOfBirth: formValues.personalDetails.date_of_birth,
      gender: formValues.personalDetails.gender,
      address: formValues.personalDetails.address,
      city: formValues.personalDetails.city,
      state: formValues.personalDetails.state,
      country: formValues.personalDetails.country,
      zipCode: formValues.personalDetails.zip_code,
      skills: formValues.personalDetails.skills.split(','), // Assuming skills is a comma-separated string
      workExperience: formValues.workExperience.map(exp => ({
        jobTitle: exp.job_title,
        company: exp.company,
        startDate: exp.start_date,
        endDate: exp.end_date
      })),
      education: formValues.education.map(edu => ({
        degree: edu.degree,
        institution: edu.institution,
        fieldOfStudy: edu.field_of_study,
        startYear: edu.start_year,
        endYear: edu.end_year
      })),
      resumeLocation: formValues.resumeLocation,
      jobAppliedFor: formValues.jobAppliedFor
    };
  
    // Validation to ensure all required fields are present
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth',
      'gender', 'address', 'city', 'state', 'country', 'zipCode', 'skills',
      'workExperience', 'education', 'resumeLocation', 'jobAppliedFor'
    ];
  
    for (let field of requiredFields) {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }
  
    console.log('Form data:', formData); // Log the final formData object before sending
  
    try {
      const response = await axios.post('http://localhost:8081/createCandidate', formData);
      if (response.status === 200) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };
  
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Register Form
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <PersonalDetails data={formValues.personalDetails} handleChange={updatePersonalDetails} />
      )}
      {activeStep === 1 && (
        <EducationDetails
          data={formValues.education}
          handleChange={updateEducationDetails}
          addEducation={addEducation}
        />
      )}
      {activeStep === 2 && (
        <WorkExperience
          data={formValues.workExperience}
          handleChange={updateWorkExperience}
          addExperience={addWorkExperience}
        />
      )}
      {activeStep === 3 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            padding: 3,
            borderRadius: 2,
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {/* Header for Resume and Terms */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Resume & Terms
          </Typography>

          {/* Resume Location */}
          <TextField
            label="Resume Location"
            value={formValues.resumeLocation}
            onChange={updateResumeLocation}
            fullWidth
          />

          {/* Job Applied For */}
          <TextField
            label="Job Applied For"
            value={formValues.jobAppliedFor}
            onChange={updateJobAppliedFor}
            fullWidth
          />

          {/* Terms and Conditions Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.agreedToTerms}
                onChange={handleTermsChange}
                color="primary"
              />
            }
            label="I agree to the Terms and Conditions"
          />
        </Box>
      )}

      <div style={{ marginTop: 20 }}>
        {activeStep > 0 && (
          <Button onClick={handleBack} style={{ marginRight: 10 }}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
