import React from 'react';
import './Quote.css';

const Quote: React.FC = () => {
  return (
    <section className="section quote-section">
      <div className="container quote-container">
        <blockquote className="quote-text">
          "Dos Abogadas, una misma convicción."        
          </blockquote>
        <div className="quote-author">— Miniotti Bordione & asoc.</div>
      </div>
    </section>
  );
};

export default Quote;
