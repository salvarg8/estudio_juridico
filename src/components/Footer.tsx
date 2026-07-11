import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-mb">Miniotti Bordione & asoc.</div>
          <p className="footer-desc">
            Asesoramiento jurídico estratégico, ético y orientado a resultados.
          </p>
        </div>
        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#areas">Áreas de Práctica</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <ul>
            <li><MapPin size={18} /> Córdoba, Argentina</li>
            <li><Phone size={18} /> +54 9 3515 30-6929</li>
            <li><Mail size={18} /> estudiominiottibordione@gmail.com</li>
            <li className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://www.instagram.com/estudiominiottibordione/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574847813420&locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="https://wa.me/5493515306929" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" style={{ fontSize: '24px' }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Miniotti Bordione & asoc. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
