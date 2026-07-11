import React from 'react';
import './Values.css';
import { Scale, Shield, UserCheck, Briefcase } from 'lucide-react';

const values = [
  {
    icon: <Scale size={32} />,
    title: 'Excelencia Jurídica',
    description: 'Soluciones legales rigurosas y fundamentadas para cada desafío.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Confidencialidad',
    description: 'Manejo estricto y discreto de la información de nuestros clientes.'
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Trato Personalizado',
    description: 'Atención exclusiva y constante comunicación en cada etapa del proceso.'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Enfoque Estratégico',
    description: 'Visión integral para prevenir conflictos y asegurar resultados a largo plazo.'
  }
];

const Values: React.FC = () => {
  return (
    <section className="section values-section" id="valores">
      <div className="container">
        <h2 className="section-title">Nuestros Valores</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
