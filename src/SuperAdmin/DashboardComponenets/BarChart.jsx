import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from '../../api/axios';
import { ALL_DONATION_URL } from '../../api/urls';
import { Toaster, toast } from 'react-hot-toast';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getDonations();
  }, []);

  const getDonations = async () => {
    try {
      const response = await axios.get(ALL_DONATION_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setDonations(response.data);
      } else {
        toast.error("Did not receive the status code of 200");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error Occurred in catch expression");
    }
  };

  const data = {
    labels: donations.map(donation => donation.victimName),
    datasets: [
      {
        label: "Total Donations",
        data: donations.map(donation => donation.totalDonations),
        backgroundColor: "#04AF70",
        borderColor: "#04AF70",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <Toaster position='center' reverseOrder={false} className="bg-white" />
      <h1 className='text-center text-2xl font-semibold text-gray-800 lg:text-3xl mt-5'>Funds Raised</h1>
      <div className='h-96'>
        <Bar data={data} options={options} className='p-2 m-5' />
      </div>
    </div>
  );
}

export default BarChart;
