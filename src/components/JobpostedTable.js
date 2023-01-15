import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function JobpostedTable() {
  const [jobData, setJobData] = useState({});

  useEffect(() => {
    axios.get('/jobs')
      .then(response => {
        setJobData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Job Title</th>
          <th scope="col">Job Category</th>
          <th scope="col">Total Applicants</th>
          <th scope="col">Accepted</th>
          <th scope="col">Rejected</th>
        </tr>
      </thead>
      <tbody>
        {jobData.job_posts ? jobData.job_posts.map((job, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{job.job_title}</td>
            <td>{job.job_category}</td>
            <td>{job.total_applicants}</td>
            <td>{job.accepted}</td>
            <td>{job.rejected}</td>
          </tr>
        )) : null}
      </tbody>
    </table>
  )
}
