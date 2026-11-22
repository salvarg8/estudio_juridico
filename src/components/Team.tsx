import React from 'react';
import './Team.css';
import paulaImg from '../images/paula-retrato.jpeg';
import meliImg from '../images/meli-retrato.jpeg';

const team = [
  {
    name: 'Miniotti Paula Karina',
    role: 'Abogada',
    license: 'MP 1-45579',
    image: paulaImg,
    description: 'Con foco en derecho civil y litigio estratégico. Cree que el acompañamiento honesto al cliente es la base de una práctica jurídica con sentido.'
  },
  {
    name: 'Bordione Melisa',
    role: 'Abogada · Mediadora',
    license: 'MP 1-44945',
    image: meliImg,
    description: 'Especialista en derecho laboral, daños y amparo de salud. Formada en mediación para acompañar conflictos con soluciones reales, más allá del expediente.'
  }
];

const Team: React.FC = () => {
  return (
    <section className="section team-section" id="equipo">
      <div className="container">
        <h2 className="section-title">Nuestro Equipo</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <span className="team-license">{member.license}</span>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
