import React from 'react'
import Navbar from '../Navbar';
import { usernavLinks } from '../../constants/navlinks';
import { useNavigate } from 'react-router-dom';
import Footer from './Dashboardcomponents/Footer';
import VictimCards from './Dashboardcomponents/VictimCards';
import Stats from './Dashboardcomponents/Stats';
import EmergencyContacts from './Dashboardcomponents/EmergencyContacts';
import TigerInfo from './Dashboardcomponents/TigerInfo';
import HeaderSection from './Dashboardcomponents/HeaderSection';
import VictimCarousel from './Dashboardcomponents/VictimCarousel';
import Button from '../Button';
import { ImageGallery } from './Dashboardcomponents/ImagesGallery';

function UserDashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }
  return (
    <div >
        
        <Navbar navLinks={usernavLinks} activenavtitle="Home" buttontitle="Login" callback={handleClick} />
        <HeaderSection/>
        
      <div id='victim' className='victim-section '>
        <h1 className='text-center text-2xl font-semibold text-gray-800 lg:text-3xl '>Victims of Tiger Attacks</h1>
       <VictimCarousel/>
      </div>
      <TigerInfo className="#blogs"/>
      <Stats className="#stats"/>
      <h1 className='text-center text-2xl font-semibold text-gray-800 lg:text-3xl '>Recent Tiger Detections by our System</h1>
      <ImageGallery/>
      <EmergencyContacts className="#contacts"/>
    <Footer/>
    </div>
  )
}

export default UserDashboard
