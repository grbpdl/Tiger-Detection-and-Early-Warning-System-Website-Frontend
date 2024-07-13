import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from './Button.jsx';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';


const Navbar = ({navLinks, activenavtitle,buttontitle,callback}) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(activenavtitle);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavItemClick = (title) => {
    setActive(title);
    setNav(false);  // Close the mobile menu when an item is clicked
  };

 


  return (
   
    <nav className='bg-dimwhite flex justify-between items-center h-auto px-4 text-white sticky  '>
      {/* Logo */}
    
      <img src="../../src/assets/landscape_logo.png" alt="logo" className="w-[100px] h-[42px]" />
        <div className='w-full'></div>

      {/* Desktop Navigation */}
   
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 p-3">
       
       
        {navLinks && navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-green-600" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleNavItemClick(nav.title)}
          >
             {nav.id.startsWith('#') ? (
              <ScrollLink to={nav.id.slice(1)} smooth={true} duration={500}>
                <p>{nav.title}</p>
              </ScrollLink>
            ) : (
              <Link to={nav.id}>
                <p className=' whitespace-nowrap inline-block'><span>{nav.title}</span></p>
              </Link>
            )}
          </li>
        ))}
      </ul>

      <Button title={buttontitle} onClick={callback} />
      

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img src="../../src/assets/website_logo.png" alt="logo" className="w-[100px] h-[42px]" />

        {/* Mobile Navigation Items */}
        {navLinks && navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-purple-600" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => () => handleNavItemClick(nav.title)}
          >
             <Link to={nav.id}><p>{nav.title}</p></Link>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default Navbar;