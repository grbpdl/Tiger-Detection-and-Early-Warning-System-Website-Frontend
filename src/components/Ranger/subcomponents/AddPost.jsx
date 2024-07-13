import React,{useState} from 'react'
import axios from '../../../api/axios';
import { useFormik } from 'formik';
import {RANGER_ADD_POST_URL} from '../../../api/urls';
import { addPostValidaton } from '../../../helper/validate';
import { Toaster,toast } from 'react-hot-toast';

const AddPost = ({ openPopUp, closePopUp }) => {
  const [fileError, setFileError] = useState(null);

    const formik = useFormik({
        initialValues : {
            title:'',
            uploadfile: null,
        },
        validate:addPostValidaton,
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


//image upload
let uploadedImageUrl = '';
                if (values.uploadfile) {
                    const formData = new FormData();
                    formData.append('file', values.uploadfile);
                    formData.append('upload_preset', 'tiger_preset');
                    
                    const uploadResponse = await fetch('https://api.cloudinary.com/v1_1/dzcdirj0l/image/upload', {
                        method: 'POST',
                        body: formData,
                    });
                    
                    const uploadData = await uploadResponse.json();
                    uploadedImageUrl = uploadData.secure_url;
                    console.log(uploadedImageUrl)
                
                }
                



                const response = await axios.post(RANGER_ADD_POST_URL,
                    JSON.stringify({postTitle:values.title,postDate:date,postTime:time,latitude:0,longitude:0,postImageURL:uploadedImageUrl,}),
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

    if (file && !allowedTypes.includes(file.type)) {
        setFileError('Unsupported file type. Please upload a jpg, jpeg, png, or pdf file.');
        formik.setFieldValue('uploadfile', null);
    } else if (file && file.size > maxSize) {
        setFileError('File size exceeds 2MB. Please upload a smaller file.');
        formik.setFieldValue('uploadfile', null);
    } else {
        setFileError(null);
        formik.setFieldValue('uploadfile', file);
    }
};

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

          <div className="mb-2">
                            <label htmlFor="uploadfile" className="block text-sm font-poppins text-white">
                                Upload Image
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        {formik.values.uploadfile ? (
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{formik.values.uploadfile.name}</p>
                                        ) : (
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> 
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-500 dark:text-gray-400">.jpg,.jpeg,.png,.pdf</p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                            {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
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
