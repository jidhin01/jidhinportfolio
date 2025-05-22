import React, { useRef } from 'react';
import {Herosection} from"./Herosection"
import { Navbar } from './Fnav'
import { Skills }  from './Skills'
import { Projects} from './Projects';
import { Education} from './Education';
import { Experience} from './Experience';
import { Contact } from './Contact';
import {Footer} from './Footer';
import  Testpara  from './testpara'
function App() {
  

  return (
    <>
      <Navbar />
      <Herosection />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
      
     
    </>
  )
}

export default App
