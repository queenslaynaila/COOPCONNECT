import React from 'react'
import Companycard from './Companycard';
import { useEffect ,useState} from "react";
export default function MyappliedCompanies({seeker}) {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
      fetch(`seekers/${seeker.id}/employers`).then((response) => {
        if (response.ok) {
          response.json().then((data) => setEmployers(data));
        }
      });
    }, []);
    
  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}>COMPANIES APPLIED</h2>
    <p>Here are some companies youve applied for jobs in </p>
    {employers.map((employer)=><Companycard employer={employer}/>)}
</div>
  )
}

