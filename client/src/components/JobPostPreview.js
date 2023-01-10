import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { JobDetailContainer, JobTitle, JobInfo } from './JobPostPreview.css'

const JobPostPreview = ({ match }) => {
  const job = useSelector(state => state.jobs.find(job => job.id === match.params.id))

  // Define state variables for handling button clicks
  const [isEditing, setIsEditing] = useState(false);

  if (!job) {
    return <div>Loading...</div>
  }

  const handleEditClick = () => {
    setIsEditing(true);
    // Add the code for handling the Edit button click here
  }

  const handleSaveClick = () => {
    setIsEditing(false);
    // Add the code for handling the Save button click here
  }

  const handleCancelClick = () => {
    setIsEditing(false);
    // Add the code for handling the Cancel button click here
  }

  return (
    <div className={JobDetailContainer}>
      <h2 className={JobTitle}>{job.jobtitle}</h2>
      <p className={JobInfo}>Responsibilities: {job.responsibilities}</p>
      <p className={JobInfo}>Key Skills: {job.keyskills}</p>
      <p className={JobInfo}>Experience in years: {job.experienceinyears}</p>
      <p className={JobInfo}>Seniority Level: {job.senioritylevel}</p>
      <p className={JobInfo}>Minimum Educational Qualification: {job.minimaleducationalqualigications}</p>
      
      {!isEditing && 
        <button onClick={handleEditClick}>Edit Post</button>
      }
      {isEditing && 
        <>
        <button onClick={handleSaveClick}>Save Post</button>
        <button onClick={handleCancelClick}>Cancel</button>
        </>
      }
    </div>
  )
}

export default JobPostPreview;
