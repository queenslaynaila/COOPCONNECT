import React from 'react'
import { useEffect ,useState} from "react";
import Internshipappliedcard from './Internshipappliedcard';
export default function Myinternships({seeker}) {
  const [internships,setInternships] = useState([])
  useEffect(() => {
    fetch(`seekers/${seeker.id}/savedinternships`).then((response) => {
      if (response.ok) {
        response.json().then((internshipssaved) => setInternships(internshipssaved));
      }
    });
  }, []);
  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}>INTERNSHIPS APPLIED</h2>
    <p>Here are some jobs youve applied to</p>
    {internships.map(internship=> <Internshipappliedcard key={internship.id} internship={internship}/>)}
</div>
  )
}

