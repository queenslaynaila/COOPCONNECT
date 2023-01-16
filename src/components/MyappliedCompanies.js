import React from 'react'
import Companycard from './Companycard'
export default function MyappliedCompanies({seeker}) {
  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}>COMPANIES APPLIED</h2>
    <p>Here are some companies youve applied for jobs in </p>
    {seeker.appliedcompanies.map(company=> <Companycard company={company} />)}
</div>
  )
}

