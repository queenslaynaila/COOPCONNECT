import React from "react";
 import Companyappcard from "./Companyappcard";
 import { useEffect ,useState} from "react";
function CompaniesSaved({seeker}) {

  const [employers, setEmployers] = useState([])
  useEffect(() => {
    fetch(`seekers/${seeker.id}/savedcompanies`).then((response) => {
      if (response.ok) {
        response.json().then((data) => setEmployers(data));
      }
    });
  }, []);
     console.log(employers)
  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}> COMPANIES SAVED</h2>

     {employers.map((employer)=><Companyappcard employer={employer}/>)} 
</div>
  );
}

export default CompaniesSaved;
