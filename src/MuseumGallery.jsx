import { motion } from "framer-motion";

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

// Variantes para la animación de entrada
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MuseumGallery() {
  return (
    // 1. FONDO TOTAL ROSA: Usamos un degradado que cubre toda la pantalla y evita bordes blancos.
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 py-10 md:py-4 overflow-hidden relative">
      
      {/* Estilos inline para ocultar la barra de scroll nativa y que se vea más limpio */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        
      {/* Título con efectos */}
      <header className="text-center mb-10 px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-pink-700 drop-shadow-sm"
        >
          Museum of Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-pink-600/80 mt-3 text-lg italic"
        >
           Desliza horizontalmente para recordar
        </motion.p>
      </header>

      {/* 2. CONTENEDOR DE SCROLL HORIZONTAL CENTRADO
          - overflow-x-auto: Permite el scroll horizontal nativo.
          - flex flex-nowrap gap-6: Alinea los elementos en fila con espacio.
          - snap-x snap-mandatory: LA CLAVE. Activa el CSS Scroll Snapping horizontal.
          - px-8 md:px-[25%]: Padding horizontal. En móvil es pequeño, en escritorio es grande para centrar la primera imagen.
      */}
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 px-8 md:px-[25%] py-10 hide-scrollbar cursor-grab active:cursor-grabbing">
        {moments.map((moment, index) => (
          <motion.div
            key={moment.id}
            // Animación de entrada escalonada basada en el índice
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            // Efectos al pasar el mouse (solo desktop)
            whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1, y: -10 }}
            // 3. snap-center: Esto obliga a la tarjeta a alinearse al centro de la pantalla al dejar de hacer scroll.
            className={`
              relative flex-shrink-0 snap-center
              w-[85vw] md:w-[400px] h-[500px] md:h-[550px]
              bg-white/60 backdrop-blur-xl border border-white/40
              rounded-[2rem] shadow-xl overflow-hidden group transition-all duration-300
            `}
          >
             {/* Imagen con efecto zoom */}
            <div className="h-[75%] w-full overflow-hidden relative">
               <img
                  src={moment.img}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
                 {/* Capa de brillo al pasar el mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
           
            {/* Texto */}
            <div className="absolute bottom-0 w-full h-[25%] bg-white/30 backdrop-blur-md flex flex-col justify-center items-center p-4">
              <h3 className="text-3xl font-serif text-pink-900">
                {moment.title}
              </h3>
              <div className="mt-2 px-4 py-1 bg-pink-500/20 text-pink-800 text-xs font-bold rounded-full uppercase tracking-wider">
                {moment.date}
              </div>
            </div>
          </motion.div>
        ))}
        {/* Espacio extra al final para que la última imagen también pueda quedar centrada */}
        <div className="flex-shrink-0 w-4 md:w-[20%]" />
      </div>
    </div>
  );
}