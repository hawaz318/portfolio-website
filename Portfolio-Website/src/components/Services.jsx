import React from 'react'
const services =[
    {
        id:1,
        title:"frontend development",
        description:"creating responsive and interactive user interface."
    },
    {
        id:2,
        title:"backend development",
        description:"bulding robust server-side logic and databases."
    },
{
    id:3,
    title:"fullstack develoopment",
    description:"bulding a full functional web sites which contain both frontend and backend development."
},

]
const Services = () => {
  return (
    
    <div className="bg-gray-200 text-black py-20" id='services'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2  className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {services.map((service) =>(
            <div key={service.id}
            className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
            transition-transform duration-300 hover:scale-105">
    
            <div className="text-right text-2xl font-bold text-transparent
             bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
             {service.id}
            </div>
            <h3 className="mt-2 text-2xl font-bold text-transparent
             bg-clip-text bg=gradient-to-r from-green-600 to-blue-400">
            {service.title}</h3>
            <p className='mt-2 text-gray-300'>{service.description}</p>
            <a href="#" className="mt-4 inline-block text-yellow-400 hover:text-blue-500">Read More</a>
            </div>
         ))}
        </div>
     </div>
     </div>
    
  )
}

export default Services