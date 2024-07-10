import React from 'react'

function HeroSectionAdmin() {
  return (
    <div className="container-fluid bg-dark p-0 mb-5">
            <div className="row g-0 flex-column-reverse flex-lg-row">
                <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
                        <h1 className="display-4 text-light mb-5">
                            Welcome to the Admin Dashboard
                        </h1>
                        <div className="d-flex align-items-center pt-4 animated slideInDown">
                            <h6 className="text-white m-0 ms-4 d-none d-sm-block">Manage everything on the platform</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <img src="https://images.unsplash.com/photo-1588534510807-86dfb5ed5d5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="tiger image"  />
                </div>
            </div>

        </div>
  )
}

export default HeroSectionAdmin
