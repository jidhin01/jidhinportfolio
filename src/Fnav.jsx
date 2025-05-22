"use client";
import React from "react";
import { FloatingNav } from "../src/components/ui/floating-navbar";
import { IconGymnastics, IconMessage, IconChecklist, IconBallpen ,IconTimeline, } from "@tabler/icons-react";

export function Navbar({}) {
  
  const navItems = [
    
    {
      
      name: "Skills",
      link: "Skills",
      icon: <IconGymnastics className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Projects",
      link: "Projects",
      icon: <IconChecklist className="h-4 w-4 text-neutral-500  " />,
    },
   
    {
      name: "Education",
      link: "Education",
      icon: <IconBallpen className="h-4 w-4 text-neutral-500  " />
      
    },
     {
      name: "Experience",
      link: "Experience",
      icon: <IconTimeline  className="h-4 w-4 text-neutral-500   " />
      
    },
    {
      name: "Contact",
      link: "Contact",
      icon: <IconMessage  className="h-4 w-4 text-neutral-500   " />
      
    },
    
  ];
  return (
    
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

