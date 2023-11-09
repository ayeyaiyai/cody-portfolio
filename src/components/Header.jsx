import React from 'react';
import '../styles/Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className='header'>
      <div className='header-body'>
        <div className='header-name'>Cody Gilbert</div>
        <div className='header-links'>
          <span onClick={() => scrollToSection('about-section')} className='header-link'>
            About
          </span>
          <span onClick={() => scrollToSection('research-section')} className='header-link'>
            Research
          </span>
          <span onClick={() => scrollToSection('teaching-section')} className='header-link'>
            Teaching
          </span>
          <span onClick={() => scrollToSection('services-section')} className='header-link'>
            Services
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;