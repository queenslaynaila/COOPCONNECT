import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/cv.css'
export default function Viewaseeker({seeker}) {
    let navigate = useNavigate();

      let me="https://media.geeksforgeeks.org/wp-content/uploads/20220202083519/gfglogo.png"
  return (
    <div class=" container  mt-4 mb-4 cv">
     <div id="page-wrap">

    <img src={me} alt="Photo of Cthulu" id="pic" />

    <div id="contact-info" class="vcard">



        <h1 class="fn">{`${seeker.firstname} ${seeker.secondname}`}</h1>

        <p>
            Cell:  {seeker.phone ? <><span class="tel">{seeker.phone}</span><br /></>:<><span class="tel">Update phone number</span></>}
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">{seeker.email}</a>
        </p>
    </div>

    <div id="objective">
         {seeker.about ? <p>{seeker.about}</p> : <p>Update account details in the profile section</p>}

    </div>

    <div class="clear"></div>

    <dl>
        <dd class="clear"></dd>

        <dt>Education</dt>
{seeker.educations.map((ed)=>{
  return (<dd>
    <h2>{ed.certificatename}<span> </span></h2>
            <h2>{ed.institution}</h2>
            <p><strong>Startdate:</strong>{ed.startdate}<br />
               <strong>Enddate:</strong> {ed.enddate}</p>
        </dd>)

})}
<dd class="clear"></dd>


<dt>Experiences</dt>
{seeker.experiences.map((ed)=>{
  return (<dd>
            <h2>{ed.jobtitle}</h2>
            <p>{ed.description}<br />
               <strong>Start:</strong>{ed.startdate}<br></br>
               <strong>End:</strong>{ed.enddate}</p>
        </dd>)

})}

<dd class="clear"></dd>
<dt>keyskills</dt>
{seeker.keyskills.map((ed)=>{
  return (<dd>
            <h2>{ed.skillname}</h2>
            <p> Public Relations<br />
               <strong>Description:</strong>Im good at public speaking</p>
        </dd>)

})}
<dd class="clear"></dd>

            <dt>References</dt>
            <dd>Available on request</dd>

            <dd class="clear"></dd>





        <dd class="clear"></dd>
    </dl>

    <div class="clear"></div>

</div>
    </div>

  )
}
