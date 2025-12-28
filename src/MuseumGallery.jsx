import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const moments = [
  { id: 1, title: "TU", date: "12 Oct 2023", img: "/images/uno.jpeg" },
  { id: 2, title: "TU", date: "05 Nov 2023", img: "/images/dos.jpeg" },
  { id: 3, title: "TU", date: "20 Dic 2023", img: "/images/tres.jpeg" },
  { id: 4, title: "TU", date: "Ene 2024", img: "/images/cuatro.jpeg" },
  { id: 5, title: "TU", date: "Feb 2024", img: "/images/cinco.jpeg" },
  { id: 6, title: "TU", date: "Mar 2024", img: "/images/seis.jpeg" },
  { id: 8, title: "TU", date: "May 2024", img: "/images/ocho.jpeg" },
  { id: 9, title: "TU", date: "Jun 2024", img: "/images/nueve.jpeg" },
  { id: 10, title: "TU", date: "Jul 2024", img: "/images/diez.jpeg" },
  { id: 11, title: "TU", date: "Ago 2024", img: "/images/once.jpeg" },
  { id: 12, title: "TU", date: "Sep 2024", img: "/images/doce.jpeg" },
  { id: 13, title: "TU", date: "Oct 2024", img: "/images/trece.jpeg" },
  { id: 14, title: "TU", date: "Nov 2024", img: "/images/catorce.jpeg" },
  { id: 15, title: "TU", date: "Dic 2024", img: "/images/quince.jpeg" },
  { id: 16, title: "TU", date: "Ene 2025", img: "/images/dieciseis.jpeg" },
];

// Variantes para la animación de entrada escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function MuseumGallery() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Detectar si es móvil (menos de 768px es el estándar de Tailwind 'md')
      const mobileCheck = window.innerWidth < 768;
      setIsMobile(mobileCheck);

      if (carouselRef.current && !mobileCheck) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Fondo total rosa con degradado
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 py-12 overflow-x-hidden">
      
      {/* Encabezado */}
      <header className="text-center mb-16 relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white drop-shadow-md tracking-wide"
        >
          Museum of Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/80 mt-3 text-lg italic font-light"
        >
          {isMobile ? "Desliza hacia abajo" : "Desliza horizontalmente"} para recordar
        </motion.p>
      </header>

      {/* Contenedor Principal */}
      <div className="px-4 md:px-10 max-w-[1400px] mx-auto">
        <motion.div
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // Clases condicionales: En móvil es columna centrada, en desktop es flex row
          className={`
            ${isMobile 
              ? "flex flex-col items-center gap-12 pb-10" 
              : "cursor-grab active:cursor-grabbing overflow-hidden"
            }
          `}
        >
          {/* Lógica del Layout:
            Si es móvil: Renderizamos un div normal (sin drag)
            Si es desktop: Renderizamos el motion.div con drag
          */}
          {isMobile ? (
             // --- VISTA MÓVIL (Vertical) ---
             moments.map((moment) => (
              <Card key={moment.id} moment={moment} isMobile={true} />
            ))
          ) : (
            // --- VISTA DESKTOP (Carrusel Horizontal) ---
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex flex-nowrap gap-12 px-4"
            >
              {moments.map((moment) => (
                <Card key={moment.id} moment={moment} isMobile={false} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Componente Tarjeta Extraído para limpieza y reutilización
function Card({ moment, isMobile }) {
  return (
    <motion.div
      variants={itemVariants}
      // Efectos extra: Solo hover en desktop, whileInView para móvil
      whileHover={!isMobile ? { scale: 1.05, rotate: -1, zIndex: 10 } : {}}
      whileInView={isMobile ? { opacity: 1, y: 0, scale: 1 } : {}}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        relative flex-shrink-0 bg-white/70 backdrop-blur-md 
        border border-white/50 p-4 shadow-2xl rounded-3xl
        ${isMobile ? "w-full max-w-[340px] h-[480px]" : "min-w-[350px] md:min-w-[400px] h-[500px]"}
      `}
    >
      {/* Contenedor de Imagen */}
      <div className="w-full h-[82%] rounded-2xl overflow-hidden shadow-inner relative group">
        <img
          src={moment.img}
          alt={moment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
        />
        {/* Overlay brillante al pasar el mouse */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="mt-5 text-center">
        <h3 className="text-2xl font-serif text-gray-800 tracking-wider">
          {moment.title}
        </h3>
        <span className="inline-block mt-1 px-3 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest">
          {moment.date}
        </span>
      </div>
    </motion.div>
  );
}