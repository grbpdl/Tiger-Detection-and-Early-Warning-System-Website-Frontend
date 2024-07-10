import React, { useState } from 'react';
import CarouselImage from './Carousel';

const HeaderSection = () => {
    const [videoSrc, setVideoSrc] = useState('');

    const playVideo = (src) => {
        setVideoSrc(src);
        const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
        videoModal.show();
    };

    const closeModal = () => {
        setVideoSrc('');
    };

    return (
        <div className="container-fluid bg-dark p-0 mb-5">
            <div className="row g-0 flex-column-reverse flex-lg-row">
                <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
                        <h1 className="display-4 text-light mb-5">
                            Some Tigers Detected by our systems
                        </h1>
                        <div className="d-flex align-items-center pt-4 animated slideInDown">
                            <a href="#victim" className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5">
                                Donate for a cause
                            </a>
                            <button
                                type="button"
                                className="btn-play"
                                data-bs-toggle="modal"
                                onClick={() => playVideo("https://www.youtube.com/embed/XvW9CiBQgYE")}
                                data-bs-target="#videoModal"
                            >
                                <span></span>
                            </button>
                            <h6 className="text-white m-0 ms-4 d-none d-sm-block">Watch Video</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <CarouselImage/>
                </div>
            </div>

            {/* Video Modal */}
            <div
                className="modal modal-video fade"
                id="videoModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={closeModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    className="embed-responsive-item"
                                    src={videoSrc ? `${videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0` : ''}
                                    id="video"
                                    allowFullScreen
                                    allowscriptaccess="always"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
