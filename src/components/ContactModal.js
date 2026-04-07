// src/components/ContactModal.js
import React, { useState, useEffect } from 'react';
import { SALON, PACKAGES } from '../data/content';
import { submitInquiry } from '../utils/supabase';
import './ContactModal.css';

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Tu nombre es requerido';
  if (!f.phone.trim()) e.phone = 'Tu teléfono es requerido';
  return e;
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    date: '', eventType: 'Cumpleaños',
    package: '', guests: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    const res = await submitInquiry(form);
    setLoading(false);
    if (res.success) setDone(true);
    else setErrors({ _g: 'Hubo un error al enviar. Probá de nuevo.' });
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: '', phone: '', email: '', date: '', eventType: 'Cumpleaños', package: '', guests: '', message: '' });
      setErrors({}); setDone(false);
    }, 350);
  };

  const waLink = `https://wa.me/${SALON.phone}?text=${encodeURIComponent(
    `${SALON.waMessage}Mi nombre es ${form.name || '...'} y quiero consultar disponibilidad para una fiesta.`
  )}`;

  if (!isOpen) return null;

  return (
    <div className="cm-backdrop" onClick={e => e.target === e.currentTarget && handleClose()}>
      <div className="cm-modal">
        <button className="cm-close" onClick={handleClose} aria-label="Cerrar">✕</button>

        <div className="cm-header">
          <span className="cm-emoji">{done ? <img src="/icons/popper.png" alt="popper" /> : <img src="/icons/calendar.png" alt="calendar" />}</span>
          <div>
            <h2 className="cm-title">{done ? '¡Consulta enviada!' : 'Reservar fecha'}</h2>
            {!done && <p className="cm-subtitle">Completá el formulario y te respondemos en menos de 2 hs</p>}
          </div>
        </div>

        <div className="cm-body">
          {done ? (
            <div className="cm-success">
              <div className="cm-success-emoji">🎊</div>
              <h3 className="cm-success-title">¡Gracias, {form.name.split(' ')[0]}!</h3>
              <p className="cm-success-text">
                Recibimos tu consulta para el <strong>{form.date || 'día que elijas'}</strong>.
                Uno de nuestros coordinadores te va a escribir en menos de 2 horas para confirmar disponibilidad.
              </p>
              <div className="cm-success-actions">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <WaIcon /> Confirmar por WhatsApp
                </a>
                <button
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={handleClose}
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <div className="cm-form">
              {errors._g && (
                <div className="cm-error-global">{errors._g}</div>
              )}

              <div className="cm-form-grid">
                <div className="field">
                  <label className="field-label">Nombre completo *</label>
                  <input
                    className={`input ${errors.name ? 'input--error' : ''}`}
                    type="text"
                    placeholder="Tu nombre y apellido"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label className="field-label">Teléfono / WhatsApp *</label>
                  <input
                    className={`input ${errors.phone ? 'input--error' : ''}`}
                    type="tel"
                    placeholder="+54 11 xxxx-xxxx"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="field">
                  <label className="field-label">Email</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                  />
                </div>

                <div className="field">
                  <label className="field-label">Fecha deseada</label>
                  <input
                    className="input"
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => update('date', e.target.value)}
                  />
                </div>

                <div className="field">
                  <label className="field-label">Tipo de evento</label>
                  <select
                    className="input select"
                    value={form.eventType}
                    onChange={e => update('eventType', e.target.value)}
                  >
                    {['Cumpleaños', 'Bautismo', 'Comunión', 'Egresados primaria', 'Baby Shower', 'Otro'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label className="field-label">Paquete de interés</label>
                  <select
                    className="input select"
                    value={form.package}
                    onChange={e => update('package', e.target.value)}
                  >
                    <option value="">Todavía no sé</option>
                    {PACKAGES.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label className="field-label">Cantidad de invitados (aprox.)</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ej: 80 personas"
                    value={form.guests}
                    onChange={e => update('guests', e.target.value)}
                    min="1"
                  />
                </div>

                <div className="field field--full">
                  <label className="field-label">Mensaje o consulta extra</label>
                  <textarea
                    className="input textarea"
                    placeholder="Contanos sobre la temática, necesidades especiales o cualquier consulta..."
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                  />
                </div>
              </div>

              <div className="cm-footer">
                <button
                  className="btn btn-primary cm-submit"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="cm-spinner" /> Enviando...
                    </>
                  ) : (
                    <>
                      <img src="/icons/popper.png" alt="popper" className="btn-icon" />
                      Enviar consulta
                    </>
                  )}
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa cm-wa"
                >
                  <WaIcon /> WhatsApp
                </a>
              </div>

              <p className="cm-note">
                <img src="/icons/lock.png" alt="lock" className="cm-note-icon" /> Tus datos son confidenciales · Te respondemos en menos de 2 horas
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
