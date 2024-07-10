import React from 'react'
import SystemDetections from './subcomponents/SystemDetections'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { adminnavLinks } from '../constants/navlinks';

function TigerDetections() {
    const navigate = useNavigate();
    const handleClick = () => {
      localStorage.removeItem("token");
      navigate('/');
    }
  return (
    <div>
        <Navbar navLinks={ adminnavLinks } activenavtitle="Tiger Detections" buttontitle="Logout" callback={handleClick} />
    <SystemDetections/>
    </div>
  )
}

export default TigerDetections
