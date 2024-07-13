import React from 'react';
import Button from '../../components/Button';
import { APPROVE_DETECTIONS_URL,DECLINE_DETECTIONS_URL } from '../../api/urls';
import axios from '../../api/axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function DetectedPosts({ id, imageURL,camera, onPostChange }) {
  const navigate=useNavigate();

  const handleNavigation = () => {
    if (camera === 'one' || camera ==='One') {
      navigate('/livefeed1');
    } else if (camera === 'two'|| camera==='Two') {
      navigate('/livefeed2');
    } else {
      toast.error("Invalid camera value");
    }
  };

  
  const makePublic = async () => {
    // Handle make public logic
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.put(`${APPROVE_DETECTIONS_URL}${id}`, {}, { 
        
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.status === 200) {
       //approve post 
      
       onPostChange(id);
      } else {
        console.log(response.data);
        toast.error("wrong status code")
      }
    } catch (err) {
      console.log(err.message);
      toast.error("error occurred")
    }
  };

  const remove =  async () => {
    // Handle remove logic
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.delete(`${DECLINE_DETECTIONS_URL}${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.status === 200) {
       // ao sucesss
       onPostChange(id);
      } else {
        console.log(response.data);
        toast.error("wrong status code")
      }
    } catch (err) {
      console.log(err.message);
      toast.error("error occurred")
    }
  };

  return (
    <div className="max-w-xs container bg-black rounded-xl shadow-lg transform hover:shadow-black backdrop-blur-md bg-white/30">
      <div>
        <h1 className="text-2xl mt-2 ml-4 font-bold text-green-500 cursor-pointer hover:text-gray-900 transition duration-100 text-center" onClick={handleNavigation}>Cam {camera}</h1>
      </div>
      {/* Use the passed imageURL prop */}
      <img className="w-full cursor-pointer" src={imageURL} alt="" />
      <div className="flex p-4 justify-between">
        <div className="flex items-center space-x-2">
          <Button title="Make Public" onClick={makePublic} />
        </div>
        <div className="flex items-center space-x-2">
          <Button title="Delete" onClick={remove} />
        </div>
      </div>
    </div>
  );
}

export default DetectedPosts;
