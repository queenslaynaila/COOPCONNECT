import React from 'react';
import Profile from "./Profile"
import Summary from './Summary';
import RecentApplications from './RecentApplications';
import RecentSurvey from './RecentSurvey';
import "../../styles/CompanyDashboard/dashboardBody.css"



function DashBoardBody() {
    return (
        <div id='dashboard-body' className='container'>  
            <h1>Dashboard</h1>
            
            <Profile />
            <Summary />
            <RecentApplications />
            <RecentSurvey/>
        </div>
    )


}
export default DashBoardBody