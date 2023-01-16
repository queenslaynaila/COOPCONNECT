import React from 'react'

export default function Table({applications}) {

  return (
    <table class="table">
      <thead>
         <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Applied For</th>
            <th scope="col">Application Status</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Job Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          {applications.map((applicants)=>{
            return <>
            <td>{applicants.firstname}</td>
            <td>{applicants.firstname}</td>
            <td>{applicants.firstname}</td>
            <td>{applicants.firstname}</td>
            <td>{applicants.firstname}</td>
            
            </>
          })}

        </tr>

      </tbody>
    </table>
  )
}
