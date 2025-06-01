"use client";
import React from "react";
import { Link } from 'react-scroll'; 
import { IconDownload } from "@tabler/icons-react";
import { BackgroundBeams } from "./components/ui/background-beams";

export function Herosection() {
  return (
    <div
      id="Herosection"
      className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4"
    >
      <BackgroundBeams /> 

      <div className="max-w-2xl mx-auto text-center z-10">
        <h1 className="text-3xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Hello! I'm Jidhin,
        </h1>

        <p className="text-neutral-500 mt-4 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
          A full-stack developer who loves turning creative visions into functional realities on the web. Dive into my portfolio to see the projects I've poured my energy and expertise into.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
            className="text-neutral-500 font-semibold text-base sm:text-lg hover:text-blue-500 focus:outline-none transition duration-300"
          >
            Contact me
          </Link>

          <a
            href={`${import.meta.env.BASE_URL}/assets/jidhin-resume.pdf`}
            download="jidhin-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 font-semibold text-base sm:text-lg hover:text-blue-500 focus:outline-none transition duration-300 flex items-center gap-2"
          >
            <IconDownload />My Resume
          </a>
        </div>
      </div>
    </div>
  );
}