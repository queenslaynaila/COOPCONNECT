import React from 'react'
import { useEffect ,useState} from "react";
export default function JobpostedTable({employer}) {

  const [jobs,setJobs] = useState(employer.jobs)
console.log(jobs[0])



  return (
    <table class="table">
    <thead>
       <tr>
          <th scope="col">#</th>
          <th scope="col">JOB TITLE</th>
          <th scope="col">POSITIONS AVALABLE</th>
          <th scope="col">TOTAL APPLICATIONS</th>
          <th scope="col">TOTAL SAVED</th>
          <th scope="col">DATE POSTED</th>
      </tr>
    </thead>
    <tbody>
{jobs.map((job,index)=>{
            return (<tr>

            <th scope="row">{index + 1}</th>
              <td>{job.jobtitle}</td>
              <td>{job.positionsavailable}</td>
              <td>{job.totalapplications}</td>
              <td>{job.totalsaved}</td>
              <td>{job.dateposted}</td>

            </tr>)
          })}



    </tbody>
  </table>
  )
}
