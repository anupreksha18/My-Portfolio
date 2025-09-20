import React, { use } from "react";
import Navbar from "./Components/Navbar"; // make sure this file exists
import Hero from "./Components/Hero"; // make sure this file exists
import Skills from "./Components/Skills"; // make sure this file exists
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Projects from "./Components/Projects";
Aos.init({ duration: 2000 });
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down 
     });
  }, []);
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
       <Hero/>
       <About/>
    

      <Skills/>

    <Projects/>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="h-screen flex items-center justify-center bg-black"
      >
        <h2 className="text-4xl text-teal-400">Certificates</h2>
      </section>

      {/* Experience/Internship Section */}
      <section
        id="experience"
        className="h-screen flex items-center justify-center bg-gray-900"
      >
        <h2 className="text-4xl">Experience / Internship</h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-black"
      >
        <h2 className="text-4xl text-teal-400">Contact Me</h2>
      </section>
    </div>
  );
}

export default App;
