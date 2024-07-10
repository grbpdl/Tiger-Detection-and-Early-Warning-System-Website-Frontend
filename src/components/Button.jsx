import React from 'react'

function Button({ title, onClick }) {
  return (
    <div>
      <button
        className="bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
