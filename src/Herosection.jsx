"use client";
import React from "react";
import { Link } from 'react-scroll'; 

import { BackgroundBeams } from "./components/ui/background-beams";
export function Herosection() {
  return (
    <div
      id="Herosection"
      className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center antialiased"
    >
      <BackgroundBeams /> 

      <div className="max-w-2xl mx-auto p-4 mt-50">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Hello! I'm Jidhin,
        </h1>
      </div>

      <div className="mt-5">
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          A full-stack developer who loves turning creative visions into functional realities on the web.
        </p>
      </div>

      <div className="mt-12 flex justify-center space-x-6 relative z-10">
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
          className="text-neutral-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 transition duration-300 pb-1"
        >
          Contact me
        </Link>
        <a
        href="../public/assets/jidhin.docx"
          download="jidhin.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 font-semibold text-lg border-b-2 border-transparent hover:border-gray-400 hover:text-gray-400 focus:outline-none focus:border-gray-400 focus:text-gray-400 transition duration-300 pb-1"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}