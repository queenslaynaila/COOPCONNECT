import React from 'react'

export default function Table() {
  return (
    <table class="table">
    <thead>
      <tr>
          <th scope="col">#</th>
          <th scope="col">FIRST NAME</th>
          <th scope="col">SECONDNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">PROFILE</th>
          <th scope="col">Job Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >Larry the Bird</td>
        <td>@twitter</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
  )
}
