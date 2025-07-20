'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-background shadow-md z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#reviews">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="https://drive.google.com/file/d/1sanlx2Fm0MQ9tGfU9TUXHXmfdPmpug_D/view?usp=sharing">Download CV</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md">
          <div className="container mx-auto py-4 flex flex-col space-y-3">
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#reviews" onClick={toggleMenu}>Reviews</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <NavLink href="https://drive.google.com/file/d/1sanlx2Fm0MQ9tGfU9TUXHXmfdPmpug_D/view?usp=sharing">Download CV</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="text-foreground hover:text-primary font-medium transition-colors duration-200">
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <Link 
      href={href} 
      className="text-foreground hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 