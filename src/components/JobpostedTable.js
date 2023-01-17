import React from 'react'
import { useEffect ,useState} from "react";
export default function JobpostedTable({employer}) {

 const [jobs, setJobs] = useState([])
 useEffect(() => {
  fetch(`employers/${employer.id}/jobs`).then((response) => {
    if (response.ok) {
      response.json().then((data) => setJobs(data));
    }
  });
}, []);


  return (
    <table class="table">
    <thead>
       <tr>
          <th scope="col">#</th>
          <th scope="col">JOB TITLE</th>
          <th scope="col">POSITIONS AVALABLE</th>
          <th scope="col">TOTAL APPLICATIONS</th>
          <th scope="col">TOTAL SAVED</th>
          <th scope="col">JOB CATEGORY</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      {jobs.map((job,index)=>{
            return <>

            <th scope="row">{index + 1}</th>
              <td>{job.jobtitle}</td>
              <td>{job.positionsavailable}</td>
              <td>{job.totalapplications}</td>
              <td>{job.totalsaved}</td>
              <td>{job.category.name}</td>

            </>
          })}

      </tr>

    </tbody>
  </table>
  )
}
