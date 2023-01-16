import React from 'react'

export default function Personaldetails() {
  return (
    <form>
    <div className='row'>
        <div className='col'>
            <div class="form-group">
                    <label for="fname">FirstName</label>
                    <input type="text" class="form-control" id="fname" placeholder="Your First Name"  ></input>
            </div>
        </div>
        <div className='col'>
            <div class="form-group">
            <label for="sname">SecondName</label>
            <input type="text" class="form-control" id="sname" placeholder="Your Second Name" ></input>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col'>
            <div class="form-group">
                    <label for="f">Profession</label>
                    <input type="text" class="form-control form-control" id="f" placeholder="The profession you are working in " required></input>
            </div>
        </div>
        <div className='col'>
            <div class="form-group">
            <label for="s">Years in Profession</label>
            <input type="number" class="form-control form-control-lg" id="s" placeholder="Years in the field" required></input>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="form-group col-md-4">
      <label for="inputCity">Country</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">City</label>
      <input type="text" class="form-control" id="inputState"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">PhoneNumber</label>
      <input type="text" class="form-control" id="inputZip" required></input>
    </div>
    </div>
  <button type="submit" class="btn btn-primary">UPDATE</button>
</form>
  )
}

