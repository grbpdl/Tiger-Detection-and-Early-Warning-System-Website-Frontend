import React from 'react'
import { Toaster,toast } from 'react-hot-toast';
import Navbar from '../Navbar';
import { rangernavLinks } from '../../constants/navlinks';
import { useNavigate } from 'react-router-dom';
import RangerStats from './dashboardcomponents/RangerStats';
import HeroSection from './dashboardcomponents/HeroSection';
import RangerService from './dashboardcomponents/RangerService';

function RangerDashboard() {
    const navigate = useNavigate();
    const handleClick = () => {
      localStorage.removeItem("token");
      navigate('/');
    }
  return (
    
    <div>
      <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      <Navbar navLinks={ rangernavLinks  } activenavtitle="Home" buttontitle="Logout" callback={handleClick} />
      <HeroSection/>
      <RangerService/>
      <RangerStats/>
    </div>
  )
}

export default RangerDashboard
