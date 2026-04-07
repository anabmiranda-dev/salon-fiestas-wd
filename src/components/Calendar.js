// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import { getBookedDates } from '../utils/supabase';
import { BOOKED_DATES } from '../data/content';
import { useInView } from '../hooks/useInView';
import './Calendar.css';

const MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAY_NAMES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function toStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export default function Calendar({ onContact }) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [booked, setBooked] = useState(BOOKED_DATES);
  const [ref, inView] = useInView();

  useEffect(() => {
    getBookedDates().then(setBooked);
  }, []);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const isWeekend = (day) => {
    const d = new Date(year, month, day);
    return d.getDay() === 0 || d.getDay() === 6;
  };

  const getStatus = (day) => {
    const d = new Date(year, month, day);
    if (d < today) return 'past';
    const str = toStr(d);
    if (booked.includes(str)) return 'booked';
    if (isWeekend(day)) return 'available';
    return 'weekday';
  };

  return (
    <section id="calendario" className="section calendar-section">
      <div className="container">
        <div ref={ref} className={`calendar-header fade-up ${inView ? 'visible' : ''}`}>
          <span className="eyebrow">
            <span className='hero__trust'>
              <img src="/icons/calendar.png" alt="calendar" />
            </span> Disponibilidad</span>
          <h2 className="section-title">Consultá fechas libres</h2>
          <p className="calendar-sub">
            Atendemos principalmente <strong>sábados y domingos</strong>. Verificá disponibilidad y reservá tu fecha antes de que otro la tome.
          </p>
        </div>

        <div className="calendar-wrap fade-up" style={{ transitionDelay: '.1s' }}>
          <div className="cal">
            <div className="cal__header">
              <button className="cal__nav" onClick={prev} aria-label="Mes anterior">‹</button>
              <h3 className="cal__month">{MONTH_NAMES[month]} {year}</h3>
              <button className="cal__nav" onClick={next} aria-label="Mes siguiente">›</button>
            </div>

            <div className="cal__grid">
              {DAY_NAMES.map(d => (
                <div key={d} className="cal__day-name">{d}</div>
              ))}
              {Array.from({ length: firstDay }).map((_, i) => <div key={`b${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const status = getStatus(day);
                return (
                  <div
                    key={day}
                    className={`cal__day cal__day--${status}`}
                    onClick={() => status === 'available' && onContact()}
                    title={status === 'available' ? 'Disponible — clic para consultar' : status === 'booked' ? 'Fecha ocupada' : ''}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="cal__legend">
              <div className="cal__legend-item">
                <div className="cal__legend-dot cal__legend-dot--available" />
                <span>Disponible</span>
              </div>
              <div className="cal__legend-item">
                <div className="cal__legend-dot cal__legend-dot--booked" />
                <span>Ocupado</span>
              </div>
              <div className="cal__legend-item">
                <div className="cal__legend-dot cal__legend-dot--weekday" />
                <span>Sin atención</span>
              </div>
            </div>
          </div>

          <div className="calendar-cta">
            <div className="calendar-cta__inner">
              <span className="calendar-cta__emoji">🎉</span>
              <h3 className="calendar-cta__title">¿Ves una fecha libre?</h3>
              <p className="calendar-cta__desc">No la dejes pasar. Las fechas se reservan rápido, especialmente en temporada alta.</p>
              <button className="btn btn-primary calendar-cta__btn" onClick={onContact}>
                Reservar mi fecha ahora
              </button>
              <p className="calendar-cta__note">Respuesta garantizada en menos de 2 horas
                <span className='hero__trust'>
                  <img src="/icons/rocket.png" alt="rocket" />
                </span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
