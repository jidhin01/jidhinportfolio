import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const experienceDetails = [
  {
    title: 'Python Full Stack Internship Program',
    company: 'Technovalley Software India Private Limited',
    duration: 'August 2024 - February 2024',
    responsibilities: [
      'Built responsive user interfaces with HTML, CSS, and JavaScript.',
      'Assisted in integrating frontend components with backend services.',
      'Participated in code reviews and debugging sessions.',
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="Experience"
      className="min-h-[24rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-16 px-4"
    >
      <BackgroundBeams />
      <div className="container mx-auto max-w-4xl z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-500 text-center mb-10">
          Experience
        </h2>

        <div className="space-y-6 sm:space-y-10">
          {experienceDetails.map((exp, index) => (
            <div
              key={index}
              className="border border-neutral-700 hover:border-neutral-600 p-5 sm:p-6 rounded-[18px] shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-500 mb-2">{exp.title}</h3>
              <p className="text-base sm:text-lg font-semibold text-neutral-500 mb-1">
                {exp.company} <span className="font-normal text-neutral-500">({exp.duration})</span>
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base text-neutral-500 space-y-2 mt-4">
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