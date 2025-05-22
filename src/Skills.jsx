// src/components/Skills.jsx
import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

// A simple component to render SVG icons based on skill name.
// You can expand this or replace it with a library like react-icons.
const SkillIcon = ({ skillName }) => {
  const getIconSvg = (name) => {
    switch (name.toLowerCase()) {
      case 'javascript':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#F7DF1E" className="w-10 h-10">
            <path d="M0 32v448h448V32H0zm247.2 401.7c-4.4 12.8-15 21.6-28.7 21.6-13.7 0-24.3-8.8-28.7-21.6l-10.4-30.1h78l-10.2 30.1zm48.8 63.3L225 384l-11.3-32.9H114.7l-11.3 32.9L0 497l133.3-30.8 11.3-32.9h112.5l11.3 32.9L448 497 348.6 376.9z" />
          </svg>
        );
      case 'react':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#61DAFB" className="w-10 h-10">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm215.3 228.3c-23.7 23.7-52.6 42.1-85.1 55.4l-44.5-77.1c29.1-13.6 52.8-33.3 70.3-56.9L471.3 388.3zM96.7 388.3l44.5 77.1c-23.7-23.7-42.1-52.6-55.4-85.1L96.7 388.3zm-44.5-77.1l77.1-44.5c-13.6-29.1-33.3-52.8-56.9-70.3L52.2 311.2zm388.5-70.3L388.3 96.7c23.7 23.7 42.1 52.6 55.4 85.1L441.3 241.2zm-77.1-44.5l-44.5-77.1c23.7 23.7 42.1 52.6 55.4 85.1L364.7 172.7zm-228.3-44.5L172.7 52.2c-23.7 23.7-42.1 52.6-55.4 85.1L141.3 123.7zM96.7 172.7c23.7-23.7 52.6-42.1 85.1-55.4l-44.5-77.1c-29.1 13.6-52.8 33.3-70.3 56.9L96.7 172.7zM388.3 96.7c23.7 23.7 42.1 52.6 55.4 85.1L388.3 96.7z" />
          </svg>
        );
      case 'html':
      case 'html5':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#E34F26" className="w-10 h-10">
            <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h170.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6.2-88.6h48.1l3.1 36.3 52.6 14.2 52.6-14.2 3.6-46.7H81.3l-5-49.4h203.4l-4.2-50.6z" />
          </svg>
        );
      case 'css':
      case 'css3':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#1572B6" className="w-10 h-10">
            <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h170.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6.2-88.6h48.1l3.1 36.3 52.6 14.2 52.6-14.2 3.6-46.7H81.3l-5-49.4h203.4l-4.2-50.6z" />
          </svg>
        );
      case 'nodejs':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#339933" className="w-10 h-10">
            <path d="M224 352a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0 160c-11.7 0-21.4-8.4-23.7-20.1L0 256l224-224 224 224-200.3 135.9c-2.3 11.7-12 20.1-23.7 20.1zM224 48c-99.4 0-180 80.6-180 180s80.6 180 180 180 180-80.6 180-180S323.4 48 224 48zm0 256c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
          </svg>
        );
      case 'python':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#3776AB" className="w-10 h-10">
            <path d="M352 320c0 44.2-35.8 80-80 80H160c-44.2 0-80-35.8-80-80V192c0-44.2 35.8-80 80-80h112c44.2 0 80 35.8 80 80v64H272c-44.2 0-80 35.8-80 80s35.8 80 80 80h80zM96 192c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v64H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-64h144v-64H96V192z" />
          </svg>
        );
      case 'tailwind css':
        return (
          <svg viewBox="0 0 512 512" fill="#38B2AC" className="w-10 h-10">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm215.3 228.3c-23.7 23.7-52.6 42.1-85.1 55.4l-44.5-77.1c29.1-13.6 52.8-33.3 70.3-56.9L471.3 388.3zM96.7 388.3l44.5 77.1c-23.7-23.7-42.1-52.6-55.4-85.1L96.7 388.3zm-44.5-77.1l77.1-44.5c-13.6-29.1-33.3-52.8-56.9-70.3L52.2 311.2zm388.5-70.3L388.3 96.7c23.7 23.7 42.1 52.6 55.4 85.1L441.3 241.2zm-77.1-44.5l-44.5-77.1c23.7 23.7 42.1 52.6 55.4 85.1L364.7 172.7zm-228.3-44.5L172.7 52.2c-23.7 23.7-42.1 52.6-55.4 85.1L141.3 123.7zM96.7 172.7c23.7-23.7 52.6-42.1 85.1-55.4l-44.5-77.1c-29.1 13.6-52.8 33.3-70.3 56.9L96.7 172.7zM388.3 96.7c23.7 23.7 42.1 52.6 55.4 85.1L388.3 96.7z" />
          </svg>
        );
      default:
        // Generic gear icon for any skill not explicitly defined
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#6B7280" className="w-10 h-10">
            <path d="M504 256c0 13.7-11.1 24.8-24.8 24.8-13.7 0-24.8-11.1-24.8-24.8S465.5 231.2 479.2 231.2 504 242.3 504 256zM320 0c-17.7 0-32 14.3-32 32v128h-64V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H0v64h160v128h-64v64h160v-64h-64V224h64V160h-64V32c0-17.7-14.3-32-32-32zm-64 320v-64h-64v64h64zm128-192v-64h-64v64h64zm-128 0v-64h-64v64h64zm128 192v-64h-64v64h64zm-128 0v-64h-64v64h64z" />
          </svg>
        );
    }
  };
  return getIconSvg(skillName);
};

export const Skills = () => {
  // Define your core languages and frameworks here
  const coreSkills = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'Tailwind CSS' },
    { name: 'SQL' }, // Using a generic icon for SQL
    { name: 'Git' }, // Using a generic icon for Git
  ];

  return (
    <section id="skills" className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {coreSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <SkillIcon skillName={skill.name} />
              <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Skills;