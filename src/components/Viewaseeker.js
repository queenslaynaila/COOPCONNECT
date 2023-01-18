import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/cv.css'
export default function Viewaseeker({seeker}) {
     const [user,setUser] = useState(seeker)

    let navigate = useNavigate();
    useEffect(()=>{
      fetch(`seekers/${seeker.id}`)
	.then(response => response.json())
	.then(data =>  setUser(data))
	.catch(err => console.error(err));
    },[])

      let me="https://media.geeksforgeeks.org/wp-content/uploads/20220202083519/gfglogo.png"
  return (
    <div class=" container  mt-4 mb-4 cv">
     <div id="page-wrap">

    <img src={me} alt="Photo of Cthulu" id="pic" />

    <div id="contact-info" class="vcard">



        <h1 class="fn">{`${user.firstname} ${user.secondname}`}</h1>

        <p>
            Cell:  {user.phone ? <><span class="tel">{user.phone}</span><br /></>:<><span class="tel">Update phone number</span></>}
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">{user.email}</a>
        </p>
    </div>

    <div id="objective">
         {user.about ? <p>{user.about}</p> : <p>Update account details in the profile section</p>}

    </div>

    <div class="clear"></div>

    <dl>
        <dd class="clear"></dd>

        <dt>Education</dt>
{user.educations.map((ed)=>{
  return (<dd>
    <h2>{ed.certificatename}<span> </span></h2>
            <h2>{ed.institution}</h2>
            <p><strong>Startdate:</strong>{ed.startdate}<br />
               <strong>Enddate:</strong> {ed.enddate}</p>
        </dd>)

})}
<dd class="clear"></dd>


<dt>Experiences</dt>
{user.experiences.map((ed)=>{
  return (<dd>
            <h2>{ed.jobtitle}</h2>
            <p>{ed.description}<br />
               <strong>Start:</strong>{ed.startdate}<br></br>
               <strong>End:</strong>{ed.enddate}</p>
        </dd>)

})}

<dd class="clear"></dd>
<dt>keyskills</dt>
{user.keyskills.map((ed)=>{
  return (<dd>
            <h2>{ed.skillname}</h2>
            <p> 
               <strong>Description:</strong>{ed.skilldescription}</p>
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
