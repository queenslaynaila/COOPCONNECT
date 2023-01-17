import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function Seekerprofilecard({profile}) {
  const [skills,setSkills] =useState([])
  const [skillname,setSkillname] = useState([])
  useEffect(()=>{
    fetch(`/seekers/${profile.seeker.id}/keyskills`)
    .then((r)=>{
        r.json().then((res)=>{
            setSkills(res)


        })
    })
  },[])

    let navigate=useNavigate()
  return (
    <div class="card mt-3"  >
        <div class="card-body d-flex justify-content-between    " style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>
            <p style={{lineHeight:"5px"}}>{profile.seeker.firstname}{profile.seeker.secondname} </p>
            <p style={{lineHeight:"5px",color:"darkblue"}} >Location: {profile.seeker.city},{profile.seeker.country} </p>

          </div>
          <div  >
               <button type="button" class="btn btn-primary" >VIEW PROFILE</button>
               </div>
        </div>
        <div class="card-body">
          <div>
                <div ><span className='fw-bold'>Poffession:</span>&nbsp;&nbsp;<span  >talent.profession</span>&nbsp;&nbsp;<span className='fw-bold'>Experience:</span>&nbsp;&nbsp;talent.yearsinprofesion years&nbsp;&nbsp;<span className='fw-bold'>Proficiency</span>:&nbsp;&nbsp;Junior</div>
                <div><span className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;
                {skills.map((skill)=>{
                          return <li class="list-inline-item"><i class="bi bi-check"></i>{skill.skillname}</li>
                        })}
                </div>
                <div></div>
          </div>
          <div className='mt-1'>
            <div><span className='fw-bold'>About Me</span>:&nbsp;&nbsp;talent.about</div>
          </div>
       </div>
       <div class="card-body   "
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div className="d-flex justify-content-end gap-2">
               <button type="button " class="btn btn-primary">SAVE PROFILE</button>
               <button type="button" class="btn btn-primary">SEND EMAIL</button>
               </div>
        </div>
        </div>
  )
}

