import React from 'react';
import './About.css';


const About: React.FC = () => {
  return (
    <section className="section about-section" id="sobre-nosotros">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Trabajamos en <b>equipo</b> con vos.</h2>

        </div>
        <div className="about-text">
          <p>
            Tenemos el conocimiento técnico y jurídico, pero nunca perdemos de vista que detrás de cada caso hay una persona.
             Por eso trabajamos de otra manera: escuchamos primero, 
             explicamos siempre, y construimos juntos el mejor camino.
          </p>        
        </div>
      </div>
    </section>
  );
};

export default About;
