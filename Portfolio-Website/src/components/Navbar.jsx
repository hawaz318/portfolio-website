
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white px-8 md:px-16 lg:px-24`}>
      <div className='container py-4 flex justify-between items-center'>

        {/* Logo */}
        <div className='text-2xl font-bold'>Melkamu</div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-8 items-center'>
          <a href='#home' className='hover:text-gray-400'>Home</a>
          <a href='#about' className='hover:text-gray-400'>About me</a>
          <a href='#projects' className='hover:text-gray-400'>Projects</a>
          <a href='#Skills' className='hover:text-gray-400'>Skills</a>
          <a href='#contact' className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Right Side */}
        <div className='flex items-center space-x-4'>
          {/* Dark/Light Mode Toggle */}
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <BsSun size={22} /> : <BsMoon size={22} />}
          </button>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Contact Me Button */}
          <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ml-4'>
           
          <a href='#contact'>Contact Me</a>
          
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 pb-4'>
          <a href='#home' onClick={toggleMenu} className='hover:text-gray-400'>Home</a>
          <a href='#about' onClick={toggleMenu} className='hover:text-gray-400'>About me</a>
          <a href='#projects' onClick={toggleMenu} className='hover:text-gray-400'>Projects</a>
          <a href='#services' onClick={toggleMenu} className='hover:text-gray-400'>Skills</a>
          <a href='#contact' onClick={toggleMenu} className='hover:text-gray-400'>Contact</a>
          {/* Contact button for mobile */}
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
