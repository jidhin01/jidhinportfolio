// src/components/Education.jsx
import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const educationDetails = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    year: '2023',
    details: 'Specialized in Software Engineering and Artificial Intelligence. Thesis on "Optimizing Machine Learning Models for Real-time Applications".',
  },
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'State Engineering College',
    year: '2021',
    details: 'Focused on web development, data structures, and algorithms. Achieved a GPA of 3.8/4.0.',
  },
];

export const Education = () => {
  return (
    <section id="education" className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                  <BackgroundBeams />

      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-12">Education</h2>

        <div className="space-y-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{edu.degree}</h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-1">
                {edu.institution} <span className="font-normal text-gray-500 dark:text-gray-400">({edu.year})</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Education;