// src/components/Services.js
import React from 'react';
import { SERVICES, THEMES } from '../data/content';
import { useInView } from '../hooks/useInView';
import './Services.css';

export default function Services() {
  const [ref, inView] = useInView();
  const [tRef, tInView] = useInView();

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div ref={ref} className={`services__header fade-up ${inView ? 'visible' : ''}`}>
          <span className="eyebrow"><span className='hero__trust'>
            <img src="/icons/circus.png" alt="circus" />
          </span> Todo incluido</span>
          <h2 className="section-title">Todo lo que tu fiesta necesita</h2>
          <p className="services__sub">
            Nos encargamos de absolutamente todo. Vos solo disfrutá del momento más especial de tu hijo.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Themes */}
        <div ref={tRef} className={`themes fade-up ${tInView ? 'visible' : ''}`} style={{ transitionDelay: '.15s' }}>
          <h3 className="themes__title">
            <span className='hero__trust'>
              <img src="/icons/pallette.png" alt="pallette" />
            </span>
            Temáticas disponibles
          </h3>
          <div className="themes__grid">
            {THEMES.map((t, i) => (
              <div key={i} className="theme-chip" style={{ '--tc': t.color }}>
                <span>{t.emoji}</span> {t.name}
              </div>
            ))}
          </div>
          <p className="themes__note">¿Tu temática favorita no está? ¡La hacemos igual! Personalizamos todo.</p>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`service-card fade-up ${inView ? 'visible' : ''}`}
      style={{ '--sc': s.color, '--sb': s.bg, transitionDelay: `${index * 0.08}s` }}
    >
      <div className="service-card__icon">{s.icon}</div>
      <h3 className="service-card__title">{s.title}</h3>
      <p className="service-card__desc">{s.desc}</p>
      <div className="service-card__bar" />
    </div>
  );
}
