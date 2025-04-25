// import React, { useState, useEffect  } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";


// // const Navbar = () => {
// //   return (
// //     <nav className='bg-blue-900 text-white px-8 md:px-16 lg:px-24'>
// //     <div className='container py-2 flex justify-center md:justify-between items-center'>
// //       <div className='text-2xl font-bold'>Melkamu</div>
// //       <div className='space-x-6'>
// //         <a href='#home' className='hover:text-gray-400'>Home</a>
// //         <a href='#about' className='hover:text-gray-400'>About me</a>
// //         <a href='#projects' className='hover:text-gray-400'>Projects</a>
// //         <a href='#services' className='hover:text-gray-400'>Services</a>
// //         <a href='#contact' className='hover:text-gray-400'>contact</a>
// //       </div>
// //       <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
// //       transfor transition-transform duration-300 hover:scale-105 px-4 rounded-full'>Contact Me</button>
// //     </div>
// //     </nav>
// //   )
// // }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Initialize theme from localStorage/system preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
//       setIsDarkMode(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//     localStorage.setItem('theme', newMode ? 'dark' : 'light');
//   };

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white px-4 py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-center relative">
//       <div className="absolute left-0">
//         <h1 className="text-2xl  font-bold">Melkamu</h1>
//         </div>
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-500">About Me</a></li>
//           <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
//           <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
//           <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
//         </ul>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//         </div>
//       </div>

//       <div className="absolute right-0 flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//             aria-label="Toggle dark mode"
//           >
//             {isDarkMode ? (
//               <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//               </svg>
//             )}
//           </button>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//             </button>
//           </div>
//         </div>
      


//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden mt-2 space-y-2 px-4">
//           <li><a href="#" className="block hover:text-yellow-500">Home</a></li>
//           <li><a href="#" className="block hover:text-yellow-500">About</a></li>
//           <li><a href="#" className="block hover:text-yellow-500">Services</a></li>
//           <li><a href="#" className="block hover:text-yellow-500">Contact</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side */}
        <div>
          <h1 className="text-2xl font-bold">Melkamu</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-500 dark:hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500 dark:hover:text-yellow-400">About Me</a></li>
          <li><a href="#projects" className="hover:text-yellow-500 dark:hover:text-yellow-400">Projects</a></li>
          <li><a href="#services" className="hover:text-yellow-500 dark:hover:text-yellow-400">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-500 dark:hover:text-yellow-400">Contact</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 px-4 bg-white dark:bg-gray-900">
          <li><a href="#" className="block hover:text-yellow-500 dark:hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="block hover:text-yellow-500 dark:hover:text-yellow-400">About</a></li>
          <li><a href="#" className="block hover:text-yellow-500 dark:hover:text-yellow-400">Services</a></li>
          <li><a href="#" className="block hover:text-yellow-500 dark:hover:text-yellow-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;