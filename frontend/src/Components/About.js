import React from "react";
import { FaGraduationCap, FaLaptopCode, FaBullseye } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row  justify-center bg-gray-900 text-white px-8"
    >
      {/* Left: About Text */}
      <div className=" flex-1 text-center md:text-left space-y-6 justify-start pt-6">
        <h2 className="text-4xl font-bold text-start text-teal-400">About Me</h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          I’m <span className="text-teal-400">Anupreksha Negi</span>, a
passionate learner and aspiring frontend developer with some backend experience. Currently pursuing BCA, I enjoy turning ideas into real-world projects and building clean, responsive, and creative web applications. I focus on crafting smooth user experiences that are both visually appealing and functional.        </p>
          <h2 className="text-2xl text-teal-400">What I do? </h2>
           <p className="text-lg text-gray-300 max-w-2xl">I build web applications that solve real problems and provide meaningful experiences for users. I enjoy experimenting with new technologies, learning best practices, and continuously refining my skills to deliver efficient and modern solutions.</p>
       <h2 className="text-2xl  text-teal-400">Notable Project </h2>
           <p className="text-lg text-gray-300 max-w-2xl">One of my projects, HireMate, is an AI-integrated resume maker that helps users create professional resumes efficiently. This project reflects my ability to design, develop, and implement practical solutions using modern web technologies.</p>
      <h2 className="text-2xl  text-teal-400">My Interests </h2>
           <p className="text-lg text-gray-300 max-w-2xl">When I’m not coding, I like exploring design trends, reading about tech innovations, and brainstorming ideas for new web projects. I’m always curious and enjoy learning, which helps me stay updated in this fast-changing tech world.</p>
      </div>

      {/* Right: Timeline / Info */}
      <div className="flex-1 mt-8 md:mt-0 space-y-6  flex flex-col justify-center ">
        <div className="bg-black/40 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <FaGraduationCap className="text-3xl text-teal-400" />
          <div>
            <h3 className="font-semibold text-xl">Education</h3>
            <p className="text-gray-400">BCA Student | Kumaun University</p>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <FaLaptopCode className="text-3xl text-teal-400" />
          <div>
            <h3 className="font-semibold text-xl">Skills</h3>
            <p className="text-gray-400">
              Frontend: React, Tailwind | Backend: Node.js,Express (learning)
            </p>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <FaBullseye className="text-3xl text-teal-400" />
          <div>
            <h3 className="font-semibold text-xl">Goal</h3>
            <p className="text-gray-400">
              To become a full-stack developer and land an internship/placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
