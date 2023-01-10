import React from 'react'
import Jobcard from './Jobcard'
export default function Jobsearch() {
  return (
    <div class="container">
      <div class="row mt-5 mb-5">
        <aside class="col-md-3">
            <div class="card">

                <article class="filter-group">
                    <header class="card-header">


                            <h6 class="title">Category </h6>

                    </header>
                    <div class="filter-content collapse show" id="collapse_2"  >
                        <div class="card-body">
                         <p>Marketing</p>
                         <p>Software Engineering</p>
                         <p>Customer Service</p>
                         <p>Care Jobs</p>
                         <p>Analytics</p>


                </div>
                    </div>
                </article>
                <article class="filter-group">
                    <header class="card-header">

                            <h6 class="title">Salary range </h6>

                    </header>
                    <div class="filter-content collapse show" id="collapse_3"  >
                        <div class="card-body">

                            <div class="form-row">
                            <div class="form-group col-md-6">
                            <label>Min</label>
                            <input class="form-control" placeholder="$0" type="number"></input>
                            </div>
                            <div class="form-group text-right col-md-6">
                            <label>Max</label>
                            <input class="form-control" placeholder="$1,0000" type="number"></input>
                            </div>
                            </div>
                            <button class="btn btn-block btn-primary">Apply</button>
                        </div>
                    </div>
                </article>


            </div>
        </aside>
        <main class="col-md-9">
            <header  >
                    <div class="form-inline">
                        <div class="input-group">
	                        <input id="search-input" type="search" class="form-control" placeholder="Search a job, company..."></input>
                            <button id="search-button" type="button" class="btn btn-primary">
                                   <i class="fa fa-search"></i>
  	                        </button>
                        </div>
                    </div>
            </header>

               <Jobcard></Jobcard>
               <Jobcard></Jobcard>

        </main>
      </div>
    </div>
  );
}
