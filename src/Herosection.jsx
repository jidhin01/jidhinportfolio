"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
export function Herosection() {
  return (
    
    <div
    id="Herosection"
      className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hello! I'm Jidhin,
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
        >
          A full-stack developer who loves turning creative visions into
          functional realities on the web. Dive into my portfolio to see the
          projects I've poured my energy and expertise into.
        </p>
      
      </div>
      <BackgroundBeams />
    </div>
  );
}
