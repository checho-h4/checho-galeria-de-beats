/* =========================================================
   ⚙️ CONFIGURACIÓN — edita aquí tus datos, sin tocar el resto
   Este archivo lo cargan las 3 páginas (index, beats, produccion)
   ========================================================= */

// Tus enlaces de contacto / redes
const CONTACT = {
  instagram: "https://instagram.com/checho.w4",
  youtube:   "https://youtube.com/@checho.h4",
  whatsapp:  "https://wa.me/573027305977", // tu número con código de país, sin + ni espacios
  email:     "https://www.tiktok.com/@fldsmdfr.com.co"
};

// Mensajes que rotan en la barra naranja (novedades/ventas)
const TICKER_ITEMS = [
  "Nuevo beat cada semana",
  "25% OFF en pack de 3 beats este mes",
  "Escucha antes de licenciar",
  "Escríbeme para beats a medida"
];

// Tu catálogo de beats.
// 👉 youtubeId: es lo que va después de "v=" en la URL de YouTube
//    Ej: https://www.youtube.com/watch?v=ABC12345678  ->  youtubeId: "ABC12345678"
const BEATS = [
  {
    title: "Humo Bajo",
    genre: "Lo-Fi",
    bpm: 84,
    key: "Am",
    desc: "Percusión suave, piano cálido y una textura de vinilo de fondo. Ideal para versos tranquilos.",
    youtubeId: "VIDEO_ID_1"
  },
  {
    title: "Calle Once",
    genre: "Trap",
    bpm: 140,
    key: "F#m",
    desc: "808 profundo y hi-hats rápidos con un lead oscuro. Pensado para tomas de rap directas.",
    youtubeId: "VIDEO_ID_2"
  },
  {
    title: "Marea",
    genre: "R&B",
    bpm: 92,
    key: "Dm",
    desc: "Acordes de guitarra eléctrica limpia sobre un groove relajado. Espacio para melodías largas.",
    youtubeId: "VIDEO_ID_3"
  },
  {
    title: "Costa Sur",
    genre: "Reggaetón",
    bpm: 96,
    key: "Gm",
    desc: "Dembow clásico con capas de percusión latina y un sub grave constante.",
    youtubeId: "VIDEO_ID_4"
  },
  {
    title: "Papel y Tinta",
    genre: "Boom Bap",
    bpm: 90,
    key: "Cm",
    desc: "Batería con textura de sampler y bajo caminante. Vibra de cuaderno y grabadora vieja.",
    youtubeId: "VIDEO_ID_5"
  },
  {
    title: "Ámbar",
    genre: "Lo-Fi",
    bpm: 76,
    key: "Bm",
    desc: "Rhodes suave, vinyl crackle y una caja lenta. Para quedarse quieto un rato.",
    youtubeId: "VIDEO_ID_6"
  }
];
