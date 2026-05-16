import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
  // { href: 'https://www.linkedin.com/in/mohammad-altill-943252254/', icon: <FaLinkedin /> },
  // { href: 'https://github.com/mohammadaltill', icon: <FaGithub /> },
];

function Footer() {
  return (
    <footer className="w-screen bg-[#1E3A5F] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left text-white">
          &copy; 2026 Ward Altal. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors duration-300 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right text-white">
            Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
