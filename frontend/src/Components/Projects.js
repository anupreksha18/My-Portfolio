import React from "react";
import Portfolio from "../Components/assets/Portfolio.png";
import NewsApp from "../Components/assets/NewsApp.png";
import HireMate from "../Components/assets/HireMate.png";
export default function Projects() {
  const projects = [
    {
      title: "High End Mate – AI Resume Builder",
      description:
        "An AI-powered resume builder that helps users create professional resumes with smart suggestions and automation.",
      tech: ["React", "Tailwind CSS", "Node.js", "AI Integration"],
      demo: "#",
      code: "#",
      image: HireMate,
    },
    {
      title: "Portfolio Website",
      description:
        "This personal portfolio website showcasing my skills, projects, and achievements. Fully responsive and deployed online.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      demo: "#",
      code: "#",
      image: Portfolio,
    },
    {
      title: "News App",
      description:
        "A news application that fetches articles using an external API. Built with a clean frontend interface for practice.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API"],
      demo: "#",
      code: "#",
      image: NewsApp,
    },
  ];

  const isFewProjects = projects.length <= 3;

  return (
    <section
      id="projects"
      className={`min-h-screen w-full bg-gray-900 text-white px-6 py-16 
        flex flex-col items-center ${isFewProjects ? "justify-center" : "justify-start"}`}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-400">Projects</h2>

      {/* Grid for portrait cards */}
      <div
        className={`grid gap-10 w-full max-w-6xl 
          ${isFewProjects ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-80 bg-black/40 p-5 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3 text-center flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-auto">
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-xl"
                >
                  Live Demo
                </a>
              )}
              {project.code && project.code !== "#" && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 rounded-xl"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
