
import React from 'react';
import project1 from '../images/project1.png';

const projects = [
  {
    id: 1,
    title: "apple Website",
    description: "A responsive apple website built using React and  CSS.",
    image: project1,
    link: "#", 
  }
];

const Projects = ({ isDarkMode }) => {
  return (
    <div
      id="projects"
      className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
         <div className="grid grid-cols-1 ">   {/*md:grid-cols-2 lg:grid-cols-3 gap-8 */}
          {projects.map((project) => (
            <div key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {project.title}
              </h3>

              <p className="mt-2 text-gray-300">{project.description}</p>

              <a
                href= "http://apple-m.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block  text-yellow-400 hover:text-blue-500"
     >
  view project
</a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

