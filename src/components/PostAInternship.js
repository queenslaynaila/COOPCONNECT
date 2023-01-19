import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
export default function PostAInternship({employer,onEmployer }) {
  console.log(employer.account.email)
  let navigate = useNavigate();

    const [positionsavailable,SetPositionsavailable] = useState(0)
    const [positiontitle,Setpositiontitle] = useState('')
    const [location, SetLocation] = useState('')
    const [keyskills,SetKeySkills] = useState('')
    const [jobsummary,SetOverallsummary] = useState('')
    const [responsibilities, Setjobresponsibilities] = useState('')
    const [interviewprocess,SetInterviewProcess] = useState('')

    function handlePost(){
      fetch('/internships', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({positiontitle,positionsavailable,location,keyskills,jobsummary,responsibilities,interviewprocess,employer_id:employer.id,category_id:9})
}).then(res => res.json())
  .then(res => {
    onEmployer(res)
  });
    }

  return (
    <div className="container mt-4 mb-4">
      <h4 style={{ color: "darkblue" }}>Post Your Internship</h4>
      <p
        className="dash"
        onClick={() => {
          navigate("/employerdash");
        }}
        style={{ cursor: "pointer" }}
      >
        {" "}
        <i class="bi bi-arrow-left"></i> Go to Dashboard
      </p>
      <div class="row">
        <div class="col-8">
          <div className="card">
            <div class="card-body">
              <form>
                <div className="row">
                  <div className="col">
                    <div class="mb-3">
                      <label
                        htmlFor="organizationname"
                        class="form-label fs-5 "
                      >
                        Internship Position:
                      </label>
                      <input
                        type="text"
                        id="organizationname"
                        class="form-control"
                        onChange={(e)=>{Setpositiontitle(e.target.value)}}
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="experience" class="form-label fs-5">
                         Positions Available:
                      </label>
                      <input
                        type="text"
                        id="experience"
                        onChange={(e)=>{SetPositionsavailable(e.target.value)}}
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="position" class="form-label fs-5">
                        Location:
                      </label>
                      <input
                        type="text"
                        id="position"
                        onChange={(e)=>{ SetLocation(e.target.value)}}
                        class="form-control form-control-lg"
                      ></input>
                    </div>
                  </div>

                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea" className="fs-5">
                    KeySkills
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea"
                    placeholder="Skills required separate w commas"
                    rows="3"
                    onChange={(e)=>{SetKeySkills(e.target.value)}}
                  ></textarea>
                </div>


                <div class="form-group">
                  <label for="exampleFormControlTextarea" className="fs-5">
                    OverallSummary
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea"
                    placeholder="Summary of the job"
                    rows="3"
                    onChange={(e)=>{SetOverallsummary(e.target.value)}}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" className="fs-5">
                    Job Responsibilities
                  </label>
                  <textarea
                    onChange={(e)=>{Setjobresponsibilities(e.target.value)}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter job responsibilities,searate them with commas"
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" className="fs-5">
                     InterviewProcess
                  </label>
                  <textarea
                    onChange={(e)=>{SetInterviewProcess(e.target.value)}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter job responsibilities,searate them with commas"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>

            <div class="card-footer">
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button "
                  onClick={() => {
                    navigate("/previewjob");
                  }}
                  class="btn btn-primary"
                >
                  PREVIEW POST
                </button>
                <button type="button" class="btn btn-primary">
                  CANCEL
                </button>
                <button type="button " class="btn btn-primary" onClick={handlePost}>
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 style={{ color: "darkblue" }} className="text-center">
                Recruiter Details
              </h5>
              <p className="text-center">{employer.name}</p>
              <p className="text-center">{employer.account.email}</p>
              <p
                onClick={() => {
                  navigate("/companyeditprofile");
                }}
                className="text-center"
              >
                <a href="" class="link-primary text-center">
                  Editprofile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
