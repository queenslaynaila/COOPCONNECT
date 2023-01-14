import React from 'react'

export default function SurveyTable() {
  return (
    <table class="table">
    <thead>
       <tr>
          <th scope="col">#</th>
          <th scope="col">SurveyTitle</th>
          <th scope="col">Total Partcipation</th>
          <th scope="col">Total Passed</th>
          <th scope="col">Total Failed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>Otto</td>
        <td>@QUEE o</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Otto</td>
      </tr>
    </tbody>
  </table>
  )
}

