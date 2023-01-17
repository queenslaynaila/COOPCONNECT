import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/seeker.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from "react-bootstrap";
import Personaldetails from "./Personaldetails";
import AddDeleteTableRows from "./add-delete-table-rows/AddDeleteTableRows";
 import AddDeleteWorkRows from "./add-delete-work-expe/AddDeleteWork";
 import AddDeleteSkills from "./add-delete-skills/AddDeleteSkills";
export default function Seekerprofile({seeker}) {
  console.log(seeker)
  let navigate = useNavigate();
  return (
  <Container className="mt-4 mb-4 " >
     <Tabs
    defaultActiveKey="profile"
    id="fill-tab-example"
    className="mb-4"
    justified
  >
    <Tab eventKey="personal-details" title="PERSONAL DETAILS">
      <Personaldetails seeker={seeker}></Personaldetails>
    </Tab>
    <Tab eventKey="education" title="EDUCATION">
       <AddDeleteTableRows seeker={seeker}></AddDeleteTableRows>
    </Tab>
    <Tab eventKey="work-experiences" title="WORK EXPERIENCES">
     <AddDeleteWorkRows seeker={seeker}></AddDeleteWorkRows>
    </Tab>
    <Tab eventKey="key-skills" title="KEY SKILLS"  >
      <AddDeleteSkills seeker={seeker}></AddDeleteSkills>
    </Tab>
  </Tabs>
  </Container>




  )
}
