import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const projects = [
  {
    title: 'My portfolio',
    description: 'This React.js portfolio showcases my passion for building dynamic web experiences, featuring various projects that highlight my full-stack development skills.',
    techStack: [ 'React', 'JavaScript', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: 'https://github.com/jidhin01/jidhinportfolio',
  },
  {
    title: 'Weather App',
    description: 'Developed a React.js weather app displaying real-time data (temperature, humidity, wind) from the OpenWeatherMap API based on user-entered locations, enhancing user experience with immediate feedback.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: 'https://github.com/jidhin01/weatherapp',
  },
  {
    title: 'Popcorn',
    description: 'A Python Django project showcasing the design and user interface for a movie ticket-booking website, focusing on intuitive navigation and visual appeal.',
    techStack: ['Django', 'Python','HTML', 'CSS','JavaScript'],
    liveLink: '#',
    githubLink: 'https://github.com/jidhin01/popcorn',
  },
];

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-16 px-4"
    >
      <BackgroundBeams />

      <div className="container z-10 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 font-extrabold text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-neutral-700 hover:border-neutral-600 p-6 rounded-[20px] shadow-lg flex flex-col justify-between
                         transform transition duration-300 hover:scale-105 hover:shadow-xl "
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-neutral-500">{project.title}</h3>
                <p className="text-sm sm:text-base text-neutral-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                {/* {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border hover:border-blue-500 border-gray-600 text-neutral-500 rounded-[20px] hover:bg-gray-800 transition duration-200 text-sm"
                  >
                    View Live
                  </a>
                )} */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-blue-500 text-neutral-500 rounded-[20px] hover:bg-gray-800 transition duration-200 text-sm"
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