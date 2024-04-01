import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className="logo">
                  <div>
                    <img src={logo} alt="logo" />
                  </div>
                  <h6>
                    Manta Ray Lost River sucker smalleye
                    <br /> gourami peamouth? M-war fish;
                  </h6>
                  <div className="social-icon">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className="contact-us">
                  <h3>Contact us</h3>
                  <p>
                    <Link>
                      <i class="fa-solid fa-paper-plane me-2"></i>Greenville, Sc
                    </Link>
                  </p>
                  <p>
                    <Link>
                      <i class="fa-solid fa-phone me-2"></i>+1-833-722-6338
                    </Link>
                  </p>
                  <p>
                    <Link className=" location">
                      <i class="fa-solid fa-location-dot me-2"></i>
                      Contact@101sbc.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className="privacy-policy">
                  <h3>Privacy Policy</h3>
                  <p>
                    <Link>Overview</Link>
                  </p>
                  <p>
                    <Link>Features</Link>
                  </p>
                  <p>
                    <Link>Solutions</Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className="instagram">
                  <h3>Our Instagram</h3>
                  <p>Mustache triggerfish stonecat </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <Link>Home</Link>
            <Link>Services</Link>
            <Link>Product</Link>
            <Link>Review</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
