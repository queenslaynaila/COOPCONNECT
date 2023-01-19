import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'
import TalentCard from './TalentCard'
import Employersearchcard from './Employersearchcard'
import { emit } from 'dom/lib/event'
export default function Searchemployer({onEmployerFetch,seeker,employers}) {
  const [all,setEmployers] = useState(employers)
  console.log(all)
  const [search,setSearch] = useState('')
  const [location,setLocation] = useState('')
  useEffect(()=>{
    fetch("/employers")
    .then((r)=>{
        r.json().then((res)=>{
            onEmployerFetch(res)
        })
    })
  },[])
  function handleSearch(e){
    e.preventDefault()

    const mel = employers.filter(employer => employer.name.toLowerCase().includes(search.toLowerCase()))
    console.log('me')
    setEmployers(mel)

}
function handleLocationFilter(e){
    e.preventDefault()

     const me = employers.filter(employer => employer.location.toLowerCase().includes(location.toLowerCase()))
     setEmployers(me)


}
  let navigate = useNavigate()
  return (
    <div className="container  mb-4">
    <h4 style={{ color: "darkblue" }} className="mt-2">Search Employers</h4>
    <div className="row mt-2 mb-5">
        <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
        </p>
        <aside class="col-md-3">
            <div class="card">

                <article class="filter-group">
                    <header class="card-header">
                            <h6 class="title">Filter Search</h6>
                    </header>
                    <div class="filter-content collapse show" id="collapse_3"  >
                        <div class="card-body">
                            <div class="form-row">
                            <div class="form-group col-md-6">
                              <form>
                              <label className='fw-bold'>Location:</label>
                             <input onChange={(e)=>setLocation(e.target.value)}  required class="form-control" placeholder="Location" type="text"></input>
                             <button  class="btn btn-block btn-primary mt-4"
                             onClick={(e)=>handleLocationFilter(e)} >Apply Filter</button>
                              </form>
                            </div>

                            </div>

                        </div>
                    </div>
                </article>


            </div>
        </aside>
        <main class="col-md-9">
            <header>
                <div class="form-inline">
                <div class="input-group">
	                <input onChange={(e)=>setSearch(e.target.value)}     id="search-input" type="search" class="form-control" placeholder="Search by comapny name"></input>
                    <button    id="search-button" type="button" class="btn btn-primary">
                    <i   onClick={(e)=>handleSearch(e)}    class="fa fa-search"></i>
  	                </button>
                </div>
                </div>
            </header>
            {all.map(employer=> <Employersearchcard employer={employer} key={employer.id} seeker={seeker}/>)}
        </main>
    </div>
  </div>
  )
}

