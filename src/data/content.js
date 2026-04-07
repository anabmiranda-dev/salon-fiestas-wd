// src/data/content.js

export const SALON = {
  name: "Salón Arcoiris",
  tagline: "El lugar donde la diversión cobra vida",
  subtitle: "Fiestas infantiles únicas, llenas de magia, risas y recuerdos que duran toda la vida.",
  phone: "5491123456789",
  phoneDisplay: "+54 9 11 2345-6789",
  email: "hola@salon.arcoiris123.com",
  address: "Guise 1234, CABA, Buenos Aires",
  instagram: "@salon.arcoiris123",
  capacity: "hasta 150 personas",
  openSince: "2012",
  heroImages: [
    "/images/salon0.jpg?w=1600&q=80",
    "/images/salon1.jpg?w=1600&q=80",
    "/images/salon2.jpg?w=1600&q=80",
    "/images/salon3.jpg?w=1600&q=80",
    "/images/salon4.jpg?w=1600&q=80",
    "/images/salon5.jpg?w=1600&q=80",
  ],
  waMessage: "Hola! Quiero consultar disponibilidad para una fiesta infantil 🎉 ",
};

export const SERVICES = [
  {
    id: 1,
    icon: <span className='hero__stats'>
      <img src="/icons/circus.png" alt="circus" />
    </span>,
    title: "Animación Completa",
    desc: "Animadores profesionales con shows, juegos y actividades que mantienen a los chicos entretenidos toda la fiesta.",
    color: "#FF6B6B",
    bg: "#FFF0F0",
  },
  {
    id: 2,
    icon: <span className='hero__stats'>
      <img src="/icons/cake.png" alt="cake" />
    </span>,
    title: "Catering Premium",
    desc: "Menú personalizado para chicos y adultos. Torta temática, sandwiches, snacks y bebidas incluidas en todos los paquetes.",
    color: "#FF9F43",
    bg: "#FFF8F0",
  },
  {
    id: 3,
    icon: <span className='hero__stats'>
      <img src="/icons/pallette.png" alt="pallette" />
    </span>,
    title: "Decoración Temática",
    desc: "Transformamos el salón en el universo favorito de tu hijo. Personalizamos cada detalle del diseño.",
    color: "#6C5CE7",
    bg: "#F3F0FF",
  },
  {
    id: 4,
    icon: <span className='hero__stats'>
      <img src="/icons/camera.png" alt="camera" />
    </span>,
    title: "Cobertura Fotográfica",
    desc: "Fotógrafo profesional incluido en paquetes premium. Capturamos cada momento mágico de la fiesta.",
    color: "#00B894",
    bg: "#F0FBF8",
  },
  {
    id: 5,
    icon: <span className='hero__stats'>
      <img src="/icons/music.png" alt="music" />
    </span>,
    title: "DJ & Sonido",
    desc: "Equipo de sonido profesional con DJ especializado en música infantil. Que la pista de baile nunca pare.",
    color: "#FDCB6E",
    bg: "#FFFBF0",
  },
  {
    id: 6,
    icon: <span className='hero__stats'>
      <img src="/icons/security.png" alt="security" />
    </span>,
    title: "Seguridad Total",
    desc: "Personal de seguridad y coordinadores para que vos disfrutes sin preocuparte de nada. Tu tranquilidad es lo primero.",
    color: "#74B9FF",
    bg: "#F0F7FF",
  },
];

export const PACKAGES = [
  {
    id: "esencial",
    name: "Paquete Esencial",
    emoji: <span className='hero__stats'>
      <img src="/icons/star.png" alt="star" />
    </span>,
    price: 180000,
    duration: "4 horas",
    guests: "Hasta 50 personas",
    color: "#74B9FF",
    gradient: "linear-gradient(135deg, #74B9FF 0%, #a29bfe 100%)",
    features: [
      "Salón principal decorado",
      "Animador por 2 horas",
      "Catering básico (sandwiches + torta)",
      "Vajilla descartable temática",
      "Música ambiental",
      "Coordinador de evento",
    ],
    notIncluded: ["Fotógrafo", "DJ", "Decoración premium"],
    popular: false,
  },
  {
    id: "premium",
    name: "Paquete Premium",
    emoji: <span className='hero__stats'>
      <img src="/icons/star1.png" alt="star1" />
    </span>,
    price: 320000,
    duration: "5 horas",
    guests: "Hasta 100 personas",
    color: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #ffeaa7 100%)",
    features: [
      "Todo lo del paquete Esencial",
      "Decoración temática completa",
      "Show de animación completo (3hs)",
      "Catering premium (buffet completo)",
      "DJ profesional incluido",
      "Fotógrafo por 2 horas",
      "Mesa de dulces",
      "Pañoleta de cumpleañero",
    ],
    notIncluded: ["Cobertura fotográfica completa"],
    popular: true,
  },
  {
    id: "mega",
    name: "Paquete Mega",
    emoji: <span className='hero__stats'>
      <img src="/icons/crown.png" alt="crown" />
    </span>,
    price: 520000,
    duration: "6 horas",
    guests: "Hasta 150 personas",
    color: "#6C5CE7",
    gradient: "linear-gradient(135deg, #6C5CE7 0%, #fd79a8 100%)",
    features: [
      "Todo lo del paquete Premium",
      "Decoración ultra personalizada",
      "Shows especiales (magia, circo)",
      "Fotógrafo profesional completo (5hs)",
      "Video profesional del evento",
      "Mesa de souvenirs personalizada",
      "Torta de 3 pisos personalizada",
      "Coordinación total del evento",
      "Sorpresa especial para el cumpleañero",
    ],
    notIncluded: [],
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carolina Méndez",
    role: "Mamá de Sofía (6 años)",
    text: "La fiesta de Sofi superó todas mis expectativas. Los animadores fueron increíbles, los chicos no pararon de reír en toda la tarde. La decoración de Frozen quedó perfecta. ¡Los contrataría mil veces más!",
    rating: 5,
    avatar: "C",
    color: "#FF6B6B",
    date: "Diciembre 2024",
  },
  {
    id: 2,
    name: "Martín Rodríguez",
    role: "Papá de Mateo (8 años)",
    text: "Desde que llegamos hasta que nos fuimos, todo fue perfecto. La comida estuvo deliciosa, el DJ mantuvo la fiesta con vida y el coordinador nos ayudó con todo. Vale absolutamente cada peso.",
    rating: 5,
    avatar: "M",
    color: "#6C5CE7",
    date: "Noviembre 2024",
  },
  {
    id: 3,
    name: "Lucía Fernández",
    role: "Mamá de Valentina (5 años)",
    text: "Nunca imaginé que organizar una fiesta podía ser tan fácil. Ellos se encargaron de todo y nosotros solo disfrutamos. Valentina todavía habla de su fiesta de unicornios. Gracias de corazón.",
    rating: 5,
    avatar: "L",
    color: "#00B894",
    date: "Octubre 2024",
  },
  {
    id: 4,
    name: "Jorge Suárez",
    role: "Papá de Lucas y Tomás",
    text: "Hicimos la fiesta de mis dos hijos juntos (gemelos!) y lo manejaron espectacularmente. Dos temáticas diferentes en el mismo salón. Una locura que salió perfecta. Profesionales de verdad.",
    rating: 5,
    avatar: "J",
    color: "#FF9F43",
    date: "Septiembre 2024",
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://img.freepik.com/free-photo/full-shot-happy-kids-partying-together_23-2149477992.jpg", alt: "Fiesta temática", category: "Decoración", className: "gallery__zoomed-img" },

  { id: 2, src: "https://img.freepik.com/free-photo/funny-caucasian-male-blows-party-horn_273609-30386.jpg?w=500", alt: "Animación de fiesta", category: "Animación", className: "gallery__zoomed-img" },

  { id: 3, src: "https://img.freepik.com/free-photo/close-up-delicious-party-cake-with-bowl-froot-loop_23-2147917440.jpg?w=500", alt: "Torta de cumpleaños", category: "Catering", className: "gallery__zoomed-img" },
  
  { id: 4, src: "https://img.freepik.com/free-photo/she-loves-receiving-birthday-gifts_329181-7626.jpg", alt: "Niños felices", category: "Momentos", className: "gallery__zoomed-img" },

  { id: 5, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", alt: "Fiesta con globos", category: "Decoración", className: "gallery__zoomed-img" },

  { id: 6, src: "https://img.freepik.com/free-photo/smiley-woman-with-painted-hands_23-2148487267.jpg", alt: "Show infantil", category: "Animación", className: "gallery__zoomed-img" },

  { id: 7, src: "https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150714400.jpg?w=500", alt: "Mesa dulce", category: "Catering", className: "gallery__zoomed-img" },

  { id: 8, src: "https://img.freepik.com/free-photo/children-celebrating-birthday_23-2148155332.jpg?w=500", alt: "Cumpleañeros felices", category: "Momentos", className: "gallery__zoomed-img" },
];

export const STATS = [
  {
    num: "", label: "Animadores certificados",
    icon:
      <span>
        <img className='hero__stats' src="/icons/animador.png" alt="check" />
      </span>
  },
  {
    num: "", label: "Habilitación municipal",
    icon:
      <span>
        <img className='hero__stats' src="/icons/security.png" alt="security" />
      </span>
  },
  {
    num: "", label: "Salón propio",
    icon:
      <span>
        <img className='hero__stats' src="/icons/salon.png" alt="salon" />
      </span>
  },
  {
    num: "", label: "Salón para padres y familiares",
    icon:
      <span>
        <img className='hero__stats' src="/icons/people.png" alt="people" />
      </span>
  },
];

/*
export const STATS = [
  {
    num: "12+", label: "Años de experiencia",
    icon:
      <span>
        <img className='hero__stats' src="/icons/trophy.png" alt="trophy" />
      </span>
  },
  {
    num: "2.500+", label: "Fiestas realizadas",
    icon:
      <span>
        <img className='hero__stats' src="/icons/popper.png" alt="popper" />
      </span>
  },
  {
    num: "98%", label: "Clientes satisfechos",
    icon:
      <span>
        <img className='hero__stats' src="/icons/heart.png" alt="heart" />
      </span>
  },
  {
    num: "150", label: "Personas de capacidad",
    icon:
      <span>
        <img className='hero__stats' src="/icons/people.png" alt="people" />
      </span>
  },
];
*/

export const THEMES = [
  {
    name: "Superhéroes", emoji: <span className='service__themes'>
      <img src="/icons/superhero.png" alt="superhero" />
    </span>,
    color: "#FF6B6B"
  },
  {
    name: "Princesas", emoji: <span className='service__themes'>
      <img src="/icons/princess.png" alt="princess" />
    </span>, color: "#fd79a8"
  },
  {
    name: "Dinosaurios", emoji: <span className='service__themes'>
      <img src="/icons/dino.png" alt="dino" />
    </span>, color: "#00B894"
  },
  {
    name: "Unicornios", emoji: <span className='service__themes'>
      <img src="/icons/unicorn.png" alt="unicorn" />
    </span>, color: "#a29bfe"
  },
  {
    name: "Frozen", emoji: <span className='service__themes'>
      <img src="/icons/frozen.png" alt="frozen" />
    </span>, color: "#74B9FF"
  },
  {
    name: "Futbol", emoji: <span className='service__themes'>
      <img src="/icons/football.png" alt="football" />
    </span>, color: "#55efc4"
  },
  {
    name: "Espacio", emoji: <span className='service__themes'>
      <img src="/icons/rocket.png" alt="rocket" />
    </span>, color: "#6C5CE7"
  },
  {
    name: "Minecraft", emoji: <span className='service__themes'>
      <img src="/icons/minecraft.png" alt="minecraft" />
    </span>, color: "#FDCB6E"
  },
  {
    name: "Barbie", emoji: <span className='service__themes'>
      <img src="/icons/barbie.png" alt="barbie" />
    </span>, color: "#fd79a8"
  },
  {
    name: "Cars", emoji: <span className='service__themes'>
      <img src="/icons/cars.png" alt="cars" />
    </span>, color: "#e17055"
  },
  {
    name: "Peppa Pig", emoji: <span className='service__themes'>
      <img src="/icons/pig.png" alt="peppa pig" />
    </span>, color: "#fab1a0"
  },
  {
    name: "A medida", emoji: <span className='service__themes'>
      <img src="/icons/bright.png" alt="a medida" />
    </span>, color: "#6C5CE7"
  },
];

// Fechas ocupadas mock — formato YYYY-MM-DD
export const BOOKED_DATES = [
  "2025-08-02", "2025-08-03", "2025-08-09", "2025-08-16",
  "2025-08-17", "2025-08-23", "2025-09-06", "2025-09-07",
  "2025-09-13", "2025-09-20", "2025-09-21", "2025-09-27",
];
