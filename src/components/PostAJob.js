import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function PostAJob
() {
	let navigate = useNavigate();
	const [formData, setFormData] = useState({
		jobtitle: "",
		experienceinyears: "",
		positionavailable: "",
		minsalary: "",
		maximumsalary: "",
		minimumeducationallevel: "",
		responsibilities: "",
		keyskills: "",
		location:"",
		senioritylevel: "",
		overallsummarry: "",
	  });
	
	  const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
		  ...prevState,
		  [name]: value,
		}));
	  };
	
	  const handleSubmit = (event) => {
		event.preventDefault();
		axios.post("/jobs", formData).then((response) => {
		  console.log(response);
		  navigate("/employerdash");
		});
	  };
	
	  const handleCancel = () => {
		setFormData({
		  jobtitle: "",
		  experienceinyears: "",
		  positionavailable: "",
		  minsalary: "",
		  maximumsalary: "",
		  minimumeducationallevel: "",
		  responsibilities: "",
		  keyskills: "",
		  location:"",
		  senioritylevel: "",
		  overallsummarry: "",
		});
	  };
  return (
    <div className='container mt-4 mb-4'>
	      <h4 style={{color:"darkblue"}}>Post Your Job</h4>
		  <p  className="dash" onClick={() => {navigate("/employerdash")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
            </p>
		  <div class="row">
				<div class="col-8">
				<div className='card'>
		  <div class="card-body">
            <form>
			  <div className='row'>
					<div className='col'>
				     	<div class="mb-3">
							<label htmlFor="jobtitle" class="form-label fs-5 ">Job Title:</label>
							<input type="text" id="jobtitle" class="form-control" name='jobtitle'
                        value={formData.jobtitle}
                        onChange={handleChange}></input>
						</div>
					</div>
					<div className='col'>
					   <div class="mb-3">
							<label htmlFor="experienceinyears" class="form-label fs-5">experienceinyears in Years:</label>
							<input type="text" id="experienceinyears" class="form-control" name='experienceinyears'
                            value={formData.experienceinyears}
                            onChange={handleChange}></input>
                       </div>
					</div>
			  </div>


			  <div className='row'>
				{/* <div className='col'>
				  <div class="mb-3">
			    <label htmlFor="position" class="form-label fs-5">Position:</label>
				<input type="text" id="position" class="form-control"        name='position'
                    value={formData.position}
                    onChange={handleChange}></input>
                  </div>
				</div> */}
				<div className='col'>
				  <div class="mb-3">
			    <label htmlFor="positionavailable" class="form-label fs-5">Positions Available:</label>
				<input type="text" id="positionavailable" class="form-control" name='positionavailable'
                    value={formData.positionavailable}
                    onChange={handleChange}></input>
                  </div>
				</div>
			  </div>

			 <div className='row'>
				<div className='col'>
				   <div class="mb-3">
			         <label htmlFor="minsalary" class="form-label fs-5">Minimum Slary:</label>
				     <input type="text" id="minsalary" class="form-control" name='minsalary'
                    value={formData.minsalary}
                    onChange={handleChange}></input>
                   </div>
				</div>
				<div className='col'>
				  <div class="mb-3">
					<label htmlFor="minsalary" class="form-label fs-5">Maximum Slary:</label>
					<input type="text" id="minsalary" class="form-control" name='maximumsalary'
                    value={formData.maximumsalary}
                    onChange={handleChange}></input>
                   </div>
				</div>
			 </div>
			 <div className='row'>
				<div className='col'>
				<label htmlFor='minimumeducationallevel' class='form-label fs-5'>
                    Minimum minimumeducationallevelal Qualifications:
                  </label>
				<select
                    class='form-select form-select-lg mb-3'
                    aria-label='.form-select-lg example'
                    name='minimumeducationallevel'
                    value={formData.minimumeducationallevel}
                    onChange={handleChange}
                  >
				<option selected >Select</option>
				<option value="1">PHD</option>
				<option value="2">Masters</option>
				<option value="3">Degree</option>
				<option value="4">Diploma</option>
				<option value="4">Certificate</option>
                  </select>
				</div>
				<div className='col'>
				<label htmlFor='minimumeducationallevel' class='form-label fs-5'>
				      Seniority Level:
                  </label>
				<select
                    class='form-select form-select-lg mb-3'
                    aria-label='.form-select-lg example'
                    name='senioritylevel'
                    value={formData.senioritylevel}
                    onChange={handleChange}
                  >
				<option selected>Select</option>
				<option value="1">Intern</option>
				<option value="2">Junior</option>
				<option value="3">Senior</option>
                  </select>
				</div>
			 </div>


			 <div className='row'>
			   <div className='col'>
					<div class="mb-3">
						<label htmlFor="location" class="form-label fs-5">Job Location:</label>
						<input type="text" id="location" class="form-control" name='location'
                        value={formData.location}
                        onChange={handleChange}></input>
					</div>
				</div>
				<div className='col'>
					<div class="mb-3">
						<label htmlFor="keyskills" class="form-label fs-5">Key Skills:</label>
						<input type="text" id="keyskills" class="form-control" name='keyskills'
                 value={formData.keyskills}
                 onChange={handleChange}></input>
					</div>
				</div>
			  </div>
			  <div class="form-group">
				<label for="exampleFormControlTextarea1" className='fs-5'>Overall Summarry</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter job overall summary,searate them with commas' rows="3"   name='overallsummarry'
                 value={formData.overallsummarry}
                 onChange={handleChange}></textarea>
             </div>
			  <div class="form-group">
				<label for="exampleFormControlTextarea1" className='fs-5'>Job Responsibilities</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter job responsibilities,searate them with commas' rows="3"   name='responsibilities'
                 value={formData.responsibilities}
                 onChange={handleChange}></textarea>
             </div>
			</form>
          </div>


		  <div class="card-footer">
            <div className="d-flex justify-content-end gap-2">
               <button type="button " onClick={() => {navigate("/previewjob")}}  class="btn btn-primary">PREVIEW POST</button>
               <button type="button" class="btn btn-primary" onClick={handleCancel}>CANCEL</button>
			   <button type="button " class="btn btn-primary" onClick={handleSubmit}>POST</button>
            </div>
        </div>
		 </div>
				</div>
				<div class="col-sm-4">
				   <div class="card">
 						 <div class="card-body">
						   <h5 style={{color:"darkblue"}} className="text-center">Recruiter Details</h5>
						   <p className="text-center">Companyname</p>
						   <p className="text-center">companygmail@gmail.com</p>
						   <p onClick={() => {navigate("/companyeditprofile")}} className="text-center"><a href="" class="link-primary text-center">Editprofile</a></p>
                        </div>
                    </div>
				</div>
            </div>

	</div>


  )
}
