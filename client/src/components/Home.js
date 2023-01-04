import React from 'react'
import home from '../assets/home2.png'
import '../styles/home.css'
import marketing from "../assets/marketing.png"
import design from "../assets/design.png"
import customer from "../assets/customer.png"
import care from "../assets/care.png"
import analytics from "../assets/analytics.png"
import search from "../assets/search.png"

export default function Home() {

  return (
<>
    <div className='container-fluid home bg-image '  >
    <div class="container p-4 pb-0">

            <div class="row">
            <div class="col-sm-7 pt-5 mt-5 pb-5">
              <h1  className='find-text'>Find the perfect<br></br>job that you deserve</h1>

              <p className='text mt-2'>Find jobs,Employment and Career Opportunities</p>
              <div className='search mt-5'>
                <input type="text" placeholder='job title,keywords or company'></input>
                <i className='bi bi-search'></i>
              </div>
              <p className='mt-2 popular'><bold>Popular Searches:</bold>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Designer ,Developer,Web,IOS,PHP,Senior,Engineer</p>
            </div>
            <div class="col-sm-5 pt-5 mt-5 pb-5 mb-3">
            <img src={home} height="auto" width="400px" alt="Grandma"/>
            </div>
            </div><br/>

        </div>

    </div>
    <div  style={{borderColor:"grey"}} className='border-bottom  border-1  '>
    <div class="container p-4 pb-0  ">
    <h1>Some Job Categories</h1>
    <p style={{color:"grey"}}>Browse through various job categories</p>
    <div className="row mt-5 ms-sm-0 ms-5">
                <div className="col-sm-auto mb-2">
                    <div className="card  p-2" style={{width: "12rem", alignItems: "center"}}>
                        <img src={marketing} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Marketing</h5>
                            <small style={{color:"grey"}}>(86 open positions)</small>

                        </div>
                    </div>
                </div>
                <div className="col-sm-auto mb-2">
                    <div className="card  p-2" style={{width: "12rem", height:"13rem", alignItems: "center"}}>
                        <img src={design} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Design</h5>
                            <small style={{color:"grey"}}>(86 open positions)</small>

                        </div>
                    </div>
                </div>
                <div className="col-sm-auto mb-2">
                    <div className="card  p-2" style={{width: "12rem", height:"13rem", alignItems: "center"}}>
                        <img src={customer} height="100px" width="100px" alt="Grandma"/>

                        <div className="card-body">
                            <h5 className="card-title">Customer Service</h5>
                            <small style={{color:"grey"}}>(86 open positions)</small>

                        </div>
                    </div>
                </div>
                <div className="col-sm-auto mb-2">
                    <div className="card  p-2" style={{width: "12rem", height:"13rem", alignItems: "center"}}>
                        <img src={care} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Care Jobs</h5>
                            <small style={{color:"grey"}}>(86 open positions)</small>

                        </div>
                    </div>
                </div>
                <div className="col-sm-auto mb-2">
                    <div className="card  p-2" style={{width: "12rem", height:"13rem", alignItems: "center"}}>
                        <img src={analytics} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Analytics</h5>
                            <small style={{color:"grey"}}>(86 open positions)</small>

                        </div>
                    </div>
                </div>

    </div>
    <div class="d-flex justify-content-around mt-5 ms-sm-0 ms-5 ">
        <div>
        <i class="bi bi-binoculars" style={{fontSize:"2rem"}}></i>
        <p>Search for jobs</p>
        </div>
        <div>
        <i class="bi bi-building"  style={{fontSize:"2rem"}}></i>
        <p>Build a good resume</p>
        </div>
        <div>
        <i class="bi bi-check-square"  style={{fontSize:"2rem"}}></i>
        <p>Perform during your interview</p>
        </div>
    </div>
    </div>
    </div>

</>
  )
}
