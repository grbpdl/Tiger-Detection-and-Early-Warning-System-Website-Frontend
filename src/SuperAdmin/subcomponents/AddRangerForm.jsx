import React from 'react'
import axios from '../../api/axios';
import { useFormik } from 'formik';
import {ADD_RANGER_URL} from '../../api/urls';
import { loginValidation } from '../../helper/validate';
import { Toaster,toast } from 'react-hot-toast';

const AddRangerForm = ({ openPopUp, closePopUp ,refreshUsers }) => {


    const formik = useFormik({
        initialValues : {
            firstname:'',
            lastname:'',
            email: '',
            password:''
        },
        // validate:loginValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit :async values => {
            // console.log(values.email);
            // console.log(values.password);

        
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.post(ADD_RANGER_URL,
                    JSON.stringify({first_name:values.firstname,last_name:values.lastname,email:values.email,password:values.password,is_staff:true}),
                    {
                        headers: { 'Authorization': `Bearer ${token}`,
                             'Content-Type': 'application/json' },
                    }
                );
                if(response.status==200){
                    closePopUp();
                        toast.success(response.data.message)
                        refreshUsers();
                    
                
                }
                else{
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
        className='p-2 bg-gray-500 w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='w-full p-3 justify-center items-center'>
          <h2
            className='font-semibold py-3 text-center text-xl text-green-500'>
             Add Ranger
          </h2>
          <form className="mt-6 bg-gray-500 rounded-md shadow-md p-6 m-auto " onSubmit={formik.handleSubmit}>
          <div className="mb-2">
              <label
                  htmlFor="firstname"
                  className="block text-sm font-poppins text-white"
              >
                  First name
              </label>
              <input  {...formik.getFieldProps('firstname')}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mb-2">
              <label
                  htmlFor="lastname"
                  className="block text-sm font-poppins text-white"
              >
                  Last name
              </label>
              <input  {...formik.getFieldProps('lastname')}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mb-2">
              <label
                  htmlFor="email"
                  className="block text-sm font-poppins text-white"
              >
                  Email
              </label>
              <input  {...formik.getFieldProps('email')}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mb-2">
              <label
                  htmlFor="password"
                  className="block text-sm font-poppins text-white"
              >
                  Password
              </label>
              <input  {...formik.getFieldProps('password')}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mt-6">
              <button type='submit' className="w-full px-4 py-2 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  ADD Ranger
              </button>
          </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default AddRangerForm
