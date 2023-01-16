import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'
import TalentCard from './TalentCard'
import Employersearchcard from './Employersearchcard'
export default function Searchemployer() {
  const [employers,setEmployers] = useState([])
  useEffect(()=>{
    fetch("/employers")
    .then((r)=>{
        r.json().then((res)=>setEmployers(res))
    })
  },[])
  let navigate = useNavigate()
  return (
    <div className="container  mb-4">
    <h4 style={{ color: "darkblue" }} className="mt-2">Search Employers</h4>
    <div className="row mt-2 mb-5">
        <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
        </p>
        <aside class="col-md-3">
            <div class="card">

                <article class="filter-group">
                    <header class="card-header">
                            <h6 class="title">Filter Search</h6>
                    </header>
                    <div class="filter-content collapse show" id="collapse_3"  >
                        <div class="card-body">
                            <div class="form-row">
                            <div class="form-group col-md-6">
                              <form>
                              <label className='fw-bold'>Location:</label>
                             <input  required class="form-control" placeholder="Location" type="text"></input>
                             <button  class="btn btn-block btn-primary mt-4">Apply Filter</button>
                              </form>
                            </div>

                            </div>

                        </div>
                    </div>
                </article>


            </div>
        </aside>
        <main class="col-md-9">
            <header>
                <div class="form-inline">
                <div class="input-group">
	                <input     id="search-input" type="search" class="form-control" placeholder="Search by comapny name"></input>
                    <button    id="search-button" type="button" class="btn btn-primary">
                    <i     class="fa fa-search"></i>
  	                </button>
                </div>
                </div>
            </header>
            {employers.map(employer=> <Employersearchcard employer={employer} key={employer.id}/>)}
        </main>
    </div>
  </div>
  )
}

