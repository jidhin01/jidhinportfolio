import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

const educationDetails = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Safa College of Arts and Science',
    year: '2021-2024',
    details: 'University of Calicut',
  },
];

export const Education = () => {
  return (
    <section
      id="Education"
      className="min-h-[24rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-16 px-4"
    >
      <BackgroundBeams />

      <div className="container mx-auto max-w-4xl z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-neutral-500 mb-10">
          Education
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="border border-neutral-700 hover:border-neutral-600 p-5 sm:p-6 rounded-[18px] shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-500 mb-2">{edu.degree}</h3>
              <p className="text-base sm:text-lg font-semibold text-neutral-500 mb-1">
                {edu.institution} <span className="font-normal text-neutral-500">({edu.year})</span>
              </p>
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;