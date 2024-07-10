import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
        <p className='text-center font-extrabold'>BaaagVaag</p>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center  leading-relaxed text-gray-500">
       Early Warning and Tiger Detection System.<br/> Saving Lives through techonology.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Tiger Detections </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#victims"> Victims </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#blogs"> Blogs </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#stats"> Stats </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#contacts"> Contacts </a>
      </li>

    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Facebook</span>
          <p>Facebook</p>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Instagram</span>
          <p>Instagram</p>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Twitter</span>
          <p>Twitter</p>
        </a>
      </li>

      
    </ul>
  </div>
</footer>
    </div>
  )
}

export default Footer
