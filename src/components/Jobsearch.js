import React, {useEffect, useState} from 'react'
import Jobcard from './Jobcard'
import { useNavigate  } from "react-router-dom";
// import { useEffect,useState } from 'react';
export default function Jobsearch({onFetchJobs,seeker}) {
let navigate = useNavigate();
const [jobs,setJobs] = useState([])
const [search,setsearch] = useState(" ")
const [maximumsalary,setMaximumSalary] = useState(null)
const [minsalary,setMinSalary ] = useState(null)

useEffect(()=>{
    fetch("/jobs")
    .then((r)=>{
        r.json().then((res)=>{
            setJobs(res)
            onFetchJobs(res)
        })
    })
  },[])
console.log(jobs)
function handleSearch(){
    const filterSEarch = jobs.filter((job)=>{return job.jobtitle.toLowerCase().includes(search.toLowerCase()) })
    setJobs(filterSEarch)

}
function handleWageFilter(){
    const filterredjobs = jobs.filter((job)=>{return job.minsalary > minsalary && job.maximumsalary < maximumsalary})
     setJobs(filterredjobs)
     console.log(jobs)

}
function handleChange(event){
    setsearch(event.target.value)
    
   }

  return (
    <div class="container">
      <div class="row mt-5 mb-5">
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
                            <input onChange={(e)=>setMinSalary(e.target.value)} class="form-control" placeholder="0" type="number"></input>
                            </div>
                            <div class="form-group text-right col-md-6">
                            <label>Max</label>
                            <input class="form-control" onChange={(e)=>setMaximumSalary(e.target.value)}   placeholder="1,0000" type="number"></input>
                            </div>
                            </div>
                            <button onClick={handleWageFilter} class="btn btn-block btn-primary">Apply</button>
                        </div>
                    </div>
                </article>


            </div>
        </aside>
        <main class="col-md-9">
            <header>
                <div class="form-inline">
                <div class="input-group">
	                <input  onChange={handleChange}  id="search-input" type="search" class="form-control" placeholder="Search a job, company..."></input>
                    <button onClick={handleSearch}  id="search-button" type="button" class="btn btn-primary">
                    <i  onClick={(e)=>handleSearch}  class="fa fa-search"></i>
  	                </button>
                </div>
                </div>
            </header>

            {jobs.map(job=> <Jobcard job={job} seeker={seeker}/>)}



        </main>
      </div>
    </div>
  );
}
