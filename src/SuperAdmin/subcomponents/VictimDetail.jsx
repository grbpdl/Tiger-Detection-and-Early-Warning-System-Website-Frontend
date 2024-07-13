import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import axios from '../../api/axios';
import { DELETE_VICTIM_URL ,VICTIM_DONATION_URL} from '../../api/urls';
import { Toaster, toast } from 'react-hot-toast';

function VictimDetail({ id, victimName, victimAge, victimAddress, victimPhoto, victimDescription, victimNumber, refreshVictimList }) {

  const [donation, setDonation] = useState([0]);

  const getDonations = async () => {
    try {
    
      const response = await axios.get(`${VICTIM_DONATION_URL}${id}/donations`, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
       
        setDonation(response.data.totalDonations);
        
      } else {
        toast.error("Didnot receive the status code of 200")
      }
    } catch (err) {
      // console.log(err.message);
      toast.error("Error Occured in catch expression")
    }
  }

  const deleteUser = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.delete(`${DELETE_VICTIM_URL}${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success(response.data);
        refreshVictimList();  // Call the refresh function
      } else {
        toast.error("Failed to delete user wrong code");
      }
    } catch (err) {
      toast.error("Error occurred in catch expression");
      console.log(err);
    }
  }
  useEffect(() => {
    getDonations();
    
  }, []);

  return (
    <div className="flex justify-center relative top-1/3 m-5 w-auto border-black border-2 bg-green-500">
      <Toaster position='center' reverseOrder={false} className="bg-white"></Toaster>
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-md bg-gray-200 w-full">
        <div className="relative flex gap-4 w-full">
          <img src={victimPhoto} alt="" loading="lazy" className='w-30 h-20' />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap text-green-500">{victimName}</p>
            </div>
            <span className="text-gray-400 text-sm italic">Victim id: {id}</span>
          </div>
          <Button title="Delete" onClick={() => deleteUser(id)} />
        </div>
        <p className="-mt-4 text-gray-500">Name: {victimName}</p>
        <p className="-mt-4 text-gray-500">Age: {victimAge}</p>
        <p className="-mt-4 text-gray-500">Address: {victimAddress}</p>
        <p className="-mt-4 text-gray-500">Total donations: {donation}</p>
        <p className="-mt-4 text-gray-500">Phone number: {victimNumber}</p>
      </div>
    </div>
  );
}

export default VictimDetail;
