import React from 'react'
import TalentCard from './TalentCard'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
function SearchTalent({onSeekersFetch,employer}){
    const [search,setsearch] = useState("")
    const [proffesion,setProfession] = useState('')
    const [gender,setGender] = useState('')
    const [years,setYears] = useState(null)
    let navigate = useNavigate()
    const [talents,SetTalents] = useState([])
    useEffect(()=>{
        fetch("/seekers")
        .then((r)=>{
            r.json().then((res)=>{
                SetTalents(res)
                onSeekersFetch(res)
            })
        })
      },[])


      function handleSearch(){
        const filterSEarch = talents.filter((talent)=>{return talent.profession
            .toLowerCase().includes(search.toLowerCase()) })
        SetTalents(filterSEarch)

    }
      function handleChange(event){
        setsearch(event.target.value)
        const filterSEarch = talents.filter((talent)=>{return talent.profession
            .toLowerCase().match(search.toLowerCase()) })
        SetTalents(filterSEarch)

       }

     function handleGender(e){
        setGender(e.target.value)
        const filterSEarch = talents.filter((talent)=>{return talent.gender
            .matches(gender.toLowerCase()) })

     }

    return (
       <div class="container">
    <div class="row mt-5 mb-5">
      <aside class="col-md-3">
          <div class="card">
              <article class="filter-group">
                  <header class="card-header">
                          <h6 class="title">ADVANCED FILTER</h6>
                  </header>
                  <div>
                      <div class="card-body">



                     <input type="text"  onChange={(e)=>handleGender(e)}  class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='GENDER'></input>
                     <input type="text" onChange={(e)=>setYears(e.target.value)} class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='EXPERIENCEYEARS'></input>

                     </div>
                  </div>
              </article>
          </div>
      </aside>
      <main class="col-md-9">
          <header  >
                  <div class="form-inline">
                      <div class="input-group">
                          <input id="search-input" onChange={handleChange}  type="search" class="form-control" placeholder="Search by proffession..."></input>
                          <button onClick={(e)=>handleSearch(e)} id="search-button" type="button" class="btn btn-primary">
                                 <i class="fa fa-search"></i>
                            </button>
                      </div>
                  </div>
          </header>
          {talents.map((talent)=>{
             return <TalentCard talent={talent} employer={employer}></TalentCard>
          })}

      </main>
    </div>
  </div>




    )
}

export default SearchTalent
