import React from 'react'

export default function 
() {
  return (
    
    <div class="row gutters">
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Organization name</label>
					<input type="name" class="form-control" placeholder='Lencare Merchants'></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Experience in Years</label>
					<input type="name" class="form-control"></input>
				</div>
      </div>
      
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Position</label>
					<input type="name" class="form-control"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Positions Available</label>
					<input type="name" class="form-control"></input>
				</div>
			</div>

          
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Minimum Educational Level</label>
					<input type="name" class="form-control"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Seniority Level</label>
					<input type="name" class="form-control"></input>
				</div>
      </div>
      
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Salary range</label>
					<input type="name" class="form-control"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Job Location</label>
					<input type="name" class="form-control"></input>
				</div>
      </div>
      
         <div class="card mt-3"  >
          <div class="card-body">
          <div class="form-group">
            <label>Key Skills</label>
              <input type="text" class="form-control" id="inputName" name="name"/>
          </div>
         <div class="form-group">
          <textarea class="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Enter job responsibiliries,separate responsibilities with commas"></textarea>
         </div>
       </div>
       <div class="card-body   "
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div className="d-flex justify-content-end gap-2">
               <button type="button " class="btn btn-primary">PREVIEW POST</button>
            <button type="button" class="btn btn-primary">CANCEL</button>
            <button type="button" class="btn btn-primary">POST</button>
               </div>
        </div>
        </div>  

          
    </div>
      
  )
}
