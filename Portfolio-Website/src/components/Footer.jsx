import React from 'react'
import { FaTelegram,FaInstagram,FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = ({isDarkMode}) => {
  return (
    <footer className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-900 text-black'
      }`}>
        <div className='container mx-auto px-8 md:px_16 lg:px-24'>
            <div className="flex flex-col md:flex-row md:space-x-12 itens-center mb-4">
             <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Melkamu</h3>
                <p className='text-gray-100'>
                  I passinate Web-developmet.
                </p>
             </div>
             <div>
                <form className='flex iten-center justify-center'>
                <input type="email" placeholder="enter your Email"
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none
            focus:border-green-400'/>
                    <button type="submit" 
                    className="bg-gradient-to-r from-green-300 to-yellow-700 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
                </form>
             </div>
            </div>
            <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p  className='text-gray-400'>
                &copy; {new Date().getFullYear()} Melkamu.All rights reserved.
            </p>
            <div className='flex space-x-4 my-4 md:my-0'>
                <a href="#" className='text-gray-400 hover:text-white'>
                    <FaTelegram />
                </a>
                <a href="#" className='text-gray-400 hover:text-white'>
                    <FaInstagram className='text-gray-400 hover:text-white'/>
                </a>
                <a href="https://linkedin.com/in/melkamu-ayalew-005589359" className='text-gray-400 hover:text-white'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/melkacode" className='text-gray-400 hover:text-white'>
                    <FaGithub />
                </a>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer