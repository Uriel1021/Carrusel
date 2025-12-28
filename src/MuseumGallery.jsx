import { motion } from "framer-motion";

const moments = [
  { id: 1, title: "Respiración del Amor", date: "En este mundo de sombras y demonios, tú eres mi luz constante.", img: "/images/uno.jpeg" },
  { id: 2, title: "Expansión de Dominio", date: "Un espacio donde solo existimos nosotros, sin tiempo ni final.", img: "/images/dos.jpeg" },
  { id: 3, title: "Vínculo de Glicinias", date: "Como flores que protegen, tu presencia me da paz en la tormenta.", img: "/images/tres.jpeg" },
  { id: 4, title: "Destello Negro", date: "Un instante a tu lado multiplica mis latidos por la eternidad.", img: "/images/cuatro.jpeg" },
  { id: 5, title: "Danza del Dios del Fuego", date: "Mi corazón arde con la fuerza de mil soles cuando me miras.", img: "/images/cinco.jpeg" },
  { id: 6, title: "Ritual Maldito de Unión", date: "Nuestras almas se entrelazaron con un hilo que nadie puede cortar.", img: "/images/seis.jpeg" },
  { id: 8, title: "El Infinito de Gojo", date: "Ni toda la distancia del universo podría alejarnos realmente.", img: "/images/ocho.jpeg" },
  { id: 9, title: "Postura Final: Calma", date: "Tus brazos son el único refugio donde encuentro silencio y paz.", img: "/images/nueve.jpeg" },
  { id: 10, title: "Energía Maldita Positiva", date: "Tienes el poder de sanar cualquier herida con solo una sonrisa.", img: "/images/diez.jpeg" },
  { id: 11, title: "Cazador de Sueños", date: "En este tablero del destino, mi única misión es cuidarte a ti.", img: "/images/once.jpeg" },
  { id: 12, title: "Técnica Imaginaria: Púrpura", date: "La mezcla perfecta entre tu caos y mi calma crea nuestra magia.", img: "/images/doce.jpeg" },
  { id: 13, title: "Lazos de Sangre y Alma", date: "Como Tanjiro y Nezuko, nuestro lazo es lo más fuerte que existe.", img: "/images/trece.jpeg" },
  { id: 14, title: "Rika y Yuta", date: "Prometo amarte más allá de esta vida, en cada rincón del tiempo.", img: "/images/catorce.jpeg" },
  { id: 15, title: "Aliento de Luna", date: "Bajo la misma noche, nuestras sombras bailan en perfecta sintonía.", img: "/images/quince.jpeg" },
  { id: 16, title: "Hechicería de Amor", date: "No hay maldición que pueda contra la fuerza de lo que siento.", img: "/images/dieciseis.jpeg" },
  { id: 17, title: "Mariposa de Shinobu", date: "Vuelas en mis pensamientos, llenando de colores mi realidad.", img: "/images/diecisiete.jpeg" },
  { id: 18, title: "El Rey de mis Maldiciones", date: "Eres la única persona que tiene el control total de mi corazón.", img: "/images/diecinueve.jpeg" },
  { id: 19, title: "Nuestro Final Feliz", date: "Si la vida es una batalla, quiero ganarla siempre a tu lado.", img: "/images/veinte.jpeg" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MuseumGallery() {
  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      
      {/* Fondo adaptativo */}
    <div
      className="
      fixed inset-0 -z-10
      bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300
      md:absolute
      "
    />
      {/* Ocultar scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Contenido */}
      <div className="relative flex flex-col min-h-[100dvh] pt-safe">

        {/* Header */}
        <header className="text-center mb-2 md:mb-6 px-4 z-10 flex-shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-pink-700 drop-shadow-sm"
          >
            Para ti pug...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-600/90 mt-1 md:mt-2 text-sm md:text-base italic"
          >
            Desliza...
          </motion.p>
        </header>

        {/* Carrusel */}
        <div className="flex-grow flex items-start md:items-center w-full pb-4 md:pb-6">
          <div className="mx-auto w-full md:w-[calc(100%-100px)] max-w-[1600px] h-full flex items-center">
            <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 px-8 py-4 hide-scrollbar w-full items-center">
              
              {moments.map((moment, index) => (
                <motion.div
                  key={moment.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="
                    relative flex-shrink-0 snap-center
                    w-[80vw] max-w-[300px] md:w-[380px]
                    h-[70dvh] md:h-[520px]
                    bg-white/60 backdrop-blur-xl
                    border border-white/40
                    rounded-[2rem] shadow-xl
                    overflow-hidden group
                  "
                >
                  {/* Imagen */}
                  <div className="h-[72%] w-full relative overflow-hidden">
                    <img
                      src={moment.img}
                      alt={moment.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 w-full h-[28%] bg-white/50 backdrop-blur-md flex flex-col justify-center items-center p-2 border-t border-white/30">
                    <h3 className="text-2xl md:text-3xl font-serif text-pink-900 leading-tight">
                      {moment.title}
                    </h3>
                    <span className="mt-2 px-3 py-1 bg-pink-500/20 text-pink-800 text-xs font-bold rounded-full uppercase">
                      {moment.date}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div className="w-4 flex-shrink-0" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
