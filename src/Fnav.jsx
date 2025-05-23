"use client";
import React from "react";
import { FloatingNav } from "../src/components/ui/floating-navbar";
import { IconChecklist, IconBallpen ,IconTimeline, } from "@tabler/icons-react";
import { GiSkills, } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";


export function Navbar({}) {
  
  const navItems = [
    
    {
      
      name: "Skills",
      link: "Skills",
      icon: <GiSkills  className="h-4 w-4 text-neutral-500 hover:text-blue-400 active:text-blue-400" />,
    },
    {
      name: "Projects",
      link: "Projects",
      icon: <IconChecklist  className="h-4 w-4 text-neutral-500 hover:text-blue-400 active:text-blue-400 " />,
    },
   
    {
      name: "Education",
      link: "Education",
      icon: <IconBallpen  className="h-4 w-4 text-neutral-500 hover:text-blue-400 active:text-blue-400 " />
      
    },
     {
      name: "Experience",
      link: "Experience",
      icon: <IconTimeline  className="h-4 w-4 text-neutral-500  hover:text-blue-400 active:text-blue-400 " />
      
    },
    {
      name: "Contact",
      link: "Contact",
      icon: <IoMdContact  className="h-4 w-4 text-neutral-500  hover:text-blue-400 active:text-blue-400 " />
      
    },
    
  ];
  return (
    
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

