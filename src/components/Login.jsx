import React from 'react'
import Loader from './Loader/Loader'
import { useFormik } from 'formik';
import { Toaster,toast } from 'react-hot-toast';
import { loginValidation } from '../../src/helper/validate';
import {LOGIN_USER_URL} from '../api/urls';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate=useNavigate();

    const formik = useFormik({
        initialValues : {
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
                const response = await axios.post(LOGIN_USER_URL,
                    JSON.stringify({email:"admin@gmail.com",password:"ishan@123"}),
                  
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                if(response.status==202){

                    console.log(response.data);
                if(response.data.role=="User")
                    toast.error("Cannot login as User");
                if(response.data.role=="Admin")
                    {   localStorage.setItem('token', JSON.stringify(response.data.access));
                        toast.success("Logged in Sucessfully");
                        navigate('/admindashboard')
                    }
                if(response.data.role=="Ranger")
                    {
                        toast.success("Logged in Sucessfully");
                        localStorage.setItem('token', JSON.stringify(response.data.access));
                        navigate('/rangerdashboard')
                    }
                  
                




                }
                else{
                    console.log(response.data);
                toast.error(response.data.message)
                }
                
                // if(response?.data?.user?.role=="user")
                // navigate('/userdashboard')
                // if(response?.data?.user?.role=="service")
                // navigate('/servicedashboard')
                // if(response?.data?.user?.role=="admin")
                // navigate('/admindashboard')
                
               
            } catch (err) {
                console.log(err.message);
                
                toast.error("error occured")
         }
        }
        
})

 const loading=false;
  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
 

 
  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
  <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
      
  <div className="w-full p-6 m-auto bg-gray-500  rounded-md shadow-md lg:max-w-xl ">
  <h1 className="font-poppins font-normal cursor-pointer text-[30px]  text-green-500">Login</h1>
      <form className="mt-6 bg-gray-500 rounded-md shadow-md p-6 m-auto  " onSubmit={formik.handleSubmit}>
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
                  Login
              </button>
          </div>
      </form>

      
  </div>

</div>

  </>
  )}
</>
  )
}

export default Login
