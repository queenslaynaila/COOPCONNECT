import React from 'react'
import TalentCard from './TalentCard'
export default function Searchemployer() {
  return (
    <div class="container">
    <div class="row mt-5 mb-5">
      <aside class="col-md-3">

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

