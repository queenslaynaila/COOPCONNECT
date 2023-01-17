import React from 'react'
import { useEffect ,useState} from "react";
import { useNavigate } from 'react-router';
export default function Jobapplications({seeker}) {
    const [jobs,setJobs] = useState([])
    let navigate = useNavigate()

 useEffect(() => {
  fetch(`seekers/${seeker.id}/appliedjobs`).then((response) => {
    if (response.ok) {
      response.json().then((user) => setJobs(user));
    }
  });
}, []);
 

  return (
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">JOB TITLE</th>
        <th scope="col">POSITION APPLIED</th>
        <th scope="col">COMPANY POSTED</th>
        <th scope="col">APPLICATION STATUS</th>
        <th scope="col">DATE APPLIED</th>
      </tr>
    </thead>
    <tbody>
    {jobs.map((job,index)=>{
            return (<tr>
            <th scope="row">{index + 1}</th>
              <td>{job.job.jobtitle}</td>
              <td>{job.job.senioritylevel}</td>
               <td>{job.employer.name}</td>
               <td>{job.status}</td>
              <td>{job.dateapplied}</td>


            </tr>)
          })}
    </tbody>

  </table>
  )
}

