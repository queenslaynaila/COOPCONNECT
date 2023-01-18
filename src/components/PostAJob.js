import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
export default function PostAJob({employer,onEmployer }) {
  console.log(employer.account.email)
  let navigate = useNavigate();
    const [jobposition,Setjobposition] = useState('')
    const [positionsavailable,SetPositionsavailable] = useState(null)
    const [experienceInYears,SetExperienceInYears] = useState(0)
    const [minsalary,SetMinsalary] = useState(0)
    const [maxsalary,SetMaxSalary] = useState(0)
    const [minimumed, SetMinMumEd] = useState('')
    const [senioritylevel,SetSenioritylevel] = useState('')
    const [location, SetLocation] = useState('')
    const [keyskills,SetKeySkills] = useState('')
    const [overallsummary,SetOverallsummary] = useState('')
    const [jobresponsibilities, Setjobresponsibilities] = useState('')

    function handlePost(){
      fetch('/jobs', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({jobtitle:jobposition,positionsavailable,experienceInYears,minsalary,maximumsalary:maxsalary,minimumeducationallevel:minimumed,senioritylevel,location,keyskills,overallsummary,responsibilities:jobresponsibilities,employer_id:employer.id})
}).then(res => res.json())
  .then(res => {
   onEmployer(res)
  });
    }

  return (
    <div className="container mt-4 mb-4">
      <h4 style={{ color: "darkblue" }}>Post Your Job</h4>
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
                        Job Position:
                      </label>
                      <input
                        type="text"
                        id="organizationname"
                        class="form-control"
                        onChange={(e)=>{Setjobposition(e.target.value)}}
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
                        Experience in Years:
                      </label>
                      <input
                        type="number"
                        id="position"
                        onChange={(e)=>{SetExperienceInYears(e.target.value)}}
                        class="form-control form-control-lg"
                      ></input>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="minsalary" class="form-label fs-5">
                        Maximum Slary:
                      </label>
                      <input
                       onChange={(e)=>{SetMaxSalary(e.target.value)}}
                        type="text"
                        id="minsalary"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="minsalary" class="form-label fs-5">
                        Minimum Slary:
                      </label>
                      <input
                         onChange={(e)=>{SetMinsalary(e.target.value)}}
                        type="text"
                        id="minsalary"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      onChange={(e)=>SetMinMumEd(e.target.value)}
                    >
                      <option selected>
                        Minimum Educational Qualifications
                      </option>
                      <option value="Phd">PHD</option>
                      <option value="Masters">Masters</option>
                      <option value="Degree">Degree</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                  </div>
                  <div className="col">
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Seniority Level</option>
                      <option value="1">Intern</option>
                      <option value="2">Junior</option>
                      <option value="3">Senior</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="joblocation" class="form-label fs-5">
                        Job Location:
                      </label>
                      <input
                        onChange={(e)=>{SetLocation(e.target.value)}}
                        type="text"
                        id="joblocation"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="keyskills" class="form-label fs-5">
                        Key Skills:
                      </label>
                      <input
                        onChange={(e)=>{SetKeySkills(e.target.value)}}
                        type="text"
                        id="keyskills"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
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
