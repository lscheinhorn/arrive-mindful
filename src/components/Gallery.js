import React from 'react';
import Banner from './Banner'

function Gallery(props) {
  return (
    <>
      {props.banner ? (
        <Banner
          background={
            'https://images.unsplash.com/photo-1502154882433-a614dba12819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80'
          }
          header={'Gallery'}
          detail={'Snapshots and Moments'}
        />
      ) : null}

      <section className="ftco-gallery ftco-section">
        <div className="container-fluid px-md-5">
          {props.banner ? null : (
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section ftco-animate text-center">
                <h2 className="mb-1">See the latest photos</h2>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-1.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1562776854-d151b0dd5ec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-2.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1611800065476-b295f882c8ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2904&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-3.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1528319355578-ebbbc586afac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-4.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1591291621164-2c6367723315?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>

            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-5.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1501718037961-bb722c970f08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2766&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-6.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1552911163-16e36d8519ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-7.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1520363147109-9ab9d1c8f8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2848&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href="images/gallery-8.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1502139214982-d0ad755818d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery
