import React from "react";
import { useNavigate } from "react-router-dom";
export default function PostAJob({employer}) {
  console.log(employer.account.email)
  let navigate = useNavigate();
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
                        class="form-control form-control-lg"
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div class="mb-3">
                      <label
                        htmlFor="positionavailable"
                        class="form-label fs-5"
                      >
                        Positions Available:
                      </label>
                      <input
                        type="text"
                        id="positionavailable"
                        class="form-control"
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="mb-3">
                      <label htmlFor="minsalary" class="form-label fs-5">
                        Minimum Slary:
                      </label>
                      <input
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
                    >
                      <option selected>
                        Minimum Educational Qualifications
                      </option>
                      <option value="1">PHD</option>
                      <option value="2">Masters</option>
                      <option value="3">Degree</option>
                      <option value="4">Diploma</option>
                      <option value="4">Certificate</option>
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
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" className="fs-5">
                    Job Responsibilities
                  </label>
                  <textarea
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
                <button type="button " class="btn btn-primary">
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
