import React from 'react';
import profilePic from '../Components/assets/profilePic.jpg';
import '../Components/Hero.css'; 

export default function Hero() {
  return (
   <section
  id="home"
  className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 overflow-hidden gap-x-12"
>
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-black to-teal-700 opacity-30 blur-3xl z-0 gradient-animate"></div>

  {/* Left: Text Content */}
  <div className="max-w-[800px] text-center  z-10 space-y-6 md:ml-8">
    <h1 className="text-5xl font-bold text-teal-400 opacity-0 animate-fadeIn">
      Hi, I’m Anupreksha Negi 👋
    </h1>

    <p className="text-lg text-gray-300 opacity-0 animate-fadeIn delay-300">
      Frontend developer who loves turning ideas into interactive, seamless web experiences, with some backend development experience as well.
    </p>

    <div className="space-x-4 opacity-0 animate-fadeIn delay-600">
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 hover:scale-105 hover:shadow-lg transition-all"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="px-6 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-black hover:scale-105 hover:shadow-lg transition-all"
      >
        Contact Me
      </a>
    </div>
  </div>

  {/* Right: Profile Image */}
  <div className="flex-1 flex justify-center  z-10 mt-8 md:mt-0">
    <img
      src={profilePic}
      alt="Anupreksha Negi"
      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-teal-400 shadow-lg hover:scale-105 transition-transform animate-float"
    />
  </div>
</section>

  );
}
