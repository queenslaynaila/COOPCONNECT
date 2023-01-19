import React from 'react'
import { useState} from "react";
export default function SurveyTable({employer}) {
  const [internships,setInternships] = useState(employer.internships)
  console.log(internships[1])
  return (
    <table class="table">
    <thead>
       <tr>
          <th scope="col">#</th>
          <th scope="col"> JOB TITLE</th>
          <th scope="col">POSITIONS AVAILABLE</th>
          <th scope="col">SAVED</th>
          <th scope="col">TOTAL APPLICANTS</th>
      </tr>
    </thead>
    <tbody>
    {internships.map((job,index)=>{
            return (<tr>

            <th scope="row">{index + 1}</th>
              <td>{job.positiontitle}</td>
              <td>{job.positionsvailable
}</td>
              <td>{job.totalapplications}</td>
              <td>{job.saved}</td>


            </tr>)
          })}
    </tbody>
  </table>
  )
}

