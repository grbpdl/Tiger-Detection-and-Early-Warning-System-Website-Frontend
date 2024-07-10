import React from 'react'

function TigerInfo() {
  return (
    <div>
       <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p><span className="text-primary me-2">#</span>How to survive a tiger attack</p>
            <h1 className="display-5 mb-4">
              What Should you do if you see a 
              <span className="text-primary"> tiger</span>?
            </h1>
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
              nonumy clita sit at, sed sit sanctus dolor eos.
            </p>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>
              Dont Panic
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>
              Do not turn back
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>
              Move facing tiger calmly
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>
              Climb a tree if possible
            </h5>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="img-border">
              <img className="img-fluid" src="https://t4.ftcdn.net/jpg/05/98/95/55/240_F_598955555_YRoZNzPkTDviZeEPqLi7bTNz2tNudJAS.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TigerInfo
