import React ,{useState,useEffect}from 'react'
import { useNavigate  } from "react-router-dom";
import Jobpostedcard from './Jobpostedcard';
export default function Mypostedjobs({employer}) {
    let navigate = useNavigate()
    const [jobs,setJobs] = useState([])
    useEffect(() => {
        fetch(`employers/${employer.id}/jobs`).then((response) => {
          if (response.ok) {
            response.json().then((jobssaved) => setJobs(jobssaved));
          }
        });
      }, []);
  return (
    <div class="container">
     <h3 className='mt-4' style={{color:"darkblue"}}>Here are Jobs you posted</h3>
    <div class="row  mb-5">
          <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
          </p>
          <aside class="col-md-3">
          <div class="card">

              <article class="filter-group">
                  <header class="card-header">
                          <h6 class="title">Salary range </h6>
                  </header>
                  <div class="filter-content collapse show" id="collapse_3"  >
                      <div class="card-body">
                          <div class="form-row">
                          <div class="form-group col-md-6">
                          <label>Min</label>
                          <input  class="form-control" placeholder="0" type="number"></input>
                          </div>
                          <div class="form-group text-right col-md-6">
                          <label>Max</label>
                          <input class="form-control"    placeholder="1,0000" type="number"></input>
                          </div>
                          </div>
                          <button   class="btn btn-block btn-primary">Apply</button>
                      </div>
                  </div>
              </article>


          </div>
      </aside>
      <main class="col-md-9">
          <header>
              <div class="form-inline">
              <div class="input-group">
                  <input    id="search-input" type="search" class="form-control" placeholder="Search via title"></input>
                  <button    id="search-button" type="button" class="btn btn-primary">
                  <i  class="fa fa-search"></i>
                    </button>
              </div>
              </div>
          </header>

          {/* {jobs.map((job)=>{
            return <Jobpostedcard job={job}></Jobpostedcard>
          })} */}



      </main>
    </div>
  </div>
  )
}

