import React from 'react'
import Banner from './Banner';

function Classes() {
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80'
        }
        header={'Classes'}
        detail={'Remote and In Person'}
        textColor={'white'}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <a
                  href="#"
                  className="img w-100 mb-3"
                  style={{ backgroundImage: 'url(images/classes-4.jpg)' }}
                ></a>
                <div className="text w-100 text-center">
                  <h3>
                    <a href="#">Private &amp; Group Lessons</a>
                  </h3>
                  <p>Sept. 30, 2019 - 01:00pm - 03:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <a
                  href="#"
                  className="img w-100 mb-3"
                  style={{ backgroundImage: 'url(images/classes-4.jpg)' }}
                ></a>
                <div className="text w-100 text-center">
                  <h3>
                    <a href="#">Yoga for Pregnant</a>
                  </h3>
                  <p>Sept. 30, 2019 - 01:00pm - 03:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <a
                  href="#"
                  className="img w-100 mb-3"
                  style={{ backgroundImage: 'url(images/classes-4.jpg)' }}
                ></a>
                <div className="text w-100 text-center">
                  <h3>
                    <a href="#">Yoga for Beginners</a>
                  </h3>
                  <p>Sept. 30, 2019 - 01:00pm - 03:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <a
                  href="#"
                  className="img w-100 mb-3"
                  style={{ backgroundImage: 'url(images/classes-4.jpg)' }}
                ></a>
                <div className="text w-100 text-center">
                  <h3>
                    <a href="#">Yoga Barre</a>
                  </h3>
                  <p>Sept. 30, 2019 - 01:00pm - 03:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <a
                  href="#"
                  className="img w-100 mb-3"
                  style={{ backgroundImage: 'url(images/classes-5.jpg)' }}
                ></a>
                <div className="text w-100 text-center">
                  <h3>
                    <a href="#">Yoga Core</a>
                  </h3>
                  <p>Sept. 30, 2019 - 01:00pm - 03:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <a
                  href="#"
                  className="img w-100 mb-3"
                  style={{ backgroundImage: 'url(images/classes-6.jpg)' }}
                ></a>
                <div className="text w-100 text-center">
                  <h3>
                    <a href="#">Yoga Restore</a>
                  </h3>
                  <p>Sept. 30, 2019 - 01:00pm - 03:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes
