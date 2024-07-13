import React, { useState, useEffect } from 'react';
import { APPROVED_IOT_DETECTIONS_URL } from '../../../api/urls';
import axios from '../../../api/axios';
import { Toaster, toast } from 'react-hot-toast';

export function ImageGallery() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1593970014662-be40fcbfe126?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526034332220-067b0f400e06?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]);

  const getImages = async () => {
    try {
      const response = await axios.get(APPROVED_IOT_DETECTIONS_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        const latestImages = response.data
          .sort((a, b) => b.id - a.id)
          .slice(0, 3)
          .map(item => item.IOTImageURL);
        setImages(latestImages);
      } else {
        toast.error("Did not receive the status code of 200");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error occurred while loading the images from IoT");
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <Toaster position='center' reverseOrder={false} className="bg-white" />
      {images.map((imageLink, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
