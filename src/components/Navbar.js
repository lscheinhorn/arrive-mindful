import React from 'react'

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
              <a className="navbar-brand w-100" href="home">
                Arrive Mindful
              </a>
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
                    <a href="home" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="classes" className="nav-link">
                      Classes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="schedule" className="nav-link">
                      Schedule
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="blog" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="gallery" className="nav-link">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact" className="nav-link">
                      Contact
                    </a>
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
