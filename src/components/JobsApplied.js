import React   from "react";
import { useEffect ,useState} from "react";
import Appliedjobcard from "./Appliedjobcard";
function JobsApplied({seeker}) {
  const [jobs,setJobs] = useState([])


 useEffect(() => {
  fetch(`seekers/${seeker.id}/appliedjobs`).then((response) => {
    if (response.ok) {
      response.json().then((user) => setJobs(user));
    }
  });
}, []);
console.log(jobs)
  return (
    <div class="container-sm mt-4 mb-4">
        <h2 className="mt-2" style={{color:"blue"}}>JOB APPLICATIONS </h2>
        <p>Here are some jobs youve applied to</p>
        {jobs.map(job=> <Appliedjobcard key={job.id} job={job}/>)}

    </div>


  );
}

export default JobsApplied;
