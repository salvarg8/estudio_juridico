import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5493515306929"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="bi bi-whatsapp" style={{ fontSize: '24px' }}></i>
    </a>
  );
};

export default WhatsAppButton;
