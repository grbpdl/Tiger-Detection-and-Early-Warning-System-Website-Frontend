import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LIST_VICTIM_URL } from '../../../api/urls';
import axios from '../../../api/axios';
import { Toaster, toast } from 'react-hot-toast';
import VictimCards from './VictimCards';

function VictimCarousel() {
  const [victimpost, setVictimpost] = useState([]);

  const getVictims = async () => {
    try {
      const response = await axios.get(LIST_VICTIM_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setVictimpost(response.data);
      } else {
        toast.error("Did not receive the status code of 200");
      }
    } catch (err) {
      toast.error("Error Occurred in catch expression");
    }
  };

  useEffect(() => {
    getVictims();
  }, []);

  return (
    <div className="box">
      <Toaster position='center' reverseOrder={false} className="bg-white" />
      <Carousel 
        useKeyboardArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {victimpost.map((victim) => (
          <VictimCards
            key={victim.id}
            id={victim.id}
            victimName={victim.victimName}
            victimAge={victim.victimAge}
            victimAddress={victim.victimAddress}
            victimPhoto={victim.victimPhoto}
            victimDescription={victim.victimDescription}
            victimNumber={victim.victimNumber}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default VictimCarousel;
