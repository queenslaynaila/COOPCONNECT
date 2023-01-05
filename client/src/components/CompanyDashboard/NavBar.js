import React, { useState } from "react";

import "../../styles/CompanyDashboard/navbar.css";
function NavBar() {
     const [showNavbarOptions, setShowNavbarOptions] = useState(false)
     const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth < 700 ? true : false
  );

  window.addEventListener("resize", (e) => {
    setIsSmallScreen((isSmallScreen) => {
      return window.innerWidth < 700 ? true : false;
    });
  });

  function handleDisplayOptions() {
    setShowNavbarOptions((showNavbarOptions) => !showNavbarOptions);
    console.log(showNavbarOptions)
  }


    
  return (
    <div id="navbar">
      <div className="container">
        <div id="company-name">COOPCONNECT</div>
        <div id="search-plus-stuff">
          <form id="search-talent">
            <input type="text" placeholder="search talent" />
          </form>

          <button
            className={isSmallScreen ? "display-none" : "btn"} id="pricing-btn-1">
            Pricing
          </button>
          <button
            className={isSmallScreen ? "display-none" : "btn"} id="talents-btn-1">
            Talents
          </button>
          <button
            className={isSmallScreen ? "display-none" : "btn"} id="lencare-btn-1">
            Lencare
          </button>
          <div
            id="options"
            className={isSmallScreen ? "" : "display-none"} onClick={handleDisplayOptions}>
            <div id="lines"></div>
          </div>

          <div
            id="navbar-options"
           className={isSmallScreen && showNavbarOptions? "": "display-none"}
            >
            <button id="pricing-btn-2">Pricing</button>
            <button id="talents-btn-2">Talents</button>
            <button id="lencare-btn-2">Lencare</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
