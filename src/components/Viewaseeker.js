import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Viewaseeker({seeker}) {
    let navigate = useNavigate();
    console.log(seeker.profession
      )
  return (
    <div class="container ">
         <div class=" mt-5 mb-5">
          {seeker ? <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard</p>
          : <p  className="dash" onClick={() => {navigate("/searchtalents")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard</p> }


             <div >
                <div className='card'>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                            <h4 style={{ color: "darkblue" }} className='fw-bold'>{seeker.firstname} {seeker.secondname}</h4>
                            <p style={{ color: "gray" }} className='fw-bold'>{seeker.profession}  &middot;{seeker.yearsinprofesion}years </p>
                            <p>{seeker.city},{seeker.country}</p>
                      </li>

                      <li class="list-group-item">
                            <h4 style={{ color: "darkblue" }} className='fw-bold'>Contact</h4>
                            <p  className='fw-bold'>{seeker.email}</p>
                            <p>{seeker.phone}</p>
                      </li>

                      <li class="list-group-item">
                            <h4 style={{ color: "darkblue" }} className='fw-bold'>About</h4>
                            <p  >{seeker.about}</p>
                      </li>
                      <li className='list-group-item'>
                        <h5 style={{ color: "darkblue" }} className='fw-bold'>Key Skills</h5>
                        <ul class="list-inline">
                        {seeker.keyskills.map((skill)=>{
                          return <li class="list-inline-item"><i class="bi bi-check"></i>{skill}</li>
                        })}
                        </ul>
                      </li>
                      <li class="list-group-item">
                            <h4 style={{ color: "darkblue" }} >Education</h4>
                            {seeker.educations.map((education)=>{
                          return (<>
                            <p><span className='fw-bold'>Cerificate name</span>:{education.certificatename}</p>
                            <p><span className='fw-bold'>Institution</span>:{education.institution}</p>

                          </>
                          )
                        })}
                      </li>
                      <li class="list-group-item">
                      <h4 style={{ color: "darkblue" }}>Work Experience</h4>
                      {seeker.experiences.map((experience)=>{
                          return <>
                          <h6 className='fw-bold'>Job Title</h6>
                          <p className='fw-bold'>{experience.jobtitle}</p>

                            <h6 className='fw-bold'>Job Description</h6>
                            <p>{experience.description}</p>
                            <p className='fw-bold'>Start Year:{experience.startdate}</p>
                            <p className='fw-bold'>End Year:{experience.enddate}</p>
                          </>
                        })}

                      </li>
                  </ul>


                </div>
             </div>
         </div>

    </div>
  )
}
