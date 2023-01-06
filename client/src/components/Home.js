import React from 'react'
import home from '../assets/home2.png'
import '../styles/home.css'
import marketing from "../assets/marketing.png"
import design from "../assets/design.png"
import customer from "../assets/customer.png"
import care from "../assets/care.png"
import analytics from "../assets/analytics.png"
import browse from "../assets/browse.png"

export default function Home() {
  return (
<>
  <section>
    <div class="hero vh-80  " id="home">
            <div className='container p-4 pb-0'>
                <div class="row">
                        <div class="col mt-5">
                            <h1  className='find-text'>Find the perfect<br></br>job that you deserve</h1>
                            <p className='text mt-2'>Find jobs,Employment and Career Opportunities</p>

                            <button  style={{backgroundColor:"#21286A",color:"white"}} type="button" class="btn btn-lg me-1">Find talents</button>
                            <button type="button" class="btn btn-primary btn-lg me-1">Find Jobs</button>
                        </div>
                        <div class="col">
                        <img src={home}   alt="Grandma"/>
                        </div>
                </div>
            </div>
     </div>
  </section>
  <section>
    <div  style={{borderColor:"grey"}} className='border-bottom  border-1'>
      <div class="container p-4 pb-0 ">
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
                  <div className="card  p-2" style={{width: "12rem", alignItems: "center"}}>
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
                  <div className="card  p-2" style={{width: "12rem", alignItems: "center"}}>
                      <img src={care} height="100px" width="100px" alt="Grandma"/>
                      <div className="card-body">
                         <h5 className="card-title">Care Jobs</h5>
                          <small style={{color:"grey"}}>(86 open positions)</small>
                      </div>
                    </div>
               </div>
               <div className="col-sm-auto mb-2">
                  <div className="card  p-2" style={{width: "12rem", alignItems: "center"}}>
                      <img src={analytics} height="100px" width="100px" alt="Grandma"/>
                      <div className="card-body">
                         <h5 className="card-title">Analytics</h5>
                          <small style={{color:"grey"}}>(86 open positions)</small>
                      </div>
                    </div>
               </div>
          </div>
          <div class="d-flex justify-content-around mt-5 ms-sm-0 ms-5" style={{textAlign:"center"}}  >
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
  </section>
  <section className='browse '>
      <div className='container p-4 pb-0'>
          <div className='row'>
              <div className='col-lg-6 '>
                  <h1>Browse Hundred of Jobs</h1>
                  <p>To start searching for jobs you can attend job sfairs online or in person, use job boards, particopate in company surveys or reac out to recruiters to broaden network</p>
                  <p><i class="bi bi-check2" style={{fontSize:"1rem"}}></i> Bring to the table win-win survival</p>
                  <p> <i class="bi bi-check2" style={{fontSize:"1rem"}}></i>Capitalize on low hanging fruit to identify</p>
                  <p> <i class="bi bi-check2" style={{fontSize:"1rem"}}></i>Get the right job suited for you</p>
                  <button type="button" class="btn btn-primary btn-lg">Get started</button>
               </div>
               <div className='col-lg-6'>
                 <img src={browse} width="600px" ></img>
               </div>
         </div>
     </div>
  </section>
  <section className='find'>
       <div className='container'>
          <div className='row'>
             <div className='col-lg-6'>
                <img src={marketing} width="600px" ></img>
              </div>
              <div  className='col-lg-6'>
                <h1>Find Your Match</h1>
                <p>An efficienr resume should promote your abilities and include measurable accomplishments that rae relevant to te job you apply for.You should also prepare a cover letter that is concise and elaborates on how you can put your skills to use in the organzation.Participate in company resumes to find the ideal company for you.Create an account as a job seeker and update your resume</p>
                <button type="button" class="btn btn-secondary btn-lg">Disover More</button>
              </div>
            </div>
      </div>
  </section>
  <section className='apply'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
             <h1>Apply Directly</h1>
              <p>Apply to all jobs that interest you in various category.You can search up jobs within a pecific category and add more filter checks as you desire.Praticpating in surveys held by a specidic company gives you an edge whn applying for a job there</p>
              <button type="button" class="btn btn-primary btn-lg">Get started</button>
          </div>
          <div className='col-lg-6'>
            <img src={marketing} width="600px" ></img>
          </div>
        </div>
    </div>
  </section>
</>
  )
}
