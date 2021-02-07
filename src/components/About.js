import React from 'react'
import Banner from './Banner';

function About() {

  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1498612753354-772a30629934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80'
        }
        header={'About Arrive Mindful'}
        detail={'A Yoga and Mindfulness Journey'}
        textColor={'white'}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex ftco-animate"></div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="coach align-items-stretch">
                <div
                  className="img"
                  style={{ backgroundImage: 'url(/gallery/VStarYoga3.JPG)' }}
                ></div>
                <div className="text bg-white p-4 ftco-animate">
                  <span className="subheading">
                    Yoga Instructor / Mindfulness Coach
                  </span>
                  <h3>
                    <a href="#">Veronica Stocker</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul className="ftco-social-media d-flex mt-4">
                    <li className="ftco-animate">
                      <a
                        href="#"
                        className="mr-2 d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="#"
                        className="mr-2 d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="#"
                        className="mr-2 d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
