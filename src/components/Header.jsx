import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="site-header" id="site-header">
        <div className="header-inner">
          <Link to="/" className="site-logo">Alexis Obi</Link>
          <nav className="nav-links" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/shop">Shop</Link>
          </nav>
          <div className="header-social">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg className="icon-svg" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 122.8z"/></svg>
            </a>
            <a href="https://www.instagram.com/alexisobii" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="icon-svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.9 1.7-67.7 9.9-93.9 36.2s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/alexisobionIn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="icon-svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zm-46.4-340a53.8 53.8 0 110-107.6 53.8 53.8 0 010 107.6zm394.1 340h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
            </a>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex="0">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`} id="mobile-nav" aria-label="Mobile navigation">
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/shop" onClick={toggleMenu}>Shop</Link>
      </nav>
    </>
  );
}

export default Header;
