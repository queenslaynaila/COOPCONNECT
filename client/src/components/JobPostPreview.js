import React, { useState } from "react";
 
const JobPostPreview = () => {
  const [formData, setFormData] = useState({
    company: "Lencare General Merchants HR",
    salaryRange: "10,000-50,000",
    positionsAvailable: "2",
    location: "Nairobi, Kenya",
    responsibilities: "2 year experience\nMust know JS",
    keySkills: "Teamwork\nCommunication\nPHP",
    experienceInYears: "2 years",
    seniorityLevel: "Expert",
    minEducationalQualifications: "Expert",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your backend or API here
  };

  const handleCancel = () => {
    // Clear the form data and navigate back to the job posts list
  };

  const handleEdit = () => {
    // Enable the form fields for editing
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.removeAttribute("readonly");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Salary Range:
        <input
          type="text"
          name="salaryRange"
          value={formData.salaryRange}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Positions Available:
        <input
          type="number"
          name="positionsAvailable"
          value={formData.positionsAvailable}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Responsibilities:
        <textarea
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Key Skills:
        <textarea
          name="keySkills"
          value={formData.keySkills}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Experience in Years:
        <input
          type="text"
          name="experienceInYears"
          value={formData.experienceInYears}
          onChange={handleChange}
        />
      </label>
      <br />
      Seniority Level:
      <input
        type="text"
        name="seniorityLevel"
        value={formData.seniorityLevel}
        onChange={handleChange}
      />
      <br />
      <label>
        Minimum Educational Qualifications:
        <input
          type="text"
          name="minEducationalQualifications"
          value={formData.minEducationalQualifications}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Save Post</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
    </form>
  );
};

export default JobPostPreview;
