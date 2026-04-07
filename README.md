# El Salón Arcoiris — Web de Salón de Fiestas Infantiles

Landing page colorida y profesional para salón de fiestas infantiles. React CRA, mobile-first, WhatsApp integrado, calendario de disponibilidad, formulario de consultas.

---

## ⚡ Arrancar

```bash
cd salon-fiestas
npm install
npm start
# → http://localhost:3000
```

---

## 📁 Estructura

```
src/
├── components/
│   ├── Navbar.js/css          → Navbar fija con menú mobile
│   ├── Hero.js/css            → Slider de fotos + stats + CTAs
│   ├── Services.js/css        → Servicios incluidos + temáticas
│   ├── Packages.js/css        → 3 paquetes con precios y features
│   ├── Gallery.js/css         → Galería filtrable con lightbox
│   ├── Testimonials.js/css    → Testimonios de familias
│   ├── Calendar.js/css        → Calendario de disponibilidad
│   └── ContactModal.js/css    → Formulario de consulta / reserva
├── data/
│   └── content.js             → ✏️ Todo el contenido editable acá
├── hooks/
│   └── useInView.js           → Animaciones scroll + navbar
├── styles/
│   └── global.css             → Design system (Fredoka + Nunito)
├── utils/
│   └── supabase.js            → Cliente + SQL completo
├── App.js
└── index.js
```

---

## ✏️ Personalizar

**Editá `src/data/content.js`** — es el único archivo de contenido:

```js
export const SALON = {
  name: "Tu Salón",
  phone: "5491XXXXXXXXX",      // sin + para wa.me
  phoneDisplay: "+54 9 11 XXXX-XXXX",
  address: "Tu dirección",
  waMessage: "Hola! Quiero consultar sobre una fiesta...",
};

// Fechas ocupadas (reemplaza Supabase si no lo configurás)
export const BOOKED_DATES = [
  "2025-08-02", "2025-08-09", // YYYY-MM-DD
];
```

### Cambiar colores

En `src/styles/global.css`:
```css
:root {
  --purple:   #6C5CE7;  /* Color principal */
  --yellow:   #FFD93D;  /* Acento / CTA */
  --pink:     #FF6B9D;  /* Decorativo */
}
```

---

## 🗄️ Configurar Supabase

```sql
-- Tabla de consultas
create table inquiries (
  id         uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name       text not null,
  phone      text not null,
  email      text,
  event_date date,
  event_type text,
  package    text,
  guests     text,
  message    text,
  status     text default 'new'
);

-- Tabla de fechas ocupadas
create table bookings (
  id         uuid default gen_random_uuid() primary key,
  event_date date not null,
  status     text default 'confirmed'
);

-- Seguridad
alter table inquiries enable row level security;
create policy "Public insert" on inquiries for insert with check (true);
alter table bookings enable row level security;
create policy "Public read" on bookings for select using (true);
```

```bash
cp .env.example .env.local
# Completar con URL y anon key de Supabase
```

---

## 🌐 Deploy

### Vercel (recomendado)
```bash
npm i -g vercel && vercel
```

### Firebase
```bash
npm i -g firebase-tools
firebase login && firebase init hosting
# Public: build | SPA: Yes
npm run build && firebase deploy
```

---

## 📈 Checklist de lanzamiento

- [ ] Actualizar `src/data/content.js` (nombre, teléfono, dirección)
- [ ] Reemplazar imágenes del hero con fotos reales del salón
- [ ] Actualizar precios de paquetes
- [ ] Configurar fechas ocupadas reales
- [ ] Configurar Supabase (opcional pero recomendado)
- [ ] Deploy en Vercel
- [ ] Probar formulario y botón de WhatsApp en mobile
- [ ] Actualizar meta tags en `public/index.html`

---

## 🛠️ Stack

| Tecnología | Uso |
|---|---|
| React 18 (CRA) | Framework |
| Fredoka + Nunito | Tipografía divertida y legible |
| CSS Variables puras | Sin dependencias extra |
| IntersectionObserver | Animaciones on-scroll |
| Supabase (opcional) | Guardar consultas y fechas |

**Sin dependencias de UI** — todo hecho con CSS propio.
