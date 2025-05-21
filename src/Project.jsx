import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

export const Project = () => {
  return (
    <div
    id="Project"
      className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <p
        className=" text-neutral-600 text-center text-7xl mt-50 font-bold">
        JIDHIN Project
      </p>
            <BackgroundBeams />

    </div>
    
  );
};
export default Project;