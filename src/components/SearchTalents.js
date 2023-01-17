import React from 'react'
import TalentCard from './TalentCard'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
function SearchTalent(){
    let navigate = useNavigate()
    const [talents,SetTalents] = useState([])
    useEffect(()=>{
        fetch("/seekers")
        .then((r)=>{
            r.json().then((res)=>{
                SetTalents(res)
                // onFetchJobs(res)
            })
        })
      },[])
    console.log(talents)
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


                     <input type="text" class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='PROFESSION'></input>
                     <input type="text" class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='SKILLS'></input>
                     <input type="text" class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='INSTITUTE'></input>
                     <input type="text" class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='EXPERIENCE'></input>
                     </div>
                  </div>
              </article>
          </div>
      </aside>
      <main class="col-md-9">
          <header  >
                  <div class="form-inline">
                      <div class="input-group">
                          <input id="search-input" type="search" class="form-control" placeholder="Search via name..."></input>
                          <button id="search-button" type="button" class="btn btn-primary">
                                 <i class="fa fa-search"></i>
                            </button>
                      </div>
                  </div>
          </header>
          {talents.map((talent)=>{
             return <TalentCard talent={talent}></TalentCard>
          })}

      </main>
    </div>
  </div>




    )
}

export default SearchTalent
