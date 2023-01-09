import React from "react";
import '../../styles/CompanyDashboard/profile.css'

function Profile() {
    

    return (
    <div id="profile" className="container">

      <div id="profile-content">
                <div className="profile-info">
                <div>
         </div>            
          <img
            className="profile-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlL5FOU8xopXZ_gCoWAzrqwr_odPOKoA5Rvw&usqp=CAU"
            alt="profile-pic"
          />
        </div>

                <div>
                    <p className="company-name">Lencare Merchants</p>
                    <p className="company-email">lencaremerchants@gmail.com</p>
                    <p className="company-since">
                    Member Since  
                        <span className="start-date"> 2022-05-22</span>
                    </p>
                    <button className="btn">View Profile</button>
                </div>        



        <div className="buttons">
          <button className="btn"> Post jobs</button>
          <button className="btn"> Post Survey</button>
          <button className="btn"> View Survey</button>
        </div>
      </div>
    </div>

    )

}
export default Profile 