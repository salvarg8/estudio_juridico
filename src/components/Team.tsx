import React from 'react';
import './Team.css';

const team = [
  {
    name: 'Miniotti Paula Karina',
    role: 'Abogada',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    description: 'Con foco en derecho civil y litigio estratégico. Cree que el acompañamiento honesto al cliente es la base de una práctica jurídica con sentido.'
  },
  {
    name: 'Bordione Melisa',
    role: 'Abogada · Mediadora',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
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
