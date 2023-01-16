import React from "react";
 import Companycard from "./Companycard";

function CompaniesSaved({seeker}) {
  console.log(seeker)
  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}> COMPANIES SAVED</h2>
    {seeker.appliedcompanies.map(company=> <Companycard company={company} />)}

</div>
  );
}

export default CompaniesSaved;
