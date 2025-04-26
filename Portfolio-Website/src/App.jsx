import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'



  const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Home isDarkMode={isDarkMode}/>
        <About isDarkMode={isDarkMode}/>
        <Skills  isDarkMode={isDarkMode}/>
        <Projects  isDarkMode={isDarkMode}/>
        <Contacts  isDarkMode={isDarkMode}/>
        <Footer  isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
