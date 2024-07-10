import React from 'react'
import { Toaster,toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { adminnavLinks } from '../constants/navlinks';
import { useNavigate } from 'react-router-dom';
import LineChart from './DashboardComponenets/LineChart';
import BarChart from './DashboardComponenets/BarChart';
import HeroSectionAdmin from './DashboardComponenets/HeroSectionAdmin';
import AdminStats from './DashboardComponenets/AdminStats';

function SuperAdminDashboard() {
    const navigate = useNavigate();
    const handleClick = () => {
      localStorage.removeItem("token");
      navigate('/');
    }
  return (
    
    <div>
      <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      <Navbar navLinks={ adminnavLinks } activenavtitle="Home" buttontitle="Logout" callback={handleClick} />
      <HeroSectionAdmin/>
      <AdminStats/>
      <LineChart/>
      <BarChart/>
    </div>
  )
}

export default SuperAdminDashboard
