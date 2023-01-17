import React from 'react'

export default function JobpostedTable({jobs}) {

  
  return (
    <table class="table">
    <thead>
       <tr>
          <th scope="col">#</th>
          <th scope="col">Job Title</th>
          <th scope="col">Positions available</th>
          <th scope="col">Total Applicants</th>
          <th scope="col">Acepted</th>
          <th scope="col">Rejected</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      {jobs.map((job,index)=>{
            return <>

            <th scope="row">{index + 1}</th>
              <td>{job.jobtitle}</td>
              <td>{job.positionsavailable}</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>

            </>
          })}

      </tr>

    </tbody>
  </table>
  )
}
