import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Header = () => {
  
  const [fixnavbar, setFixnavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setFixnavbar(true);
      } else {
        setFixnavbar(false);
      }
    });
  });

  return (
    <div>
          <nav
          className={`navbar navbar-expand-lg fixed-top ${
            fixnavbar ? "fixed-navbar" : ""
          }`}
        >
                    <div class="container-fluid text-center">
                    <Link className="navbar-brand" href="#">
                        <img src={logo} alt="" className="logo-img" />
                    </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" href="#">Services</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" href="#">Product</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" href="#">Review</Link>
                            </li>
                            <li class="nav-item"> 
                            <Link class="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>
                        <span class="navbar-icon ">
                            <Link><i class="fa-solid fa-magnifying-glass"></i></Link>
                            <Link><i class="fa-solid fa-bag-shopping"></i></Link>
                            <Link><i class="fa-solid fa-user"></i></Link>
                        </span>
                        </div>
                    </div>
            </nav>
    </div>
  )
}

export default Header
