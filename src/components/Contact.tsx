import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  const form = e.currentTarget;

  const formData = new FormData(form);

  formData.append(
    "access_key",
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  );

  formData.append(
    "subject",
    "Nueva consulta desde la página web"
  );

  formData.append(
    "from_name",
    "Estudio Jurídico Miniotti Bordione"
  );

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: json
      }
    );

    const result = await response.json();

    if (result.success) {
      setMessage("✅ Consulta enviada correctamente.");
      form.reset();
    } else {
      setMessage("❌ Ocurrió un error al enviar la consulta.");
    }
  } catch {
    setMessage("❌ No se pudo conectar con el servidor.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Contáctenos</h2>
          <p className="contact-desc">
            Estamos a su disposición para analizar su caso y ofrecerle el asesoramiento legal que necesita. Complete el formulario y nuestro equipo se comunicará con usted.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Teléfono:</strong>
              <span>+54 9 3515 30-6929</span>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <span>estudiominiottibordione@gmail.com</span>
            </div>
            <div className="contact-item">
              <strong>Horario:</strong>
              <span>Lunes a Viernes, 9:00 - 18:00 hs</span>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required placeholder="Ej. Juan Pérez" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" placeholder="+54 9 11..." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={5} required placeholder="Describa brevemente su consulta..."></textarea>
            </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={loading} >
                {loading ? "Enviando..." : "Enviar Mensaje"} 
              </button>          
              {message && (
                <p
                  style={{
                    marginTop: "1rem",
                    color: message.startsWith("✅") ? "green" : "red"
                  }}
                >
                  {message}
                </p>
              )}
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
