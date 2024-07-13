import React, { useEffect } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { KHALTI_VERIFY_URL } from '../api/urls';
import axios from '../api/axios';
import { Toaster, toast } from 'react-hot-toast';

function SuccessPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const pidx = searchParams.get('pidx');
  const transaction_id = searchParams.get('transaction_id');
  const tidx = searchParams.get('tidx');
  const amount = searchParams.get('amount');
  const total_amount = searchParams.get('total_amount');
  const mobile = searchParams.get('mobile');
  const status = searchParams.get('status');
  const purchase_order_id = searchParams.get('purchase_order_id');
  const purchase_order_name = searchParams.get('purchase_order_name');

  useEffect(() => {
    donate();
  }, []);

  const donate = async () => {

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(KHALTI_VERIFY_URL, JSON.stringify({ pidx: pidx  }), {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data);
      if (response.status === 200) {
        toast.success(response.data.message);
        window.location.href = `https://test-pay.khalti.com/?pidx=${pidx}`;
        
    
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
      
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
    
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-green-400 sm:text-4xl">Congratulations</h1>
    
        <p className="mt-4 text-gray-500">Thank you for donating means a lot</p>
      </div>
      <a
            href="/"
            className="mt-6 inline-block rounded bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
    </div>
        </div>
  );
}

export default SuccessPage;
