import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { adminnavLinks } from '../constants/navlinks';
import ListofUsers from './subcomponents/ListofUsers';
import { LIST_USER_URL, DELETE_USER_URL } from '../api/urls'; // Import DELETE_USER_URL
import axios from '../api/axios';
import { Toaster, toast } from 'react-hot-toast';

function UserLists() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.get(LIST_USER_URL, {
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
      const response = await axios.get(`${DELETE_USER_URL}${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 202) {
        toast.success("User deleted successfully");
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
      <Navbar navLinks={adminnavLinks} activenavtitle="Users" buttontitle="Logout" callback={handleClick} />
      {users.map(user => (
        <ListofUsers
          key={user.id}
          name={`${user.first_name} ${user.last_name}`}
          userid={user.id}
          email={user.email}
          deleteUser={deleteUser} // Pass deleteUser function
        />
      ))}
    </div>
  );
}

export default UserLists;
