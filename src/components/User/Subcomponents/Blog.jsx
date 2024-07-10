import React from 'react'

function Blog({
    title,content,image
}) {
  return (
    <div className='m-10'>
      
      <h1 className="font-semibold text-5xl text-[#C73D83] p-2 ">{title} </h1>
         
      <div className=' flex flex-row'>
      <p className='p-2'>{content}</p>

        <img src={image} alt="images of tiger" height={500} width={500} />
      </div>
    </div>
  )
}

export default Blog
