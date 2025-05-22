import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";
import {
  DiJavascript1, DiReact, DiHtml5, DiCss3, DiNodejs,
  DiPython, DiGit, DiSqllite, DiDjango
} from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';

export const Skills = () => {
  const mySkills = [
    { name: 'JavaScript', icon: DiJavascript1, color: '#F7DF1E' },
    { name: 'React', icon: DiReact, color: '#61DAFB' },
    { name: 'Django', icon: DiDjango, color: '#092E20' },
    { name: 'HTML', icon: DiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: DiCss3, color: '#1572B6' },
    { name: 'Node.js', icon: DiNodejs, color: '#339933' },
    { name: 'Python', icon: DiPython, color: '#3776AB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'SQL', icon: DiSqllite, color: '#00758F' },
    { name: 'Git', icon: DiGit, color: '#F05032' },
  ];

  return (
    <section
      id="Skills"
      className="min-h-[30rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-16 px-4"
    >
      <BackgroundBeams />

      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12 text-neutral-500">
          I Know
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {mySkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-[20px] shadow-lg flex flex-col items-center justify-center
                         transform transition duration-300 hover:scale-105 hover:shadow-xl
                         border border-neutral-700 hover:border-blue-500"
            >
              {skill.icon && (
                <skill.icon
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  style={{ color: skill.color || 'currentColor' }}
                />
              )}
              <p className="mt-3 text-sm sm:text-base font-semibold text-neutral-500">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;