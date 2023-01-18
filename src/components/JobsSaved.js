import React from "react";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router";
import JobSaveCard from "./JobSaveCard";

function JobsSaved({seeker}) {
  let navigate =useNavigate()
  const [jobs,setJobs] = useState([])
  useEffect(() => {
    fetch(`seekers/${seeker.id}/savedjobs`).then((response) => {
      if (response.ok) {
        response.json().then((jobssaved) => setJobs(jobssaved));
      }
    });
  }, [jobs]);

  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"darkblue"}}>JOBS SAVED</h2>
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
	                <input   id="search-input" type="search" class="form-control" placeholder="Search a job, company..."></input>
                    <button o   id="search-button" type="button" class="btn btn-primary">
                    <i     class="fa fa-search"></i>
  	                </button>
                </div>
                </div>
            </header>



            {jobs.map(job=> <JobSaveCard key={job.id} job={job}/>)}

        </main>
      </div>


</div>
  );
}

export default JobsSaved;
