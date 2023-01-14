import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/seeker.css"

export default function Seekerprofile({seeker}) {
  let navigate = useNavigate();
  const [workExperience, setWorkExperience] = useState([    { jobTitle: "", description: "", startDate: "", endDate: "" }  ]);
  const [education, setEducation] = useState([    { level: "", startDate: "", endDate: "", certAwarded: "", institution: "" }  ]);

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, { jobTitle: "", description: "", startDate: "", endDate: ""  }]);
  }

  const addEducation = () => {
    setEducation([...education, { level: "", startDate: "", endDate: "", certAwarded: "", institution: "" }]);
  }

  const deleteWorkExperience = (index) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  }

  const deleteEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  }

  return (
    <div class="container">
      <div class="row gutters mt-5 mb-5">
        <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
        </p>
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="card ">
            <div class="card-body">
              <div class="account-settings">
                <div class="user-profile">
                  <div
                    style={{
                      backgroundColor: "darkblue",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      textAlign: "center",
                      color: "white",
                      lineHeight: "100px",
                      fontSize: "3rem",
                    }}
                    class="circle-singleline "
                  >
                    {seeker.firstname.charAt(0)}{seeker.secondname.charAt(0)}
                  </div>
                  <h5 class="user-name">{seeker.firstname} {seeker.secondname}</h5>
                  <h6 class="user-email">{seeker.account.email}</h6>
                </div>
                <div class="about">
                  <h5>About</h5>
                  <p>{seeker.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 class="mb-2 text-primary">Work Experience</h6>
                  <button onClick={addWorkExperience}>Add</button>
                  {workExperience.map((wkp, index) => (
                    <div key={index}>
                      <div class="form-group">
                        <label for="job-title">Job Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="job-title"
                          placeholder="Enter job title"
                          value={wkp.jobTitle}
                          onChange={e => {
                            const newWorkExperience = [...workExperience];
                            newWorkExperience[index].jobTitle = e.target.value;
                            setWorkExperience(newWorkExperience);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="description">Description</label>
                        <input
                          type="text"
                          class="form-control"
                          id="description"
                          placeholder="Enter Description"
                          value={wkp.description}
                          onChange={e => {
                            const newWorkExperience = [...workExperience];
                            newWorkExperience[index].description = e.target.value;
                            setWorkExperience(newWorkExperience);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="startDate">Start Date</label>
                        <input
                          type="date"
                          class="form-control"
                          id="startDate"
                          value={wkp.startDate}
                          onChange={e => {
                            const newWorkExperience = [...workExperience];
                            newWorkExperience[index].startDate = e.target.value;
                            setWorkExperience(newWorkExperience);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="endDate">End Date</label>
                        <input
                          type="date"
                          class="form-control"
                          id="endDate"
                          value={wkp.endDate}
                          onChange={e => {
                            const newWorkExperience = [...workExperience];
                            newWorkExperience[index].endDate = e.target.value;
                            setWorkExperience(newWorkExperience);
                          }}
                        />
                      </div>
                      <button onClick={() => deleteWorkExperience(index)}>Delete</button>
                    </div>
                  ))}
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 class="mb-2 text-primary">Education</h6>
                <button onClick={addEducation}>Add</button>
                {education.map((edu, index) => (
                <div key={index}>
                <div class="form-group">
                <label for="level">Level</label>
                <input
                type="text"
                class="form-control"
                id="level"
                placeholder="Enter level of education"
                value={edu.level}
                onChange={e => {
                const newEducation = [...education];
                newEducation[index].level = e.target.value;
                setEducation(newEducation);
                }}
                />
                </div>
                <div class="form-group">
                <label for="startDate">Start Date</label>
                <input
                type="date"
                class="form-control"
                id="startDate"
                value={edu.startDate}
                onChange={e => {
                const newEducation = [...education];
                newEducation[index].startDate = e.target.value;
                setEducation(newEducation);
                }}
                />
                </div>
                <div class="form-group">
                <label for="endDate">End Date</label>
                <input
                type="date"
                class="form-control"
                id="endDate"
                value={edu.endDate}
                onChange={e => {
                const newEducation = [...education];
                newEducation[index].endDate = e.target.value;
                setEducation(newEducation);
                }}
                />
                </div>
                <div class="form-group">
                <label for="certAwarded">Certificate/Degree Awarded</label>
                <input
                type="text"
                class="form-control"
                id="certAwarded"
                placeholder="Enter certificate/degree awarded"
                value={edu.certAwarded}
                onChange={e => {
                const newEducation = [...education];
                newEducation[index].certAwarded = e.target.value;
                setEducation(newEducation);
                }}
                />
                
                </div>
                <div class="form-group">
                <label for="institution">Institution</label>
                <input
                type="text"
                class="form-control"
                id="institution"
                placeholder="Enter institution"
                value={edu.institution}
                onChange={e => {
                const newEducation = [...education];
                newEducation[index].institution = e.target.value;
                setEducation(newEducation);
                }}
                />
                </div>
                <button onClick={() => deleteEducation(index)}>Delete</button>
                </div>
                ))}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                );
                }