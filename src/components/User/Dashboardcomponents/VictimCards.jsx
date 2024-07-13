import React,{useState,useEffect} from "react";
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';
import { VICTIM_DONATION_URL } from '../../../api/urls';
import axios from '../../../api/axios';
import { Toaster,toast } from 'react-hot-toast';

function VictimCards({ id,
  victimName,
  victimAge,
  victimAddress,
  victimPhoto,
  victimDescription,
  victimNumber  }) {
  const navigate = useNavigate();
  const donate = (id) => {
    // Your donate function logic here
    navigate('/payment', { state: { id } });

  }

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

  useEffect(() => {
    getDonations();
    
  }, []);

  return (
    <div>
       <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      <section className="bg-white  ">
        <div className=" p-10 mx-auto">
          <div className='flex'>
          <div className="w-1/2 h-full">
          <img 
            className=" object-cover object-center w-full h-full rounded-lg" 
            src={victimPhoto} 
            alt="Tiger Attack Survivor"
          />
        </div>
            <div className="flex-col text-center w-1/2 items-center">
              <p className="text-5xl font-semibold text-green-500">“</p>
              <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                A tiger attacks a man
              </h1>
              <p className="mt-6 text-gray-500 text-center">
                {victimDescription}
              </p>
              
              <div className="flex-row gap-1 items-center justify-start mt-12">
              <h3 className="mt-6 text-lg font-medium text-green-500">{ victimName}</h3>
                <p className="text-gray-600">Age:{victimAge}  Adress:{victimAddress}</p>
                <p className="text-gray-600">Donations Raised:{donation}</p>
                <Button title="Donate" onClick={() => donate(id)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VictimCards;
