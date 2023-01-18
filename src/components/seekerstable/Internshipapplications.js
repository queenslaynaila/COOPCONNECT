import React from 'react'
import { useEffect ,useState} from "react";
import { useNavigate } from 'react-router';
export default function Internshipapplications({seeker}) {

    const [internships,setInternships] = useState([])
    useEffect(() => {
        fetch(`seekers/${seeker.id}/appliedinternships`).then((response) => {
          if (response.ok) {
            response.json().then((internshipssaved) => setInternships(internshipssaved));
          }
        });
      }, []);



  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">POSITION</th>
      <th scope="col">STATUS</th>
      <th scope="col">COMPANY POSTED</th>
      <th scope="col">DATE APPLIED</th>
    </tr>
  </thead>
  <tbody>
  {internships.map((internship,index)=>{
                return (
                  (<tr>

<th scope="row">{index + 1}</th>
  <td>{internship.internship.positiontitle}</td>
  <td>applied</td>
  <td>{internship.employer.name}</td>
  <td>{internship.created_at}</td>

</tr>))
         })
        }

  </tbody>
</table>
  )
}

