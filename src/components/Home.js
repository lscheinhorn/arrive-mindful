import React from 'react';
import RecentPosts from './RecentPosts';
import LatestPhotos from './LatestPhotos';
import Schedule from './Schedule'

function Home() {
  return (
    <>
      <section className="home-slider js-fullheight owl-carousel">
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: 'url(/images/VStarYoga2.JPG)' }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-10 text ftco-animate text-center">
                <h1 className="mb-4">Discover Your Inner Sanctuary</h1>
                <h3 className="subheading">
                  Everyday We Can Bring Compassion and Awareness to Ourselves Without Judgement
                </h3>
                <p>
                  <a
                    href="classes"
                    className="btn btn-white btn-outline-white px-4 py-3 mt-3"
                  >
                    View classes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slider-item js-fullheight"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)',
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-10 text ftco-animate text-center">
                <h1 className="mb-4">Lighting Your Heart &amp; Mind</h1>
                <h3 className="subheading">
                  Your Health is Our Top Priority with Comprehensive, Affordable
                  medical.
                </h3>
                <p>
                  <a
                    href="#"
                    className="btn btn-white btn-outline-white px-4 py-3 mt-3"
                  >
                    View our works
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{
                    backgroundImage: 'url(/images/VStarYoga4.JPG)',
                  }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Power Yoga</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {' '}
                      Learn more{' '}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{
                    backgroundImage: 'url(/images/VStarYoga1.JPG)',
                  }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Community Class</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {' '}
                      Learn more{' '}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{
                    backgroundImage: 'url(/images/VStarYoga3.JPG)',
                  }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Foundation Yoga</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {' '}
                      Learn more{' '}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1505079403222-b5bbf1484f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80)',
                  }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Meditation</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {' '}
                      Learn more{' '}
                      <span className="ion-ios-arrow-round-forward"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center">
              <h2 className="mb-1">Benefits of Yoga</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-md-right pl-4 pl-md-0 pr-md-4">
                  <h3>Balances Body &amp; Mind</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-md-right pl-4 pl-md-0 pr-md-4">
                  <h3>Healthy Daily Life</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-md-right pl-4 pl-md-0 pr-md-4">
                  <h3>Improves your flexibility</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-md-right pl-4 pl-md-0 pr-md-4">
                  <h3>Protects your spine</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex">
              <div
                className="img img-services w-100"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1556816723-1ce827b9cfbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2783&q=80)',
                }}
              ></div>
            </div>

            <div className="col-md-4">
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center\">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-left pl-4">
                  <h3>Betters your bone health</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center\">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-left pl-4">
                  <h3>Increases your blood flow</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center\">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-left pl-4">
                  <h3>Keep a practice journal</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center\">
                  <span className="flaticon-meditation"></span>
                </div>
                <div className="text text-left pl-4">
                  <h3>Builds muscle strength</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Schedule range={'week'} />
      <RecentPosts />
      <LatestPhotos />
    </>
  );
}

export default Home
