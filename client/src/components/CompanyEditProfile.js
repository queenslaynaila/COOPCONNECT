import React, { useState } from "react";
import "../CompanyEditProfile.css";
function CompanyEditProfile() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    dateOfEstablishment: "",
    websiteURL: "",
    company: "", // Additional field for company
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
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

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h3>Organizational Information</h3>
      <br />
      <label>
        Organization Name:
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Organization Type:
        <input
          type="text"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of Establishment:
        <input
          type="date"
          name="dateOfEstablishment"
          value={formData.dateOfEstablishment}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Website URL:
        <input
          type="url"
          name="websiteURL"
          value={formData.websiteURL}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Company Description:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <br />
      <h3>Personal Information</h3>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Designation:
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default CompanyEditProfile;
