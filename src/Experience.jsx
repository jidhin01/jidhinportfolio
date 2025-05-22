// src/components/Experience.jsx
import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const experienceDetails = [
  {
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    duration: 'June 2023 - Present',
    responsibilities: [
      'Developed and maintained scalable web applications using React.js and Node.js.',
      'Contributed to the design and implementation of RESTful APIs.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions.',
      'Optimized application performance, reducing load times by 20%.',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'Web Solutions Co.',
    duration: 'January 2022 - May 2023',
    responsibilities: [
      'Built responsive user interfaces with HTML, CSS, and JavaScript.',
      'Assisted in integrating frontend components with backend services.',
      'Participated in code reviews and debugging sessions.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                  <BackgroundBeams />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-12">Experience</h2>

        <div className="space-y-10">
          {experienceDetails.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{exp.title}</h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-1">
                {exp.company} <span className="font-normal text-gray-500 dark:text-gray-400">({exp.duration})</span>
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-4">
                {exp.responsibilities.map((res, resIndex) => (
                  <li key={resIndex}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Experience;