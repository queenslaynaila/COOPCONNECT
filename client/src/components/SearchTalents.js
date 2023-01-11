import React from 'react'
import TalentCard from './TalentCard'

function SearchTalent()
{

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
                      <div class="dropdown">
                            <a class="btn border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Educational Level
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">PHD</a></li>
                                <li><a class="dropdown-item" href="#">Masters</a></li>
                                <li><a class="dropdown-item" href="#">Degree</a></li>
                                <li><a class="dropdown-item" href="#">Diploma</a></li>
                                <li><a class="dropdown-item" href="#">Certificate</a></li>
                            </ul>
                      </div>
                     <input type="text" class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='INSTITUTE'></input>
                     <input type="text" class="form-control form-control-sm"  aria-label=".form-control-sm example" placeholder='COURSE'></input>
                     </div>
                  </div>
              </article>
          </div>
      </aside>
      <main class="col-md-9">
          <header  >
                  <div class="form-inline">
                      <div class="input-group">
                          <input id="search-input" type="search" class="form-control" placeholder="Search via skill or name..."></input>
                          <button id="search-button" type="button" class="btn btn-primary">
                                 <i class="fa fa-search"></i>
                            </button>
                      </div>
                  </div>
          </header>
          <TalentCard></TalentCard>
      </main>
    </div>
  </div>




    )
}

export default SearchTalent
