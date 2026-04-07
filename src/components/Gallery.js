// src/components/Gallery.js
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/content';
import { useInView } from '../hooks/useInView';
import './Gallery.css';

const CATS = ['Todos', 'Decoración', 'Animación', 'Catering', 'Momentos'];

export default function Gallery() {
  const [cat, setCat] = useState('Todos');
  const [lightbox, setLightbox] = useState(null);
  const [ref, inView] = useInView();

  const filtered = cat === 'Todos' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(i => i.category === cat);

  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div ref={ref} className={`gallery__header fade-up ${inView ? 'visible' : ''}`}>
          <span className="eyebrow">
            <span className='hero__trust'>
              <img src="/icons/camera.png" alt="camera" />
            </span>
            Galería</span>
          <h2 className="section-title">Mirá la magia en acción</h2>
        </div>

        <div className="gallery__filters">
          {CATS.map(c => (
            <button key={c} className={`gallery__filter ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((img, i) => (
            <GalleryItem key={img.id} img={img} index={i} onClick={() => setLightbox(img)} />
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close">✕</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="lightbox__meta">
              <span className="gallery__filter active" style={{ pointerEvents: 'none' }}>{lightbox.category}</span>
              <p>{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({ img, index, onClick }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`gallery__item fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
      onClick={onClick}
    >
      <img src={img.src} alt={img.alt} loading="lazy" />
      <div className="gallery__item-overlay">
        <span className="gallery__item-cat">{img.category}</span>
        <span className="gallery__item-zoom">
          <span className='gallery_find img'>
            <img src="/icons/forget.png" alt="forget" />
          </span>
        </span>
      </div>
    </div>
  );
}
