import React, { useState } from "react";

function SignCompanies({ setUser }) {
  const [companyName, setCompanyName] = useState("");
  const [fnameContact, setFnameContact] = useState("");
  const [lnameContact, setLnameContact] = useState("");
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
        companyName,
        fnameContact,
        lnameContact,
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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register to post jobs</h1>
        <label htmlFor="company-name">Company name:</label>
        <input
          type="text"
          id="company_name"
          autoComplete="off"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label htmlFor="fname-contact">Fname Contact:</label>
        <input
          type="text"
          id="fname_contact"
          autoComplete="off"
          value={fnameContact}
          onChange={(e) => setFnameContact(e.target.value)}
        />
        <label htmlFor="lname-contact">Lname Contact:</label>
        <input
          type="text"
          id="lname_contact"
          autoComplete="off"
          value={lnameContact}
          onChange={(e) => setLnameContact(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
        <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

      </form>
    </div>
);
}

export default SignCompanies;