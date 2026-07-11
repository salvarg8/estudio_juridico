import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content fade-in">
        <h1>Asesoramiento jurídico estratégico y personalizado.</h1>
        <p>
          Acompañamos a nuestros clientes en la toma de decisiones clave,
          brindando soluciones jurídicas eficaces, éticas y orientadas a
          resultados.
        </p>
        <div className="hero-actions">
          <a href="#areas" className="btn btn-primary">Conocer más</a>
          <a href="#contacto" className="btn btn-outline">Agendar consulta</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
