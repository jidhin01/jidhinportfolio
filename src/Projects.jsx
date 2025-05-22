// src/components/Projects.jsx
import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Features user authentication, product catalog, shopping cart, and order processing.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://example.com/ecommerce-live', // Replace with your live project link
    githubLink: 'https://github.com/yourusername/ecommerce-repo', // Replace with your GitHub repo link
  },
  {
    title: 'Personal Blog Site',
    description: 'A responsive blog website featuring dynamic content fetching, commenting system, and admin panel for post management. Built with Next.js and Firebase.',
    techStack: ['Next.js', 'Firebase', 'TypeScript', 'CSS Modules'],
    liveLink: 'https://example.com/blog-live',
    githubLink: 'https://github.com/yourusername/blog-repo',
  },
  {
    title: 'Task Management App',
    description: 'A simple, intuitive task management application with drag-and-drop functionality and local storage persistence. Developed using Vanilla JavaScript and HTML/CSS.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage API'],
    liveLink: 'https://example.com/taskapp-live',
    githubLink: 'https://github.com/yourusername/taskapp-repo',
  },
];

export const Projects = () => {
  return (
    <section id="Projects" className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                  <BackgroundBeams />

      <div className="container z-10 mx-auto px-4">
        <h2 className="text-4xl text-neutral-500 font-extrabold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-neutral-700 hover:border-neutral-600 p-6 rounded-[20px] shadow-lg flex flex-col justify-between
                         transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-500">{project.title}</h3>
                <p className="text-neutral-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border hover:border-blue-500 border-gray-600 text-neutral-500 rounded-[20px] hover:bg-gray-800 transition duration-200"
                  >
                    View Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-blue-500 text-neutral-500 rounded-[20px] hover:bg-gray-800 transition duration-200"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
            <BackgroundBeams />

    </section>
  );
};

export default Projects;