import React, { useEffect, useState } from 'react';
import Banner from './Banner'




function Gallery(props) {
const [pics, setPics] = useState([]);

async function getPics() {
  let picTitles = await fetch('/pics').then((pics) => pics.json());
  setPics(picTitles);
}

useEffect(() => {
  getPics()
},[])

console.log({ pics });
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
                <h2 className="mb-1">Gallery photos</h2>
              </div>
            </div>
          )}
          <div className="row">
            {pics.map((picTitle) => (
              <div className="col-md-3 ftco-animate" key={picTitle}>
                <a
                  href={`images/${picTitle}`}
                  className="gallery image-popup img d-flex align-items-center"
                  style={{
                    backgroundImage: `url(images/${picTitle})`,
                  }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram"></span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery
