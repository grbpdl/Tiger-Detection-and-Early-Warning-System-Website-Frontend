import React from 'react';
import Button from '../../components/Button';
import { Toaster, toast } from 'react-hot-toast';

function ListofUsers({ name, userid, email, deleteUser }) { // Accept deleteUser as a prop

  const handleDelete = () => {
    deleteUser(userid);
  }

  return (
    <div className="flex justify-center relative top-1/3 m-5 w-auto  border-black border-2 bg-green-500">
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border  rounded-md bg-gray-200   w-full">
        <div className="relative flex gap-4 w-full ">
          <div className="flex flex-col w-full ">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap text-green-500">{name}</p>
            </div>
            <span className="text-gray-400 text-sm italic">User id:{userid}</span>
          </div>
          <Button title="Delete" onClick={handleDelete} />
        </div>
        <p className="-mt-4 text-gray-500">{email}</p>
      </div>
    </div>
  );
}

export default ListofUsers;
