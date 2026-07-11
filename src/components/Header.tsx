import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">Miniotti Bordione & asoc.</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#areas">Áreas de Práctica</a></li>
            {/* <li><a href="#equipo">Equipo</a></li> */}
            {/* <li><a href="#novedades">Novedades</a></li> */}
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="header-socials" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a href="https://www.instagram.com/estudiominiottibordione/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'inherit' }}>
            <i className="bi bi-instagram" style={{ fontSize: '20px' }}></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574847813420&locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'inherit' }}>
            <i className="bi bi-facebook" style={{ fontSize: '20px' }}></i>
          </a>
          <a href="https://wa.me/5493515306929" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: 'inherit' }}>
            <i className="bi bi-whatsapp" style={{ fontSize: '20px' }}></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
