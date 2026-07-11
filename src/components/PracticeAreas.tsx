import React from 'react';
import './PracticeAreas.css';

const areas = [
  'Derecho Civil y Comercial',
  'Derecho Laboral',
  'Derecho Societario',
  'Derecho Tributario',
  'Derecho de Familia y Sucesiones',
  'Derecho Administrativo'
];

const PracticeAreas: React.FC = () => {
  return (
    <section className="section section-dark practice-areas" id="areas">
      <div className="container">
        <h2 className="section-title light">Áreas de Práctica</h2>
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card">
              <div className="area-content">
                <h3>{area}</h3>
                <div className="area-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
