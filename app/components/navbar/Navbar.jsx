'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomepage = pathname === '/';
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
          <NavLink href="#about" isHomepage={isHomepage}>About</NavLink>
          <NavLink href="#experience" isHomepage={isHomepage}>Experience</NavLink>
          <NavLink href="#projects" isHomepage={isHomepage}>Projects</NavLink>
          <NavLink href="#reviews" isHomepage={isHomepage}>Testimonials</NavLink>
          <NavLink href="#contact" isHomepage={isHomepage}>Contact</NavLink>
          <NavLink href="https://drive.google.com/file/d/1sanlx2Fm0MQ9tGfU9TUXHXmfdPmpug_D/view?usp=sharing" isHomepage={isHomepage}>Download CV</NavLink>
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
            <MobileNavLink href="#about" onClick={toggleMenu} isHomepage={isHomepage}>About</MobileNavLink>
            <MobileNavLink href="#experience" onClick={toggleMenu} isHomepage={isHomepage}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu} isHomepage={isHomepage}>Projects</MobileNavLink>
            <MobileNavLink href="#reviews" onClick={toggleMenu} isHomepage={isHomepage}>Reviews</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu} isHomepage={isHomepage}>Contact</MobileNavLink>
            <MobileNavLink href="https://drive.google.com/file/d/1sanlx2Fm0MQ9tGfU9TUXHXmfdPmpug_D/view?usp=sharing" isHomepage={isHomepage}>Download CV</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, isHomepage }) => {
  const getHref = () => {
    // If it's an external link (like CV download), return as-is
    if (href.startsWith('http')) {
      return href;
    }
    
    // If it's a hash link and we're not on homepage, prepend '/'
    if (href.startsWith('#') && !isHomepage) {
      return `/${href}`;
    }
    
    // Otherwise return original href
    return href;
  };

  return (
    <Link href={getHref()} className="text-foreground hover:text-primary font-medium transition-colors duration-200">
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, onClick, children, isHomepage }) => {
  const getHref = () => {
    // If it's an external link (like CV download), return as-is
    if (href.startsWith('http')) {
      return href;
    }
    
    // If it's a hash link and we're not on homepage, prepend '/'
    if (href.startsWith('#') && !isHomepage) {
      return `/${href}`;
    }
    
    // Otherwise return original href
    return href;
  };

  return (
    <Link 
      href={getHref()} 
      className="text-foreground hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 