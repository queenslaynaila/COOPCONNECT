import React from "react";
import '../../styles/CompanyDashboard/footer.css'
function Footer()
{

    return (
      <div id="footer">
        <div id="more-info" className="container">
          <div className="info-item">
            <h1>JOB SEEKER</h1>
            <a href="#">Search jobs</a>
            <a href="#">Apply for a job</a>
            <a href="#">Terms of service</a>
          </div>
          <div className="info-item">
            <h1>HELP CENTER</h1>
            <a href="#">Service/FAQ </a>
            <a href="#">Privacy policy</a>
            <a href="#">Cookie Policy</a>
          </div>

          <div className="info-item">
            <h1>COOPCONNECT</h1>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Support</a>
          </div>
        </div>

        <div id="socials-and-play-store" className="container">
          <div id="socials">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>

          <div id="play-store">
            <p>get it on playstore</p>
                    <i class="fa-brands fa-google-play"></i>
          </div>
        </div>
      </div>
    );

}

export default Footer;