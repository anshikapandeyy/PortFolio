import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    document.documentElement.classList.add("dark");
  }, []);
  useEffect(()=>{
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
          : "bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Project darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
};

export default App;