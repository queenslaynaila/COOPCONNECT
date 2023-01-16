import React from 'react'


function ViewCompany() {
  return (
    <div className="container mt-4 mb-4">
      <h4 style={{ color: "darkblue" }}>Company Public Profile</h4>
      <div class="card shadow-sm mt-3">
        <div class="card-body">
          <div className="d-flex flex-row" style={{ gap: "15px" }}>
            <div
              style={{
                backgroundColor: "darkblue",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                textAlign: "center",
                color: "white",
                lineHeight: "150px",
                fontSize: "2rem",
              }}
              class="circle-singleline mr-auto "
            >
              TS
            </div>
            <div>
              <p>New Org</p>
              <p className="fw-bold" style={{ color: "darkblue" }}>
                Software Company
              </p>
              <p> Joined 01-01-2023 </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card shadow-sm mt-3"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div class="card-body">
          <div className="d-flex flex-row" style={{ gap: "15px" }}>
            <div>
              <button>nnnnnnn</button>
            </div>
            <div>
              <button>nnnnnnn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCompany;
