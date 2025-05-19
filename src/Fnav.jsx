"use client";
import React from "react";
import { FloatingNav } from "../src/components/ui/floating-navbar";
import { IconGymnastics, IconMessage, IconChecklist, IconBallpen ,IconLayoutBottombarInactive,IconTimeline, } from "@tabler/icons-react";

export function Navbar({}) {
  
  const navItems = [
    
    {
      
      name: "Skils",
      link: "Skils",
      icon: <IconGymnastics className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "Project",
      icon: <IconChecklist className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
   
    {
      name: "Education",
      link: "Education",
      icon: <IconBallpen className="h-4 w-4 text-neutral-500 dark:text-white" />
      
    },
     {
      name: "Experience",
      link: "Experience",
      icon: <IconTimeline  className="h-4 w-4 text-neutral-500 dark:text-white " />
      
    },
    {
      name: "Contact",
      link: "Contact",
      icon: <IconMessage  className="h-4 w-4 text-neutral-500 dark:text-white " />
      
    },
    
  ];
  return (
    
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

