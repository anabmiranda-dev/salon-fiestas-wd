// src/components/Testimonials.js
import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { useInView } from '../hooks/useInView';
import './Testimonials.css';

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="opiniones" className="section testimonials">
      <div className="container">
        <div ref={ref} className={`testimonials__header fade-up ${inView ? 'visible' : ''}`}>
          <span className="eyebrow">
            <span className='hero__trust'>
            <img src="/icons/heart.png" alt="heart" />
          </span> Lo que dicen las familias</span>
          <h2 className="section-title">Papás y mamás felices</h2>
          <p className="testimonials__sub">Más de 2.500 familias eligieron El Salón Arcoiris para el momento más especial de sus hijos.</p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        <div className="testimonials__rating-bar fade-up">
          <div className="testimonials__stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FFD93D" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <strong>4.9/5</strong>
          <span>basado en más de 400 reseñas</span>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`tcard fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s`, '--tc': t.color }}
    >
      <div className="tcard__top">
        <div className="tcard__avatar" style={{ background: t.color }}>{t.avatar}</div>
        <div>
          <p className="tcard__name">{t.name}</p>
          <p className="tcard__role">{t.role}</p>
        </div>
        <div className="tcard__stars">
          {Array.from({ length: t.rating }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFD93D" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
        </div>
      </div>

      <p className="tcard__text">"{t.text}"</p>
      <p className="tcard__date">{t.date}</p>
      <div className="tcard__accent" />
    </div>
  );
}
