import React, { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from '../../api/axios';
import { VICTIM_DONATION_URL} from '../../api/urls';
import { Toaster, toast } from 'react-hot-toast';
// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {

  useEffect(() => {
    getDonations();
    
  }, []);
  const getDonations = async () => {
    try {
    
      const response = await axios.get(`${VICTIM_DONATION_URL}${2}/donations`, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
       
        // setDonation(response.data);
     
        console.log(response.data);
        
      } else {
        toast.error("Didnot receive the status code of 200")
      }
    } catch (err) {
      console.log(err);
      toast.error("Error Occured in catch expression")
    }
  }

    const detectionandalerts = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Tigers Detected",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(0,255,0,1)",
            borderColor: "rgba(0,255,0,1)"
          },
          {
            label: "Alerts Send",
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            backgroundColor: "#742774",
            borderColor: "#742774"
          }
        ]
      };
    const tigerdeaths = {
        labels: ["2070/72", "2072/74", "2074/76", "2076/78", "2078/80", "2080/81"],
        datasets: [
          {
            label: "Tigers Fatilities",
            data: [23, 33, 40, 55, 65, 96],
            fill: true,
            backgroundColor: "rgba(255,0,0,1)",
            borderColor: "rgba(255,0,0,1)"
          },
        ]
      };
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        
      };
      
  return (
    <div className='p-2 m-5'>
      <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
       <h1 className='text-center text-2xl font-semibold text-gray-800 lg:text-3xl mt-5 '>TIger Deaths in Nepal</h1>
       <div className='h-96'><Line data={tigerdeaths} options={chartOptions} /> </div>
       <h1 className='text-center text-2xl font-semibold text-gray-800 lg:text-3xl mt-5 '>OUR SYSTEM DETECTIONS</h1>
       <div className='h-96'><Line data={detectionandalerts}  options={chartOptions}/></div>
    </div>
  )
}

export default LineChart;
