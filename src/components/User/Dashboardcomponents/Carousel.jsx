import React,{useState,useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {APPROVED_IOT_DETECTIONS_URL  } from '../../../api/urls';
import axios from '../../../api/axios';
import { Toaster,toast } from 'react-hot-toast';

function CarouselImage() {


  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1593970014662-be40fcbfe126?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526034332220-067b0f400e06?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]);

 


  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      >
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <div className="w-100 h-auto overflow-hidden">
              <img
                alt="sample_file"
                src={URL}
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default CarouselImage;
