import React from 'react'

function Classes() {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80)',
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-3 bread" style={{ color: 'white' }}>
                Classes
              </h1>
              <p className="breadcrumbs">
                {/* <span className="mr-2">
                  <a href="home.html">Home</a>
                </span>{' '} */}
                <span style={{ color: 'white' }}>Remote and In Person</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes
