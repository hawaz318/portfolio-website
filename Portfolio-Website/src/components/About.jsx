import React from 'react'
import image3 from '../images/image3.jpg'
const About = ({ isDarkMode}) => {
  return (
    <div className={`py-20 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
    }`} id="about">
    
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2  className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items:center md:space-x-12">
      <img  src={image3} alt='' className="h-120 w-80 rounded object-cover mb-8 md:mb-0"/>
     <div className="flex-1">
      <p className="text-lg mb-8 px-4">
        I am a passinate full stuck developer with focus on bulding modern 
        and responsive web applications. With a strong foundatin 
        in the frontend and backend technologies,
        I strive to create seemless and efficent user experiance.
      </p>
      <div className="space-y-4">
          <div className="flex-items-center">
           <label htmlFor="htmlandcss" className="w-2/12">HTML AND CSS</label>
           <div className="grow bg-gray-800 rounded-full h-2.5 ">
             <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5
              rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

             </div>
           </div>
          </div>
          <div className="flex-items-center">
           <label htmlFor='htmlandcss' className='w-2/12'>React and JS</label>
           <div className="grow bg-gray-800 rounded-full h-2.5 ">
             <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5
              rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12">

             </div>
           </div>
          </div>
          <div className="flex-items-center">
           <label htmlFor='htmlandcss' className='w-2/12'>php</label>
           <div className="grow bg-gray-800 rounded-full h-2.5 ">
             <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5
              rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12">
           </div>
          </div>
      </div>  
      <div className="flex-items-center">
           <label htmlFor="htmlandcss" className="w-2/12">MySQL</label>
           <div className="grow bg-gray-800 rounded-full h-2.5 ">
             <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5
              rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12">

             </div>
           </div>
          </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About
