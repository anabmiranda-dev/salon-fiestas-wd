// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { SALON, STATS } from '../data/content';
import './Hero.css';

//const waLink = `https://wa.me/${SALON.phone}?text=${encodeURIComponent(SALON.waMessage)}`;

export default function Hero({ onContact }) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setImgIdx(i => (i + 1) % SALON.heroImages.length), 4500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="inicio" className="hero">
      {/* Background slider */}
      {SALON.heroImages.map((src, i) => (
        <div
          key={i}
          className={`hero__slide ${i === imgIdx ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className="hero__overlay" />

      {/* Floating decorations */}
      {/*
      <div className="hero__deco hero__deco--1">🎈</div>
      <div className="hero__deco hero__deco--2">⭐</div>
      <div className="hero__deco hero__deco--3">🎊</div>
      <div className="hero__deco hero__deco--4">🎁</div>
      <div className="hero__deco hero__deco--5">🎉</div>
      

      <div className="hero__deco hero__deco--1">
        <img src="/icons/balloon.png" alt="balloon" />
      </div>

      <div className="hero__deco hero__deco--2">
        <img src="/icons/star.png" alt="star" />
      </div>

      <div className="hero__deco hero__deco--3">
        <img src="/icons/confetti.png" alt="confetti" />
      </div>

      <div className="hero__deco hero__deco--4">
        <img src="/icons/gift.png" alt="gift" />
      </div>

      <div className="hero__deco hero__deco--5">
        <img src="/icons/popper.png" alt="popper" />
      </div>
      */}

      <div className="hero__content container">
        <div className="hero__text">
          {/*
          <div className="hero__pill">
            <span className='hero__trust'>
              <img src="/icons/trophy.png" alt="trophy" />
            </span> +{SALON.openSince === "2012" ? "12" : "10"} años haciendo magia
          </div>*/}

          <h1 className="hero__title">{SALON.tagline}</h1>
          <p className="hero__sub">{SALON.subtitle}</p>

          {/*
          <div className="hero__actions">
            <button className="btn btn-yellow hero__cta" onClick={onContact}>
              <span className='hero__trust'>
                <img src="/icons/popper1.png" alt="popper" />
              </span> Consultar disponibilidad
            </button>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-white hero__wa">
              <span className='hero__trust'>
                <img src="/icons/wp.png" alt="whatsapp" />
              </span> WhatsApp
            </a>
          </div>
          */}

          {/*}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className='hero__trust'>
                <img src="/icons/check.png" alt="check" />
              </span>
              Animadores certificados
            </div>
            <div className="hero__trust-item">
              <span className='hero__trust'>
                <img src="/icons/security.png" alt="security" />
              </span> Habilitación municipal
            </div>
            <div className="hero__trust-item">
              <span className='hero__trust'>
                <img src="/icons/building.png" alt="building" />
              </span> Salón propio
            </div>
          </div>
          */}
        </div>


        {/* Slide indicators */}
        {/*
        <div className="hero__indicators">
          {SALON.heroImages.map((_, i) => (
            <button
              key={i}
              className={`hero__indicator ${i === imgIdx ? 'active' : ''}`}
              onClick={() => setImgIdx(i)}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
        */}
      </div>

      {/* Stats bar */}
      <div className="hero__stats-bar">
        <div className="container">
          <div className="hero__stats">
            {STATS.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-icon">{s.icon}</span>
                <div>
                  <span className="hero__stat-num">{s.num}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

