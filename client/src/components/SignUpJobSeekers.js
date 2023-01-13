import React, { useState } from "react";
import connect from "../assets/connect.png";
function SignUpJobSeekers({ setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }

  return(
  <>
     <section class="vh-50">
    <div class="container py-5 h-100">

      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6"  >
          <img src={connect}
            class="img-fluid" alt="Phone image"></img>
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1"  >
          <form>
          <h4 style={{color:"darkblue"}} className="text-center">Job Seeker Registration</h4>
          <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="password"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            placeholder="Second Name"
                            required
                        />
                    </div>
          </div>
          <div className="col">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            placeholder="Email"
                            required
                        />
           </div>
           <div className="row mt-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
          </div>
             

                <div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    style={{ width: "100%" }}
                  >
                    Sign in
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">
                    HAVE AN ACCOUNT?
                  </p>
                </div>
                <div>
                  <a
                    class="btn btn-primary btn-lg btn-block mb-1"
                    style={{ backgroundColor: "#3b5998", width: "100%" }}
                    href="#!"
                    role="button"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpJobSeekers;
