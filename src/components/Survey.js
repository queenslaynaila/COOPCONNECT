import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Survey() {
    let navigate = useNavigate();
    


     return ( 
     <div className="container mt-4 mb-4">
       <h4 style={{color:"darkblue"}}>Create Survey</h4>
       <p  className="dash" onClick={() => {navigate("/employerdash")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
            </p>
        <div class="card">
          <div class="card-header">
                     <h4> Personality Survey</h4>
          </div>
          <div class="card-body">
                     <form id="bookingForm" action="#" method="" class="needs-validation" novalidate autocomplete="off">
                         
                        <div id='question' class="form-group">
                            <h5>What is your favorite colour</h5>
                         </div>
                         
         <div class="row">
                             
                    <div id='answer' class="col">
                        <div class="form-group">
                                <input type="text" class="form-control" id="inputEmail" name="email" placeholder="1 colour"  />
                        </div>
                    </div>
                             

                     <div id='question' class="form-group">
                            <h5>In two words, describe your perfect day off-work</h5>
                    </div>


                    <div id='answer' class="col">
                        <div class="form-group">
                                <input type="text" class="form-control" id="inputEmail" name="email" placeholder="short and clear"  />
                        </div>
                    </div>


                    <div id='question' class="form-group">
                            <h5>Dogs or Cats?</h5>
                    </div>

                    <div id='answer' class="col">
                        <div class="form-group">
                                <input type="text" class="form-control" id="inputEmail" name="email" placeholder="choose one of the above"  />
                        </div>
                    </div>  

                  <div id='question' class="form-group">
                            <h5>Phone calls or Texts?</h5>
                  </div>
                             
                 <div id='answer' class="col">
                        <div class="form-group">
                                <input type="text" class="form-control" id="inputEmail" name="email" placeholder="choose one of the above"  />
                        </div>
                    </div> 
  
                             <div id='question' class="form-group">
                            <h5>Heart or Mind?</h5>
                  </div>

                             <div id='answer' class="col">
                        <div class="form-group">
                                <input type="text" class="form-control" id="inputEmail" name="email" placeholder="choose one of above"  />
                        </div>
                    </div> 

               </div>
            </form>
                </div>
                <div>  
                {/* <button type="button" class="btn btn-primary">Add Answer</button>
                <button type="button" class="btn btn-primary">Add Question</button> */}
                <button type="button" class="btn btn-primary">Submit Survey</button>
                </div>
          </div>
       </div>
  )
}
