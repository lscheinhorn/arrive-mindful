import React from 'react'
import { Link } from 'react-router-dom';
// TODO: Fix hamburger menu
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <div className="row m-auto">
            <div className="col-12 w-100 text-center">
              <Link className="navbar-brand w-100" to="home">
                Arrive Mindful
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="oi oi-menu"></span> Menu
              </button>
            </div>
            <div className="col-12 w-100 text-center">
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <Link to="home" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="classes" className="nav-link">
                      Classes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="schedule" className="nav-link">
                      Schedule
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="gallery" className="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
