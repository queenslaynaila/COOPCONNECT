import React from 'react'
import { useEffect ,useState} from "react";
import Seekerprofilecard from './Seekerprofilecard';

export default function Savedprofiles({employer}) {

  const [savedprofiles,setSavedprofiles] = useState([])
  useEffect(() => {
    fetch(`employers/${employer.id}/savedprofiles`).then((response) => {
      if (response.ok) {
        response.json().then((res) => setSavedprofiles(res));
      }
    });
  }, []);

  return (
    <div class="container-sm mt-4 mb-4">
    <h2 className="mt-2 text-center" style={{color:"darkblue"}}>PROFILES SAVED</h2>

    <div class="row mt-5 mb-5">

            <aside class="col-md-3">
            <div class="card">

                <article class="filter-group">
                    <header class="card-header">
                            <h5 class="title">FILTER</h5>
                    </header>
                    <div class="filter-content collapse show" id="collapse_3"  >
                        <div class="card-body">
                            <div class="form-row">
                            <div class="form-group col-md-6">
                              <form>
                              <label className='fw-bold'>Location:</label>
                             <input  required class="form-control" placeholder="Location" type="text"></input>
                             <label className='fw-bold'>Proffesion:</label>
                             <input  required class="form-control" placeholder="Profession" type="text"></input>

                             <button  class="btn btn-block btn-primary mt-4">Apply Filter</button>
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
	                <input    id="search-input" type="search" class="form-control" placeholder="Search a  seeker..."></input>
                    <button  id="search-button" type="button" class="btn btn-primary">
                    <i    class="fa fa-search"></i>
  	                </button>
                </div>
                </div>
            </header>
            {savedprofiles.map((profile)=>{
      return <Seekerprofilecard profile={profile} ></Seekerprofilecard>
    })}


        </main>
      </div>


    </div>
  )
}
