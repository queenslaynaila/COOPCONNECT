import React from 'react'

export default function Settings() {
    return (
        <>
            <div>   
            <aside>    
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 style={{ color: "darkblue" }} className="text-center">
                Account
              </h5>
              <p className="text-center">password</p>
              <p className="text-center">changepassword</p>
              <p
                // onClick={() => {
                //   navigate("/companyeditprofile");
                // }}
                className="text-center"
              >
               <button type="button" class="btn btn-primary">change password</button>
              </p>
            </div>
            </div>
                </div>
                </aside>
                </div>
            
             <div className='container'>
      <div class="card shadow-sm mt-3">
        <div class="card-body">
          <div  style={{ gap: "15px" }}>
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
              QN
            </div>
            <div>
              <p>Queenslay Jema</p>
              <p className="fw-bold" style={{ color: "darkblue" }}>
                queenslayjema@gmail.com
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
              <button type="button" class="btn btn-info">Edit Profile</button>
            </div>
            <div>
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
  )
}

