import React from "react";
import "../../styles/RecentSurvey.css"
 
function RecentSurvey() {
       return (
         <div id="recent-survey">
           <p>Recent Survey</p>
           <form>
             <input type="text" id="name" placeholder="Name" />
             <input type="text" id="survey" placeholder="Survey" />
             <input type="text" id="application-status" placeholder="Application Status" />
    
             <input
               type="text"
               id="application-status"
               placeholder="Application Status"
             />
           </form>
         </div>
       );


}

export default RecentSurvey