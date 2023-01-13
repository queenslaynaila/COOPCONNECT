import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";

function CompanyProfile() {
  return (
    <Card>
      <div className="company-avatar-icon">
        <Avatar />
        <div className="company-title-name company-profile">
          <h1>NewOrg</h1>
          <h1>Founded On: 12/3/2020</h1>
          <h1>Joined On: 1/8/2023</h1>
        </div>
      </div>
      <hr />
        <div className="company-details">
            <h2>7 Jobs</h2>
            <h2>2 Surveys</h2>
            <h2>0 Internships</h2>
        </div>
    </Card>
  );
}

export default CompanyProfile;
