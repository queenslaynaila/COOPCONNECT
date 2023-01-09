import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login"
import SignCompanies from "./components/SignCompanies"
import SignUpJobSeekers from "./components/SignUpJobSeekers"
import DashBoardBody from "./components/CompanyDashboard/DashBoardBody";
function App() {


  return (
<>
 <Navbar></Navbar>

    <Routes>
      <Route exact path="/" element={<Home></Home>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signupcompanies" element={<SignCompanies/>}/>
      <Route path="/signuptalents" element={<SignUpJobSeekers/>}/>
      <Route path="/talentdashboard" element={<DashBoardBody></DashBoardBody>}></Route>
    </Routes>

  <Footer></Footer>
</>
  );
}

export default App;
