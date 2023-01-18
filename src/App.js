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
import JobApplied from './components/JobsApplied';
import JobsSaved from './components/JobsSaved';
import CompaniesSaved from './components/CompaniesSaved';
import Myinternships from './components/Myinternships';
import Mysavedinternships from './components/Mysavedinternships';
import MyappliedCompanies from './components/MyappliedCompanies';
import Searchemployer from './components/Searchemployer';
 import Mypostedjobs from './components/employermoreoptions/Mypostedjobs';
import Offers from './components/employermoreoptions/Offers'
import Savedprofiles from './components/employermoreoptions/Savedprofiles'
import Applicationsreceived from './components/employermoreoptions/Applicationsreceived'
import Viewseeker from './components/employermoreoptions/Viewseeker';
function App() {
  let navigate = useNavigate()
       const [employer , setEmployer] = useState(null)
       const [seeker,setSeeker] = useState(null)
       const [user,setUser] = useState(null)
      const [jobs,setJobs] = useState(null)
      const [employers,setEmployers] = useState(null)
     const [seekers,setSeekers] = useState(null)

console.log(seekers)

  return (
<>

 <Navbar seeker={seeker} employer={employer} setSeeker={setSeeker} setEmployer={setEmployer} />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login onLoginEmployer={setEmployer} onLoginSeeker={setSeeker}/>}/>
      <Route path = "/savedprofiles" element={<Savedprofiles employer={employer}/>}/>
      <Route path ="/app" element={<Applicationsreceived employer={employer}/>} />
      <Route path="/jobsposted" element={<Mypostedjobs employer={employer}></Mypostedjobs>}/>
      <Route path="/offersmade" element={Offers} />
      <Route path="/signupcompanies" element={<SignCompanies onSignUpEmployer={setEmployer}/>}/>
      <Route path="/signuptalents" element={<SignUpJobSeekers onSignUpSeeker={setSeeker}/>}/>

      <Route path="/seekerprofile" element={<Seekerprofile  seeker={seeker} />}/>
      <Route path="/searchjob" element={<Jobsearch onFetchJobs={setJobs} seeker={seeker}/>}/>
      <Route path="/searchjob/:id" element={<Viewjob jobs={jobs} seeker={seeker}/>}/>
      <Route path='searchemployer' element={<Searchemployer onEmployerFetch={setEmployers}/>} />
      <Route path="/searchemployer/:id" element={<ViewCompany employers={employers} />}/>
      <Route path="/asesement" element={<Assesement/>}/>
      <Route path="/employerdash" element={<DashBoardBody employer={employer} />}/>
      <Route path="/talentdashboard" element={<SeekerDashboard seeker={seeker} />}/>

      <Route path="/companyeditprofile" element={<CompanyEditProfile employer={employer}/>}/>
      <Route path="/searchtalents" element={<SearchTalent
      onSeekersFetch={setSeekers} employer={employer}/>}/>
      <Route path ="/searchtalents/:id" element={<Viewseeker seekers={seekers}/>}  />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/previewjob" element={<JobPostPreview/>}/>
      <Route path="/postajob" element={<PostAJob employer={employer}/>}/>
      <Route path="/viewaseeker" element={<Viewaseeker seeker={seeker} employer={employer} />}/>

      <Route path='/jobsapplied' element={<JobApplied seeker={seeker}/>}/>
      <Route path="/jobssaved" element = {<JobsSaved seeker={seeker}></JobsSaved>}/>
      <Route path="/companiessaved" element={<CompaniesSaved seeker={seeker}/>}/>
      <Route path="/myappliedinternships" element={<Myinternships seeker={seeker}/>} />
      <Route path="/mysavedinternships" element={<Mysavedinternships seeker={seeker}/>} />
      <Route path="/myappliedcompanies" element={<MyappliedCompanies seeker={seeker}/>} />
      <Route path="*" element={<Errorpage></Errorpage>}/>
    </Routes>


  <Footer/>
</>
  );
}

export default App;
