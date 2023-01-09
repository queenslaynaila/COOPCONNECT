import React from "react";
import "../../styles/RecentApplications.css"
function RecentApplications() {

  //to confirm if forms or tables same as recent survey

    return (
      <div id="recent-applications">
        <p>Recent Applications</p>
        <form>
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="applied-for" placeholder="Applied-For" />
          <input type="text" id="category" placeholder="Category" />
          <input type="text" id="date-applied" placeholder="Date Applied" />
          <input type="text" id="application-status" placeholder="Application Status" />
        </form>
      </div>
    );

    
}
export default RecentApplications