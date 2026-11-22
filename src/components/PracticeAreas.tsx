import React from 'react';
import './PracticeAreas.css';

const areas = [
  {name: 'Derecho Laboral' , description: 'Representamos a trabajadores y empleadores en conflictos laborales, como ser despidos de  trabajadores, regimenes especiales tanto publico como privado, Accidentes de Trabajo, Enfermedades profesionales.'},
  {name: 'Daños y Perjuicios', description: 'Estudiamos cada situación para encontrar la solución más efectiva ante reclamos a Seguros,  accidentes, responsabilidad institucional de escuelas, centros médicos, bancos, billeteras virtuales, aerolíneas, responsabilidad del Estado,  Defensa del Consumidor.'},
  {name: 'Derecho a la Salud', description: ' Acompañamos a quienes necesitan atención médica, con la urgencia y responsabilidad acorde a la importancia que conlleva este tipo de casos.'},
  {name: 'Vía Extrajudicial', description: 'Mediaciones defensa del consumidor, facilitamos acuerdos que satisfacen los intereses de las partes con menos conflictos y mas rapidez, ya que no siempre el litigio es el camino.'},
  {name: 'Derecho de Familia y Sucesiones', description: 'Derecho sucesorio Declaratoria de Herederos, Sucesiones ab intestato y testamentarias acompañamiento humano durante todo el proceso.'},
  {name: 'Y más...', description: 'Si tu consulta está referida a otra área del derecho, estamos a disposición para escucharte.'}
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
                <h3>{area.name}</h3>
                <div className="area-line"></div>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
