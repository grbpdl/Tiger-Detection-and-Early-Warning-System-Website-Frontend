import React from 'react'
import axios from '../../../api/axios';
import { useFormik } from 'formik';
import {RANGER_ADD_POST_URL} from '../../../api/urls';
import { loginValidation } from '../../../helper/validate';
import { Toaster,toast } from 'react-hot-toast';

const AddPost = ({ openPopUp, closePopUp }) => {


    const formik = useFormik({
        initialValues : {
            title:'',
        },
        // validate:loginValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit :async values => {
            // console.log(values.email);
            // console.log(values.password);

        
            try {
              const token = JSON.parse(localStorage.getItem('token'));
                const now = new Date();

// Get the ISO string
const isoString = now.toISOString();

// Split the ISO string into date and time components
const [date, timeWithMs] = isoString.split('T');

// Remove the milliseconds and the 'Z' character from the time component
const time = timeWithMs.split('.')[0];

                const response = await axios.post(RANGER_ADD_POST_URL,
                    JSON.stringify({postTitle:values.title,postDate:date,postTime:time,latitude:0,longitude:0}),
                    {
                      headers: { 'Authorization': `Bearer ${token}`,
                           'Content-Type': 'application/json' },
                  }
                );
                if(response.status==202){
        
                  closePopUp();
                  toast.success(response.data.message);
                    
                
                }
                else{
                  console.log(response);
                    console.log(response.data);
                toast.error("wrong status code")
                }
                
                
               
            } catch (err) {
                console.log(err.message);
                
                toast.error("error occured")
         }
        }
        
})


  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
         <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      <div 
        className='p-2 bg-gray-500 w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg '>
        <div
          className='w-full p-3 justify-center items-center'>
          <h2
            className='font-semibold py-3 text-center text-xl text-green-500 '>
             Add Post
          </h2>
          <form className="mt-6 bg-gray-500 rounded-md shadow-md p-6 m-auto " onSubmit={formik.handleSubmit}>
          <div className="mb-2">
              <label
                  htmlFor="title"
                  className="block text-sm font-poppins text-white"
              >
                  Add Announcements
              </label>
              <input  {...formik.getFieldProps('title')}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>

          <div className="mt-6">
              <button type='submit' className="w-full px-4 py-2 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-600">
                  ADD Post
              </button>
          </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default AddPost
