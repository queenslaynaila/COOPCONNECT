import { useState, useEffect } from "react";
import NavBar from "./components/CompanyDashboard/NavBar";
import DashBoardBody from "./components/CompanyDashboard/DashBoardBody";
import Footer from "./components/CompanyDashboard/Footer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <DashBoardBody />
      <Footer/>
    </div>
  );
}

export default App;
