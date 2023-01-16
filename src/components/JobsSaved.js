import React from "react";
import { useEffect ,useState} from "react";
import JobSaveCard from "./JobSaveCard";

function JobsSaved({seeker}) {
  const [jobs,setJobs] = useState([])
  useEffect(() => {
    fetch(`seekers/${seeker.id}/savedjobs`).then((response) => {
      if (response.ok) {
        response.json().then((jobssaved) => setJobs(jobssaved));
      }
    });
  }, []);

  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2" style={{color:"blue"}}>JOBS SAVED</h2>
    <p>Here are some jobs youve saved</p>
    {jobs.map(job=> <JobSaveCard key={job.id} job={job}/>)}
</div>
  );
}

export default JobsSaved;
