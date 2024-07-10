import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { adminnavLinks } from '../constants/navlinks';
import AddVictimForm from './subcomponents/AddVictimForm';
import VictimDetail from './subcomponents/VictimDetail';
import { LIST_VICTIM_URL } from '../api/urls';
import axios from '../api/axios';
import { Toaster, toast } from 'react-hot-toast';

function VictimsList() {
  const [victimpost, setVictimpost] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);

  const getVictims = async () => {
    try {
      const response = await axios.get(LIST_VICTIM_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setVictimpost(response.data);
        console.log(response.data);
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

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <div>
      <Toaster position='center' reverseOrder={false} className="bg-white"></Toaster>
      <Navbar navLinks={adminnavLinks} activenavtitle="Victims" buttontitle="Logout" callback={handleClick} />
      {victimpost.map((victim) => (
        <VictimDetail
          key={victim.id}
          id={victim.id}
          victimName={victim.victimName}
          victimAge={victim.victimAge}
          victimAddress={victim.victimAddress}
          victimPhoto={victim.victimPhoto}
          victimDescription={victim.victimDescription}
          victimNumber={victim.victimNumber}
          refreshVictimList={getVictims} // Pass the refresh function as a prop
        />
      ))}
      <div className="fixed bottom-4 right-4">
        <button className="bg-purple-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={() => setOpenPopup(true)}>
          Add Victims
        </button>
      </div>
      <AddVictimForm openPopUp={openPopup} closePopUp={HandleRemovePopUp} refreshUsers={getVictims} />
    </div>
  )
}

export default VictimsList;
