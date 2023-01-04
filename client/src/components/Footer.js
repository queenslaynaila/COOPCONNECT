import React from 'react'

export default function Footer() {
  return (

  <>



  <footer
          class="text-center text-lg-start  "

          style={{backgroundColor:"white"}}
          >

    <div class="container p-4 pb-0">

      <section class="">

        <div class="row ">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>


          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a  >MDBootstrap</a>
            </p>
            <p>
              <a  >MDWordPress</a>
            </p>
            <p>
              <a  >BrandFlow</a>
            </p>
            <p>
              <a  >Bootstrap Angular</a>
            </p>
          </div>


          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a  >Your Account</a>
            </p>
            <p>
              <a  >Become an Affiliate</a>
            </p>
            <p>
              <a  >Shipping Rates</a>
            </p>
            <p>
              <a >Help</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

        </div>

      </section>


      <hr class="my-3"></hr>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">

          <div class="col-md-7 col-lg-8 text-center text-md-start">

            <div class="p-3">
              © 2020 Copyright:
              <a  class="text-white" href="/#">MDBootstrap.com</a>

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
