import React from 'react'
import image11 from  '../images/image11.jpg'
const Home = ({ isDarkMode}) => {
  return (
    <div className={`text-center py-16 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
    }`} id="home">
      <img src={image11} alt="" 
       className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
      transition-transform duration-300 hover;scale-150'/>
      <h1 className='text-4xl font-bold' >
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Melkamu Ayalew </span>
        web-Developer
      </h1>
      <p className='mt-4 text-lg text-gray300'>
        I spacialized in bulding modern and respponsive website
        using react and javascript
      </p>
      <div className='mt-8 space-x-4'>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
      transform transition-transform duration-300 hover:scale-105 px-4 rounded-full'><a href='#contact'>Contact Me</a></button>
      <button className='bg-gradient-to-r from-green-400 to-gray-500 mx-auto text-white 
      transform transition-transform duration-300 hover:scale-105 px-4 rounded-full'>Resume</button>
      </div>
      
    </div>
  )
}

export default Home
