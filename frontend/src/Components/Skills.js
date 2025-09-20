import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNetlify, SiVercel, } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      items: [
        { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
        { icon: <FaJs className="text-yellow-500" />, name: "JavaScript (ES6+)" },
        { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend & Database (Familiar)",
      items: [
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js (basic APIs, server setup)" },
        { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB (intro level)" },
      ],
    },
    {
      title: "Other Tools",
      items: [
        {  name: "Git & GitHub" },
        {  name: "Vs Code" },
        
      ],
    },
    {
        title: "Programming Languages",
        items: [
         
          { icon: <FaJava className="text-orange-600" />, name: "Java" },
           { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
        ],

    },
    {
        title:"Currently Exploring",
        items:[
            {  name: "Advanced React Hooks" },
            {  name: "Full-stack Projects (MERN stack)" },
            {  name: "Data Structures and Algorithms" },
        ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-black text-white px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">⚡Skills</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
            <ul className="space-y-4">
              {category.items.map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
