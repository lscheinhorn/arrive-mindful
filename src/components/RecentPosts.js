import React from 'react'

function RecentPosts() {

  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-1">Recent Posts</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single"
                  className="block-20"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1529528973824-564052161097?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80)',
                  }}
                ></a>
                <div className="text w-100 mt-3">
                  <div className="meta">
                    <div>
                      <a href="#">July. 14, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Is wellness the new luxury</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single"
                  className="block-20"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1595948215841-6cb1669192e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80)',
                  }}
                ></a>
                <div className="text w-100 mt-3">
                  <div className="meta">
                    <div>
                      <a href="#">July. 14, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Is wellness the new luxury</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single"
                  className="block-20"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
                  }}
                ></a>
                <div className="text w-100 mt-3">
                  <div className="meta">
                    <div>
                      <a href="#">July. 14, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Is wellness the new luxury</a>
                  </h3>
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
    </>
  );
}

export default RecentPosts
