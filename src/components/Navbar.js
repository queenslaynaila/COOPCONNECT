import React, { useEffect } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({seeker,employer,setSeeker,setEmployer}) {
  let navigate = useNavigate()

  function handleLogout(e) {
    e.preventDefault()
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setSeeker(null);
        setEmployer(null)
        navigate("/")
      }
    });
  }
  return (
    <nav class="navbar navbar-expand-lg fs-5   py-3  bg-white">
      <div className="container col-sm-15">
        <a class="navbar-brand" href="/#">
          <i className="bi bi-flower1"></i>
          COOPCONNECT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!seeker && !employer? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item  ">
                <a
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="nav-link login"
                  href="#/"
                >
                  <i className="bi bi-person-fill" /> login
                </a>
              </li>
              <li className="nav-item dropdown ms-sm-3 d-inline-flex">
                <a
                  className="nav-link signup dropdown-toggle"
                  href="#/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-check2-square" />
                  Signup
                </a>
                <ul className="dropdown-menu  ">
                  <li>
                    <a
                      onClick={() => {
                        navigate("/signupcompanies");
                      }}
                      className="dropdown-item fw-bold"
                      href="#/"
                    >
                      Employer{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/signuptalents");
                      }}
                      className="dropdown-item fw-bold"
                      href="#/"
                    >
                      Job Seeker
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          ) : seeker ?
          <>
              <ul className="navbar-nav">
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Dashboard</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Profile</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Search</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">More Options</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Assesements</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown ms-sm-3 d-inline-flex">
                  <a
                    className="nav-link signup dropdown-toggle"
                    href="#/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-fill" />
                     {seeker.firstname}
                  </a>
                  <ul className="dropdown-menu  ">
                    <li>
                      <a

                        className="dropdown-item fw-bold"
                        href="#/"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                          onClick={(e) => {
                          handleLogout(e);
                        }}
                        className="dropdown-item fw-bold"
                        href="#/"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </>
           :  <>
              <ul className="navbar-nav">
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Dashboard</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Search</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">More Options</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link login text-dark">Pricing</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown ms-sm-3 d-inline-flex">
                  <a
                    className="nav-link signup dropdown-toggle"
                    href="#/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-fill" />
                      {employer.firstname}
                  </a>
                  <ul className="dropdown-menu  ">
                    <li>
                      <a
                        className="dropdown-item fw-bold"
                        href="#/"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={(e) => {
                          handleLogout(e);
                        }}
                        className="dropdown-item fw-bold"
                        href="#/"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </>}
        </div>
      </div>
    </nav>
  );
}
