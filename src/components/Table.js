import React from 'react'
import { useEffect ,useState} from "react";
export default function Table({employer}) {


  const [seekers, setSeekers] = useState([])
  useEffect(() => {
   fetch(`employers/${employer.id}/seekersapplied`).then((response) => {
     if (response.ok) {
       response.json().then((data) => setSeekers(data));
     }
   });
 }, []);



  return (
    <table class="table">
      <thead>
         <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Applied For</th>
            <th scope="col">Application Status</th>
            <th scope="col">Date Applied</th>
            {/* <th scope="col">Job Category</th> */}
            <th scope="col">Contact Details</th>
        </tr>
      </thead>
      <tbody>
        {seekers.map((seeker,index)=>{
                return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{seeker.seeker.firstname} {seeker.seeker.secondname}</td>
                  <td>{seeker.job.jobtitle}</td>
                  <td>{seeker.status}</td>
                  <td>{seeker.dateapplied}</td>
                  {/* <td>5</td> */}
                  <td>{seeker.seeker.email}</td>
                </tr>)
         })
        }
      </tbody>
    </table>
  )
}
