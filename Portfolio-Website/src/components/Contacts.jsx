import React from 'react'
import {FaEnvelope, FaPhone, FaMapMarkedAlt} from 'react-icons/fa'
const conacts = () => {
  return (
    <div className="bg-gray-200 text-black py-20" id='contact'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2  className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="flex flex-col md:flex-row items:center md:space-x-12">
      <div className='flex-1'>
      <h1>Let's talk</h1>
      <p>I am open  to discussing web development projects or partnership opportunities.</p>
       <div className='mb-4- mt-8'>
         <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope> 
       
        <a href= "malito:melkamuayal21@gmail.com" className='hover:underline'>
            melkamuayal21@gmail.com
        </a>
      </div> 
      <div className='mb-4- mt-8'>
         <FaPhone className="inline-block text-green-400 mr-2"></FaPhone> 
        <span>+251915869031</span>
      </div>
       <div className='mb-4- mt-8'>
        <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
        <span>Bahir dar,Ethiopia</span>
      </div>
       </div> 
      <div className='flex-1 w-full'>
        <form className='spacec-y-4'>
          <div>
            <label htmlFor="name">Name</label>
            <input type='text' className='w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none
            focus:border-green-400'
            placeholder='Enter Your Name'/>
          </div>
          <div>
            <label htmlFor="PhoneNumber" className='block mb-2'>Phone Number</label>
            <input type='text' className='w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none
            focus:border-green-400'
            placeholder='Enter Your nummber'/>
          </div>
          <div>
            <label htmlFor="email" className='block mb-2'  aria-required>Email</label>
            <input type='email' className='w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none
            focus:border-green-400'
            placeholder='Enter Your Email'/>
          </div>
          <div>
            <label htmlFor="message" className='block mb-2'>Message</label>
            <textarea type="text" className='w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none
            focus:border-green-400'
            rows="7"
            placeholder='Enter Your Message'/>
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
      transfor transition-transform duration-300 hover:scale-105 px-4 rounded-full'>submit</button>
        </form>
      </div>
      </div>
      </div>
      </div>
  )
}

export default conacts