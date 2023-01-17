import React   from "react";
import { useEffect ,useState,u} from "react";
import { useNavigate } from "react-router";
import Appliedjobcard from "./Appliedjobcard";
function JobsApplied({seeker}) {
const [jobs,setJobs] = useState([])
const [search,setsearch] = useState(" ")
const [maximumsalary,setMaximumSalary] = useState(null)
const [minsalary,setMinSalary ] = useState(null)
    let navigate = useNavigate()

 useEffect(() => {
  fetch(`seekers/${seeker.id}/appliedjobs`).then((response) => {
    if (response.ok) {
      response.json().then((user) => setJobs(user));
    }
  });
}, []);
console.log(jobs)
// const handleSearch = (event) => {
//   setSearchValue(event.target.value);
// };

// const handleMinSalary = (event) => {
//   setMinSalary(event.target.value);
// }

// const handleMaxSalary = (event) => {
//   setMaxSalary(event.target.value);
// }

// const filteredJobs = jobs.filter((job) => 
//   job.title.toLowerCase().includes(searchValue.toLowerCase()) &&
//   (job.salary >= minSalary) &&
//   (job.salary <= maxSalary) 
// );

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
    console.log(search)
   }
  return (
    <div class="container-sm mt-4 mb-4">
       <h2 className="mt-2" style={{color:"darkblue"}}>JOB APPLICATIONS{" "} </h2>
       <div class="row mt-5 mb-5">
            <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}>{" "} <i class="bi bi-arrow-left"></i> Go to Dashboard
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

            {jobs.map((job) => (
           <Appliedjobcard key={job.id} job={job} />))}
            
        </main>
      </div>





    </div>


  );
}
export default JobsApplied;
