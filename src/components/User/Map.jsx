import React from 'react'
import Navbar from '../Navbar';
import { usernavLinks } from '../../constants/navlinks';
import { useNavigate } from 'react-router-dom';
import OpenStreetMap from './Subcomponents/OpenStreetMap';
import Button from '../Button';
function Map() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }
  return (
    <div>
        <Navbar navLinks={usernavLinks} activenavtitle="TigerMap" buttontitle="Login" callback={handleClick} >
          </Navbar>

      <div>
      {/* <h1 className="font-semibold text-5xl text-[#C73D83] p-2 ">Tiger Prone Zones </h1> */}
      </div>
      <div className=' w-full max-h-full overflow-hidden'>  <OpenStreetMap/></div>
    
    </div>
  )
}

export default Map
