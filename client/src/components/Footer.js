import React from 'react'

export default function Footer() {
  return (

  <>
  <footer class="text-center text-lg-start" style={{backgroundColor:"#21286A",color:"white"}}>
     <div class="container p-4 pb-0">
        <section>
           <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                    COOPCONNECT
                    </h6>
                    <p>
                    At CoopConnect we are loving enough to care about your employment needs and caring enough to help you fulfill them.
                    </p>
              </div>


          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">For Employees</h6>
            <p>
              <a  >Browse Jobs</a>
            </p>
            <p>
              <a  >Browse Catgeories</a>
            </p>
            <p>
              <a  >Candidate Dashboard</a>
            </p>
            <p>
              <a  >Job Alerts</a>
            </p>
            <p>
              <a  >My Bookmarks</a>
            </p>
          </div>


          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
             For Employers
            </h6>
            <p>
              <a>Browse Talents</a>
            </p>
            <p>
              <a  >Employer Dashboard</a>
            </p>
            <p>
              <a  >Add Job</a>
            </p>
            <p>
              <a >Job Packages</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Helpful Resources</h6>
            <p>Site Map</p>
            <p>Terms of use</p>
            <p>Privacy Center</p>
            <p>Security Center</p>
            <p>Accesability Center</p>
          </div>


        </div>

      </section>


      <hr class="my-3"></hr>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">

          <div class="col-md-7 col-lg-8 text-center text-md-start">

            <div class="p-3">
              © 2023 Copyright:
              <a    href="/#">COOPCONNECT</a>

            </div>

          </div>



          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

            <a
               class="btn btn-outline-dark btn-floating m-1  "
               role="button"
               ><i class="fab fa-facebook-f"></i></a>


            <a
               class="btn btn-outline-dark btn-floating m-1  "
               role="button"
               ><i class="fab fa-twitter"></i></a>


            <a
               class="btn btn-outline-dark btn-floating m-1"
               role="button"
               ><i class="fab fa-google"></i></a>


            <a
               class="btn btn-outline-dark btn-floating m-1"
               role="button"
               ><i class="fab fa-instagram"></i></a>
          </div>

        </div>
      </section>

    </div>

  </footer>



  </>
  )
}
