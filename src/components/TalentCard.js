import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export default function TalentCard({talent,employer}) {

  let navigate = useNavigate();
  const [skills,setSkills] =useState([])
  const [skillname,setSkillname] = useState([])
  useEffect(()=>{
    fetch(`/seekers/${talent.id}/keyskills`)
    .then((r)=>{
        r.json().then((res)=>{
            setSkills(res)


        })
    })
  },[])

  function postSaved(){
    fetch(`/savedprofiles`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({employer_id:employer.id, seeker_id:talent.id})
    }).then(res => {
      if(res.ok){
          alert("Post was succesfull")
      }
    });}


  return (
 <div class="card mt-3"  >
        <div class="card-body d-flex justify-content-between    " style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>
            <p style={{lineHeight:"5px"}}>{talent.firstname} {talent.secondname}</p>
            <p style={{lineHeight:"5px",color:"darkblue"}} >Location:{talent.city}</p>

          </div>
          <div  >
               <button type="button" class="btn btn-primary" onClick={() => {
                          navigate(`/searchtalents/${talent.id}`);
                        }}>VIEW PROFILE</button>
               </div>
        </div>
        <div class="card-body">
          <div>
                <div ><span className='fw-bold'>Poffession:</span>&nbsp;&nbsp;<span  >{talent.profession}</span>&nbsp;&nbsp;<span className='fw-bold'>Experience:</span>&nbsp;&nbsp;{talent.yearsinprofesion} years&nbsp;&nbsp;<span className='fw-bold'>Proficiency</span>:&nbsp;&nbsp;Junior&nbsp;&nbsp;<span className='fw-bold'>Gender</span>:&nbsp;&nbsp;{talent.gender}</div>
                <div><span className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;
                {skills.map((skill)=>{
                          return <li class="list-inline-item"><i class="bi bi-check"></i>{skill.skillname}</li>
                        })}
                </div>
                <div></div>
          </div>
          <div className='mt-1'>
            <div><span className='fw-bold'>About Me</span>:&nbsp;&nbsp;{talent.about}</div>
          </div>
       </div>
       <div class="card-body   "
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div className="d-flex justify-content-end gap-2">
               <button type="button " class="btn btn-primary" onClick={postSaved}>SAVE PROFILE</button>
               <button type="button" class="btn btn-primary">SEND EMAIL</button>
               </div>
        </div>
        </div>
  )
}

