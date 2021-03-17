import React from 'react';
import RecentPosts from './RecentPosts';
import LatestPhotos from './LatestPhotos';
import Schedule from './Schedule'
import ClassesHome from './ClassesHome'
import YogaBenefits from './YogaBenefits'
import Gallery from './Gallery'

function Home() {
  return (
    <>
      <section className="home-slider js-fullheight owl-carousel">
        <div
          className="slider-item js-fullheight"
          style={{
            backgroundImage: `url(/images/VStarYoga2.JPG)`,
          }}
        >
          <div
            // className="overlay"
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="container">
              <div
                className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
                data-scrollax-parent="true"
              >
                <div className="col-md-10 text ftco-animate text-center">
                  <h1 className="mb-4">Manifest the Life You Want to Live</h1>
                  <h3 className="subheading">
                    Participate Fully in Each Moment of Your Life and Witness
                    Infinite Possibilities Unfold Before You
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
        </div>
      </section>

      <YogaBenefits />
      <ClassesHome />
      {/* <Schedule range={'week'} /> */}
      {/* <RecentPosts /> */}
      <Gallery />
    </>
  );
}

export default Home
