import React from 'react';
import Button from '../../Button';
import { ADD_DELETE_POST_URL } from '../../../api/urls';
import axios from '../../../api/axios';
import { Toaster,toast } from 'react-hot-toast';

function AdminPost({ id, name, date, time, description, image, onApprove, onDecline }) {
  
  const approve = async () => {
    try {
        const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.post(`${ADD_DELETE_POST_URL}${id}`, {}, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
      
      if (response.status === 202) {
        toast.success(response.data.message);
        onApprove(id); // Update the state in VerifyPost component
      } else {
       
       toast.error(response.data.message)
      }
    } catch (err) {
      console.log(err);
      toast.error("Internal error occurred")
    }
  }

  const decline = async () => {
    try {
        const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.delete(`${ADD_DELETE_POST_URL}${id}`, { 
        headers: {
            'Authorization': `Bearer ${token}`
        },
        
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        onDecline(id); // Update the state in VerifyPost component
      } else {
      
        toast.error(response.data.message)
      }
    } catch (err) {
      console.log(err);
      toast.error("Internal error occurred")
    }
  }

  return (
    <div className="flex justify-center relative top-1/3 m-5 w-auto  border-black border-2 bg-green-500">
        <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border  rounded-md bg-gray-200   w-full">
        <div className="relative flex gap-4 w-screen m-2">
          <img src={image} className="relative rounded-lg -top-8 -mb-4 bg-white border-black border-2 h-20 w-20" alt="" loading="lazy" />
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap text-green-500">{name}</p>
            </div>
            <span className="text-gray-400 text-sm italic">{date} {time}</span>
          </div>
          <Button title="Approve" onClick={approve} />
          <Button title="Decline" onClick={decline} />
        </div>
        <p className="-mt-4 text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default AdminPost;
