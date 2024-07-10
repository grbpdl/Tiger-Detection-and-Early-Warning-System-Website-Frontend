import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { adminnavLinks } from '../constants/navlinks';
import ListofUsers from './subcomponents/ListofUsers';
import { LIST_RANGER_URL, DELETE_RANGER_URL } from '../api/urls'; // Import DELETE_RANGER_URL
import axios from '../api/axios';
import { Toaster, toast } from 'react-hot-toast';
import AddRangerForm from './subcomponents/AddRangerForm';


function RangerList() {
  const [users, setUsers] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);

  const getUsers = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.get(LIST_RANGER_URL, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setUsers(response.data);
      } else {
        toast.error("Did not receive the status code of 200");
      }
    } catch (err) {
      toast.error("Error occurred in catch expression");
    }
  }

  const deleteUser = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.get(`${DELETE_RANGER_URL}${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success("Ranger deleted successfully");
        setUsers(users.filter(user => user.id !== id));
      } else {
        toast.error("Failed to delete user");
      }
    } catch (err) {
      toast.error("Error occurred in catch expression");
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <div>
      <Toaster position='center' reverseOrder={false} className="bg-white" />
      <Navbar navLinks={adminnavLinks} activenavtitle="Rangers" buttontitle="Logout" callback={handleClick} />
      {users.map(user => (
        <ListofUsers
          key={user.id}
          name={`${user.first_name} ${user.last_name}`}
          userid={user.id}
          email={user.email}
          deleteUser={deleteUser} // Pass deleteUser function
        />
      ))}
      <div className="fixed bottom-4 right-4">
    <button className="bg-purple-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={() => setOpenPopup(true)}>
    Add Rangers
  </button>
</div>
<AddRangerForm openPopUp={openPopup} closePopUp={HandleRemovePopUp} refreshUsers={getUsers} />
    </div>
  );
}

export default RangerList;
