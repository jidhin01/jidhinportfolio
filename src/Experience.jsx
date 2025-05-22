import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const experienceDetails = [
  {
    title: 'Python Full Stack Internship Program',
    company: 'Technovalley Software India Private Limited',
    duration: 'Augest 2024 - february 2024',
    responsibilities: [
      'Built responsive user interfaces with HTML, CSS, and JavaScript.',
      'Assisted in integrating frontend components with backend services.',
      'Participated in code reviews and debugging sessions.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="h-[20rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                  <BackgroundBeams />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-neutral-500 text-center mb-12">Experience</h2>

        <div className="space-y-10">
          {experienceDetails.map((exp, index) => (
            <div
              key={index}
              className="border border-neutral-700 hover:border-neutral-600 p-6 rounded-[18px] shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-neutral-500 mb-2">{exp.title}</h3>
              <p className="text-xl font-semibold text-neutral-500 mb-1">
                {exp.company} <span className="font-normal text-neutral-500">({exp.duration})</span>
              </p>
              <ul className="list-disc list-inside text-neutral-500 space-y-2 mt-4">
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