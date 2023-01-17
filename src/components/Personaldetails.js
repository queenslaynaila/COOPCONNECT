import React,{useState} from 'react'

export default function Personaldetails({seeker}) {
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [profession,setProfession] = useState("")
  const [yearsinprofesion,setYearsinprofession] = useState("")
  const [country,setCountry] = useState("")
  const [city,setCity] = useState("")
  const [phone,setPhone] = useState("")
  const [about,setAbout] = useState("")
  const [errors,setErrors] = useState([])
  function handlePosts(e){

        fetch(`/seekers/${seeker.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstname,secondname,profession,yearsinprofesion,country,city,phone,about})
          }).then(res => {
            if(res.ok){
                alert("Post was succesfull")
            }
          });


}
  return (
    <form>
    <div className='row'>
        <div className='col'>
            <div class="form-group">
                    <label for="fneame">FirstName</label>
                    <input type="text" class="form-control" id="fneame" placeholder="Your First Name" onChange={(e) =>{
                setFirstName(e.target.value)
                setErrors(null)
                }}  value={firstname}></input>
            </div>
        </div>
        <div className='col'>
            <div class="form-group">
            <label for="sname">SecondName</label>
            <input type="text" class="form-control" id="sname" placeholder="Your Second Name" value={secondname} onChange={(e)=>{
              setSecondName(e.target.value)
              setErrors(null)
            }} ></input>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col'>
            <div class="form-group">
                    <label for="f">Profession</label>
                    <input onChange={(e)=>{
                      setProfession(e.target.value)
                      setErrors(null)
                    }} type="text" class="form-control form-control" id="f" placeholder="The profession you are working in " value={profession} required></input>
            </div>
        </div>
        <div className='col'>
            <div class="form-group">
            <label for="s">Years in Profession</label>
            <input type="number"  onChange={(e)=>{
              setYearsinprofession(e.target.value)
              setErrors(null)
            }} class="form-control form-control-lg" id="s" placeholder="Years in the field" value={yearsinprofesion} required></input>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="form-group col-md-4">
      <label for="inputCity">Country</label>
      <input type="text" onChange={(e)=>{
        setCountry(e.target.value)
        setErrors(null)
      }} class="form-control" id="inputCity" value={country}></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">City</label>
      <input type="text" onChange={(e)=>{
        setCity(e.target.value)
        setErrors(null)
      }} class="form-control" id="inputState" value={city}></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">PhoneNumber</label>
      <input type="text" onChange={(e)=>{
        setPhone(e.target.value)
        setErrors(null)
      }} class="form-control" id="inputZip" value={phone} required></input>
    </div>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Enter a short description of yourself</label>
    <textarea value={about} class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{
      setAbout(e.target.value)
    }}></textarea>
  </div>
  <button type="submit" onClick={ handlePosts} class="btn btn-primary">UPDATE</button>
</form>
  )
}

