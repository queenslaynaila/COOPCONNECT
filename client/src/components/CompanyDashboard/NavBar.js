import React from "react";
import "../../styles/CompanyDashboard/navbar.css"
function NavBar() {
    
    return (
        <div id="navbar">
         <div className="container">
            <div id='company-name'>COOPCONNECT</div>
                <div id="search-plus-stuff">
                    <form id="search-talent">
                        <input type='text' placeholder='search talent'/>
                    </form>
                    

                    <button className="btn" id="pricing-btn">Pricing</button>
                    <button className="btn" id="talents-btn">Talents</button>
                    <button className="btn" id="lencare-btn">Lencare</button>

                </div>
            </div>
        </div>
    )
}

export default NavBar