import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './CandidateRegistration.css'; // Import the custom CSS
import { Button } from '@mui/material'; // Make sure to import MUI Button
import { AddCircle } from '@mui/icons-material'; // Import AddCircle icon

const CandidateRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        skills: '',
        workExperience: [{ jobTitle: '', company: '', startDate: '', endDate: '' }],
        education: [{ degree: '', institution: '', fieldOfStudy: '', startYear: '', endYear: '' }],
        resumeLocation: '',
        jobAppliedFor: '',
        applicationStatus: 'Applied',
        applicationDate: new Date().toISOString(),
        registrationDate: new Date().toISOString(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayChange = (e, index, field) => {
        const { name, value } = e.target;
        const updatedArray = [...formData[field]];
        updatedArray[index][name] = value;
        setFormData((prev) => ({
            ...prev,
            [field]: updatedArray,
        }));
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted successfully', formData);
    };

    // Add new education entry
    const addEducation = () => {
        setFormData((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                { degree: '', institution: '', fieldOfStudy: '', startYear: '', endYear: '' },
            ],
        }));
    };

    // Remove education entry
    const removeEducation = (index) => {
        const updatedEducation = formData.education.filter((_, i) => i !== index);
        setFormData((prev) => ({
            ...prev,
            education: updatedEducation,
        }));
    };

    // Add new work experience entry
    const addWorkExperience = () => {
        setFormData((prev) => ({
            ...prev,
            workExperience: [
                ...prev.workExperience,
                { jobTitle: '', company: '', startDate: '', endDate: '' },
            ],
        }));
    };

    // Remove work experience entry
    const removeWorkExperience = (index) => {
        const updatedWorkExperience = formData.workExperience.filter((_, i) => i !== index);
        setFormData((prev) => ({
            ...prev,
            workExperience: updatedWorkExperience,
        }));
    };
    return (
        <div className="container">
            <div className="multi-step-form">
                {currentStep === 1 && (
                    <div className="card custom-card mx-auto">
                        <h2 className="mb-3">Personal Details</h2>
                        <div className="form-group row">
                            <div className="col-md-6">
                            <label htmlFor="lastName">First Name</label>

                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder='Date of Birth'
                                />
                            </div>
                            <div className="col-md-6">
    <div className="form-group">
        <label>Select Gender : &nbsp; </label>
        <div className="form-check form-check-inline">
            <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="form-check-input"
            />
            <label htmlFor="male" className="form-check-label">
                Male
            </label>
        </div>
        <div className="form-check form-check-inline">
            <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">
                Female
            </label>
        </div>&nbsp;&nbsp;
        <div className="form-check form-check-inline">
            <input
                type="radio"
                id="other"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
                className="form-check-input"
            />
            <label htmlFor="other" className="form-check-label">
                Other
            </label>
        </div>
    </div>
</div>



                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="City"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="State"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Country"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Zip Code"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    placeholder="Skills"
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary custom-btn next-btn" onClick={nextStep}>Next</button>
                    </div>
                )}
  {currentStep === 2 && (
                    <div className="card custom-card mx-auto">
                        <h2 className="mb-3">Education</h2>
                        {formData.education.map((edu, index) => (
                            <div key={index} className="form-group mb-3">
                                <p>Education #{index + 1}</p> {/* Label for added education */}
                                <input
                                    type="text"
                                    name="degree"
                                    value={edu.degree}
                                    onChange={(e) => handleArrayChange(e, index, 'education')}
                                    className="form-control mb-4"
                                    placeholder="Degree"
                                />
                                <input
                                    type="text"
                                    name="institution"
                                    value={edu.institution}
                                    onChange={(e) => handleArrayChange(e, index, 'education')}
                                    className="form-control mb-4"
                                    placeholder="Institution"
                                />
                                <input
                                    type="text"
                                    name="fieldOfStudy"
                                    value={edu.fieldOfStudy}
                                    onChange={(e) => handleArrayChange(e, index, 'education')}
                                    className="form-control mb-4"
                                    placeholder="Field of Study"
                                />
                                <input
                                    type="number"
                                    name="startYear"
                                    value={edu.startYear}
                                    onChange={(e) => handleArrayChange(e, index, 'education')}
                                    className="form-control mb-4"
                                    placeholder="Start Year"
                                />
                                <input
                                    type="number"
                                    name="endYear"
                                    value={edu.endYear}
                                    onChange={(e) => handleArrayChange(e, index, 'education')}
                                    className="form-control mb-4"
                                    placeholder="End Year"
                                />
                                {index > 0 && (
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => removeEducation(index)}
                                        style={{ marginTop: 10 }}
                                    >
                                        Remove Education
                                    </Button>
                                )}
                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={addEducation}
        style={{
            marginTop: 10,
            width: '80%', // You can adjust this to a specific width if needed
        }}
    >
        Add Education
    </Button>
</div>
                        <div className="btn-2">
                            <button className="btn btn-secondary custom-btn prev-btn" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="btn btn-primary custom-btn next-btn" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="card custom-card mx-auto">
                        <h2 className="mb-2">Work Experience</h2>
                        {formData.workExperience.map((work, index) => (
                            <div key={index} className="form-group mb-3">
                                <p>Work Experience #{index + 1}</p> {/* Label for added work experience */}
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={work.jobTitle}
                                    onChange={(e) => handleArrayChange(e, index, 'workExperience')}
                                    className="form-control mb-4"
                                    placeholder="Job Title"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    value={work.company}
                                    onChange={(e) => handleArrayChange(e, index, 'workExperience')}
                                    className="form-control mb-4"
                                    placeholder="Company"
                                />
                                <input
                                    type="date"
                                    name="startDate"
                                    value={work.startDate}
                                    onChange={(e) => handleArrayChange(e, index, 'workExperience')}
                                    className="form-control mb-4"
                                />
                                <input
                                    type="date"
                                    name="endDate"
                                    value={work.endDate}
                                    onChange={(e) => handleArrayChange(e, index, 'workExperience')}
                                    className="form-control mb-4"
                                />
                                {index > 0 && (
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => removeWorkExperience(index)}
                                        style={{ marginTop: 10 }}
                                    >
                                        Remove Work Experience
                                    </Button>
                                )}
                            </div>
                        ))}
                       <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={addWorkExperience}
        style={{
            marginTop: 10,
            width: '80%', // Adjust if necessary (e.g., use width: '200px' for a fixed width)
        }}
    >
        Add Work Experience
    </Button>
</div>

                        <div className="btn-2">
                            <button className="btn btn-secondary custom-btn prev-btn" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="btn btn-success custom-btn next-btn" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CandidateRegistration;