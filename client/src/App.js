import { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom"

import { Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login"
import SignCompanies from "./components/SignCompanies"
import SignUpJobSeekers from "./components/SignUpJobSeekers"
import DashBoardBody from "./components/DashBoardBody";
import Errorpage from "./components/404page";
import SeekerDashboard from "./components/SeekerDashboard";
import Seekerprofile from "./components/Seekerprofile";
import Jobsearch from "./components/Jobsearch";
import Assesement from "./components/Assesement";
import Jobcard from "./components/Jobcard";
import Viewjob from "./components/Viewjob";
import ViewCompany from "./components/ViewCompany";
import CompanyEditProfile from "./components/CompanyEditProfile";
import JobPostPreview from "./components/JobPostPreview";
import SearchTalent from "./components/SearchTalents";
import  Pricing from "./components/pricing";
import PostAJob from "./components/PostAJob";
import Viewaseeker from "./components/Viewaseeker";

function App() {
    let navigate = useNavigate()
       const [employer , setEmployer] = useState(null)
       const [seeker,setSeeker] = useState(null)


  return (
<>

 <Navbar seeker={seeker} employer={employer} setSeeker={setSeeker} setEmployer={setEmployer} />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login onLoginEmployer={setEmployer} onLoginSeeker={setSeeker}/>}/>
      <Route path="/signupcompanies" element={<SignCompanies/>}/>
      <Route path="/signuptalents" element={<SignUpJobSeekers/>}/>
      <Route path="/talentdashboard" element={<SeekerDashboard seeker={seeker} />}/>
      <Route path="/seekerprofile" element={<Seekerprofile  seeker={seeker} />}/>
      <Route path="/searchjob" element={<Jobsearch/>}/>
      <Route path="/asesement" element={<Assesement/>}/>
      <Route path="/employerdash" element={<DashBoardBody employer={employer} />}/>
      <Route path="/viewjob" element={<Viewjob/>}/>
      <Route path="/viewcompany" element={<ViewCompany employer={employer} />}/>
      <Route path="/companyeditprofile" element={<CompanyEditProfile employer={employer}/>}/>
      <Route path="/searchtalents" element={<SearchTalent/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/previewjob" element={<JobPostPreview/>}/>
      <Route path="/postajob" element={<PostAJob/>}/>
      <Route path="/viewaseeker" element={<Viewaseeker seeker={seeker} />}/>
      <Route path="*" element={<Errorpage></Errorpage>}/>



    </Routes>


  <Footer/>
</>
  );
}

export default App;
