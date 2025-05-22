import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-[24rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-16 px-4"
    >
      <BackgroundBeams />

      <div className="container z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 font-extrabold mb-10">
          Get In Touch
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-neutral-500 mb-8 leading-relaxed">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="mailto:hinjit86@gmail.com"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-blue-600 text-neutral-500 rounded-[20px] text-sm sm:text-base font-semibold
                       hover:bg-gray-800 transition duration-200 shadow-md"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/jidhin-t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-blue-600 text-neutral-500 rounded-[20px] text-sm sm:text-base font-semibold
                       hover:bg-gray-800 transition duration-200 shadow-md"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jidhin01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-blue-600 text-neutral-500 rounded-[20px] text-sm sm:text-base font-semibold
                       hover:bg-gray-800 transition duration-200 shadow-md"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;