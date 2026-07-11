import React from 'react';
import './Quote.css';

const Quote: React.FC = () => {
  return (
    <section className="section quote-section">
      <div className="container quote-container">
        <blockquote className="quote-text">
          "No hay justicia cuando solo uno de los dos entiende lo que está en juego."        
          </blockquote>
        <div className="quote-author">— Miniotti Bordione & asoc.</div>
      </div>
    </section>
  );
};

export default Quote;
