import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { KHALTI_URL } from '../api/urls';
import axios from '../api/axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const [amount, setAmount] = useState('');

  const id = location.state?.id;

  if (!id) {
    // Redirect to a different page or show an error if id is missing
    toast.error("No victim ID provided. Redirecting to home.");
    navigate('/');
    return null;
  }


  const donate = async () => {
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(`${KHALTI_URL}${id}`, JSON.stringify({ amount: parseFloat(amount) }), {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        const { payment_url } = response.data;
        window.open(payment_url, '_blank');  // Redirect to the payment URL
      } else {
        toast.error("Did not receive the status code of 200");
      }
    } catch (err) {
      console.log(err)
      toast.error("Error occurred in catch expression");
    }
  }

  return (
    <div>
      <Toaster position='center' reverseOrder={false} className="bg-white" />
      <div className="flex flex-col items-center">
        <p>Payment for Victim ID: {id}</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to donate"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <Button title="Donate" onClick={donate} />
      </div>
    </div>
  );
}

export default Payment;
