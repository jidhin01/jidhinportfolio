// src/components/Contact.jsx
import React from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

export const Contact = () => {
  return (
    <section id="Contact" className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                  <BackgroundBeams />

      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold mb-12">Get In Touch</h2>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:your.email@example.com" // Replace with your email
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold
                       hover:bg-blue-700 transition duration-200 shadow-md"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg font-semibold
                       hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-200 shadow-md"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM.002 8h4.996v16H.002zM17.58 8c-1.892 0-3.633.917-4.78 2.378V8H7v16h5v-8c0-2.167 1.417-3.667 3.51-3.667 2.063 0 3.49 1.5 3.49 3.667v8h5V12.188c0-7.864-4.856-10.188-11.42-10.188z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-lg font-semibold
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 shadow-md"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.494.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.54-1.523.11-3.176 0 0 1-.322 3.3-1.22.9-.25 1.855-.378 2.795-.383 1.94 0 3.3 1.09 3.3 1.09.65 1.653.23 2.876.11 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92-.42.36-.805 1.09-.805 2.22 0 1.606.015 2.896.015 3.28 0 .318.22.695.825.575C20.565 22.118 24 17.618 24 12.297c0-6.627-5.373-12-12-12z"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;