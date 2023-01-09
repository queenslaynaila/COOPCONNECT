import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login"
import SignCompanies from "./components/SignCompanies"
import SignUpJobSeekers from "./components/SignUpJobSeekers"
import DashBoardBody from "./components/CompanyDashboard/DashBoardBody";
import Errorpage from "./components/404page";
import SeekerDashboard from "./components/SeekerDashboard";
import Seekerprofile from "./components/Seekerprofile";
import Jobsearch from "./components/Jobsearch";
import Assesement from "./components/Assesement";
import Viewjob from "./components/Viewjob";
import ViewCompany from "./components/ViewCompany";
function App() {


  return (
<>

 <Navbar/>

  
    <Routes>

      <Route exact path="/" element={<Home></Home>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signupcompanies" element={<SignCompanies/>}/>
      <Route path="/signuptalents" element={<SignUpJobSeekers/>}/>
      <Route path="/talentdashboard" element={<SeekerDashboard/>}/>
      <Route path="/seekerprofile" element={<Seekerprofile/>}/>
      <Route path="/searchjob" element={<Jobsearch></Jobsearch>}/>
      <Route path="/asesement" element={<Assesement></Assesement>}/>
      <Route path="/employerdash" element={<DashBoardBody></DashBoardBody>}/>
      <Route path="/viewjob" element={<Viewjob/>}/>
      <Route path="/viewcompany" element={<ViewCompany />}/>

      <Route path="*" element={<Errorpage></Errorpage>}/>

    </Routes>
    

  <Footer/>
</>
  );
}

export default App;
