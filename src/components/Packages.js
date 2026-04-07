// src/components/Packages.js
import React from 'react';
import { PACKAGES } from '../data/content';
import { useInView } from '../hooks/useInView';
import './Packages.css';

/*const icon = <span className='gallery_find img'>
  <img src="/icons/forget.png" alt="forget" />
</span>*/

export default function Packages({ onContact }) {
  const [ref, inView] = useInView();

  const fmt = (n) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);

  return (
    <section id="paquetes" className="section packages">
      <div className="container">
        <div ref={ref} className={`packages__header fade-up ${inView ? 'visible' : ''}`}>
          <span className="eyebrow">
            <span className='hero__trust'>
              <img src="/icons/price.png" alt="price" />
            </span>
            Paquetes y precios</span>
          <h2 className="section-title">Elegí el paquete perfecto</h2>
          <p className="packages__sub">
            Todos los paquetes incluyen coordinación completa del evento. Los precios son orientativos — consultanos para una cotización personalizada.
          </p>
        </div>

        <div className="packages__grid">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} onContact={onContact} fmt={fmt} />
          ))}
        </div>

        <div className="packages__note fade-up">
          <span>💬</span>
          <p>¿Necesitás algo diferente? Armamos paquetes a medida para tu fiesta. <button onClick={onContact} className="packages__note-link">Consultanos sin compromiso.</button></p>
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index, onContact, fmt }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`pkg-card ${pkg.popular ? 'pkg-card--popular' : ''} fade-up ${inView ? 'visible' : ''}`}
      style={{ '--pc': pkg.color, '--pg': pkg.gradient, transitionDelay: `${index * 0.12}s` }}
    >
      {pkg.popular && (
        <div className="pkg-card__popular-badge">
          Más elegido
        </div>
      )}

      <div className="pkg-card__header">
        <span className="pkg-card__emoji">{pkg.emoji}</span>
        <h3 className="pkg-card__name">{pkg.name}</h3>
        <div className="pkg-card__meta">

          <span className='hero__trust'>
            <img src="/icons/time.png" alt="time" />
            {pkg.duration}
          </span>

          <span className='hero__trust'>
            <img src="/icons/people.png" alt="people" />
            {pkg.guests}
          </span>
        </div>
      </div>

      <div className="pkg-card__pricing">
        <span className="pkg-card__from">Desde</span>
        <span className="pkg-card__price">{fmt(pkg.price)}</span>
      </div>

      <ul className="pkg-card__features">
        {pkg.features.map((f, i) => (
          <li key={i} className="pkg-card__feature">
            <span className="pkg-card__check">✓</span>
            {f}
          </li>
        ))}
        {pkg.notIncluded.map((f, i) => (
          <li key={`no-${i}`} className="pkg-card__feature pkg-card__feature--no">
            <span className="pkg-card__cross">✗</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`pkg-card__cta btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
        onClick={onContact}
      >
        {pkg.popular ? (<><span className='hero__trust'>
          <img src="/icons/popper.png" alt="popper" />
        </span> ¡Lo quiero!</>) : ('Consultar')}
      </button>
    </div>
  );
}
