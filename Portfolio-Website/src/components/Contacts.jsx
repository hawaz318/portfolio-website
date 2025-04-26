import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contacts = ({ isDarkMode }) => {  // <- Capitalize here!
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/my-portfolio-api/contact.php', {   // <-- YOUR PHP URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setStatus(result.message);

      if (result.status === "success") {
        setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form after success
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`} id='contact'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items:center md:space-x-12">
          {/* Contact info */}
          <div className='flex-1'>
            <h1>Let's talk</h1>
            <p>I am open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:melkamuayal21@gmail.com" className='hover:underline'>
                melkamuayal21@gmail.com
              </a>
            </div>
            <div className='mb-4 mt-8'>
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+251915869031</span>
            </div>
            <div className='mb-4 mt-8'>
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Bahir Dar, Ethiopia</span>
            </div>
          </div>

          {/* Form */}
          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className='block mb-2'>Name</label>
                <input type='text' name="name" value={formData.name} onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name" required />
              </div>
              <div>
                <label htmlFor="phone" className='block mb-2'>Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Phone Number" required />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email" required />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-400 border border-gray-300 focus:outline-none focus:border-green-400"
                  rows="7" placeholder="Enter Your Message" required />
              </div>
              <button type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">
                Submit
              </button>

              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;  // <- also fix export name
