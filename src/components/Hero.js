// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { SALON, STATS } from '../data/content';
import './Hero.css';

const waLink = `https://wa.me/${SALON.phone}?text=${encodeURIComponent(SALON.waMessage)}`;

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

{/*
function WaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
  */}
