import React from 'react'
import ContainerOutline from './reusableComponents/ContainerOutline'
import JobTitle from './reusableComponents/JobTitle'
import "../styles/reusableCss/viewJobs.css"
import AboutCompany from './reusableComponents/AboutCompany'
import JobDescription from './reusableComponents/JobDescription'
function Viewjob() {
  return (
    <ContainerOutline>
      <JobTitle/>
      <JobDescription/>
      <AboutCompany/>
    </ContainerOutline>
  )
}

export default Viewjob
