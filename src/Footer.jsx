import React from 'react';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#111111', // Dark background
        color: '#f4f4f4', // Light text
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
          style={{ color: '#f4f4f4', textDecoration: 'underline' }}
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/jidhin01"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f4f4f4', textDecoration: 'underline' }}
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="mailto:hinjit86@gmail.com"
          style={{ color: '#f4f4f4', textDecoration: 'underline' }}
        >
          Email
        </a>
      </p>
    </footer>
  );
};

export default Footer;