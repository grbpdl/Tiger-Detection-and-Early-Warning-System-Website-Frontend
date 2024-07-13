import React from 'react';

function RangerService() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <p><span className="text-primary me-2">#</span>Ranger Services</p>
            <h1 className="display-5 mb-0">
              Roles <span className="text-primary">& </span>Resposibiities of  Ranger
            </h1>
          </div>
          <div className="col-lg-6">
            <div className="bg-primary h-100 d-flex align-items-center py-4 px-4 px-sm-5">
              <i className="fa fa-3x fa-mobile-alt text-white"></i>
              <div className="ms-4">
                <p className="text-white mb-0">Call admin in case of any assistance</p>
                <h2 className="text-white mb-0">+977 9873645788</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 gx-4">
          <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <i className="fa fa-3x fa-mobile-alt text-green-500 img-fluid mb-3"></i>
            <h5 className="mb-3">Continous Engagement with Community</h5>
            <span>Making public announcemets through community post</span>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <i className="fa fa-3x fa-mobile-alt text-green-500 img-fluid mb-3"></i>
            <h5 className="mb-3">Approve Posts</h5>
            <span>Approving or deleting the posts made in community forums.</span>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <i className="fa fa-3x fa-mobile-alt text-green-500 img-fluid mb-3"></i>
            <h5 className="mb-3">Add Danger Location</h5>
            <span>Adding the danger location on the Maps.</span>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <i className="fa fa-3x fa-mobile-alt text-green-500 img-fluid mb-3"></i>
            <h5 className="mb-3">Handle any emergencies</h5>
            <span>Handling the emergency situations that can occur through the tigers.</span>
          </div>
          
         
        
        </div>
      </div>
    </div>
  )
}

export default RangerService;
