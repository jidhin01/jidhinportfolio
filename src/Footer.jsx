import React from 'react';

export const Footer = () => {
  return (
    <footer
    
      style={{
        backgroundColor: '#0a0a0a', // Dark background
        color: '#737373', // Light text
        padding: '20px',
        textAlign: 'center',
        fontSize: '0.9em',
      }}
    >
      <p>&copy; {new Date().getFullYear()} Jidhin. All Rights Reserved.</p>
      <p>
        Connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/jidhin-t"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#737373', textDecoration: 'underline' }}
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/jidhin01"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#737373', textDecoration: 'underline' }}
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="mailto:hinjit86@gmail.com"
          style={{ color: '#737373', textDecoration: 'underline' }}
        >
          Email
        </a>
      </p>
    </footer>
  );
};

export default Footer;