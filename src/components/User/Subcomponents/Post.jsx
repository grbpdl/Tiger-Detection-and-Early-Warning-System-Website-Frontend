import React from 'react'

function Post({name,date,time,description,image}) {
  return (
    <div className="flex justify-center relative top-1/3 m-5 w-auto  border-black border-2 bg-green-500">
<div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border  rounded-md bg-gray-200   w-full">
    <div className="relative flex gap-4 w-full">
        <img src={image} className="relative rounded-lg -top-8 -mb-4 bg-white border-black border-2 h-20 w-20" alt="" loading="lazy"/>
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap text-green-500">{name}</p>
                <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
            </div>
            <span className="text-gray-400 text-sm  italic">{date}  {time}</span>
        </div>
    </div>

    <p className="-mt-4 text-gray-500">{description}</p>

</div>



</div>
  )
}

export default Post
