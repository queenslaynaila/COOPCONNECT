import React from 'react'
import { useEffect ,useState} from "react";
import Internshipssavedcard from "./Internshipssavedcard"
export default function Mysavedinternships({seeker}) {
  const [internships,setInternships] = useState([])
  useEffect(() => {
    fetch(`seekers/${seeker.id}/savedinternships`).then((response) => {
      if (response.ok) {
        response.json().then((saved) => setInternships(saved));
      }
    });
  }, []);
 console.log(internships[0])
  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}>INTERNSHIPS SAVED</h2>
    <p>Internships saved by you</p>
    {internships.map((internship)=><Internshipssavedcard internship={internship}/>)}
</div>
  )
}

