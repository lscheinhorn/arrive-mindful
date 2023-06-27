import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const copyToClipboard = (e) => {
    var textField = document.createElement('textarea');
    textField.innerText = 'veronica@arrivemindful.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <>
      <footer className="ftco-footer ftco-section bg-light">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Arrive Mindful</h2>
                <p>
                  Arrive Mindful is about showing up fully to each moment of your life. It is a journey through yoga, meditation, and the development of conscious insight. The manifestation of this journey is an existence filled with joy, possibility, and peace.
                </p>
                <ul className="ftco-footer-social list-unstyled float-lft mt-3">
                  {/* <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li> */}
                  <li className="ftco-animate">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/veronicaroseonup/"
                    >
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Popular Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Introductory Yoga</a>
                  </li>
                  <li>
                    <a href="#">Moderate Yoga</a>
                  </li>
                  <li>
                    <a href="#">Vigorous Flow</a>
                  </li>
                  <li>
                    <a href="#">Meditation</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/classes">Classes</Link>
                  </li>
                  <li>
                    <Link to="/schedule">Schedule</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Contact Veronica</h2>
                <div className="block-23 mb-3">
                  <ul>
                    {/* <li><span className="icon icon-map-marker"></span><span className="text">Based out of Summit, New Jersey USA</span></li>
                  <li><a href="#"><span className="icon icon-phone"></span><span className="text">+1 914 123 4567</span></a></li> */}
                    <li>
                      <Link to="/contact">
                        <span className="icon icon-envelope"></span>
                        <span id="email-address" className="text">
                          veronica@arrivemindful.com
                        </span>
                      </Link>
                      <span
                        className="icon icon-copy"
                        onClick={copyToClipboard}
                        style={{ cursor: 'pointer', paddingLeft: '5px' }}
                        data-toggle="tooltip"
                        title="Copy email address"
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                {/* Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{' '}
                <i className="icon-heart" aria-hidden="true"></i> by{' '}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
