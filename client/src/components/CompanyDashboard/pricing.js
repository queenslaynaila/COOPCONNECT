import React from 'react'

export default function pricing() {
  return (
      <div className="container mt-4 mb-4" >
          <h4 style={{ color: "darkblue" }}>Ready for upgrade?</h4>
          <h6 className='text-center'>We have monthly and Annual plans!</h6>

<div class="card w-25">
  <div class="card-body">
    <h6 className='text-left'>basic</h6>
    <p>post upto 5 jobs</p>
          <p>$2 Monthly</p>
          <button type="button" class="btn btn-primary">Choose plan</button>

  </div>
</div>

      
<div class="card w-25">
  <div class="card-body">
    <h6 className='text-center'>lite</h6>
    <p>post upto 15 jobs</p>
          <p>$4 Monthly</p>
          <button type="button" class="btn btn-primary">choose plan</button>
  </div>
      </div>
      
<div class="card w-25">
  <div class="card-body">
    <h6 className='text-center'>Pro</h6>
    <p>post upto 30 jobs</p>
          <p>$6 Monthly</p>
          <button type="button" class="btn btn-primary">choose plan</button>
  </div>
      </div>


    </div>
  )
}
