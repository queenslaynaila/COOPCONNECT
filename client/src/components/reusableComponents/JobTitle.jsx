import React from "react";
import Card from "./Card";
import CompanyAvatar from "./CompanyAvatar";

function JobTitle() {
  return (
    <Card>
      <CompanyAvatar />
      <div className="jd-company">
        <h2>Software engnerring</h2>
        <h2>Salary Range:30K-60K</h2>
      </div>
      <hr />
      <div className="posted-at-apply">
        <p>Posted 16 Days Ago</p>
        <button className="btn">Apply</button>
      </div>
    </Card>
  );
}

export default JobTitle;
