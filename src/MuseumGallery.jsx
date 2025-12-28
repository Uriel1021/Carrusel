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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 relative overflow-hidden flex flex-col pt-4 md:pt-6">  
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
      <header className="text-center mb-2 md:mb-6 px-4 z-10 flex-shrink-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-pink-700 drop-shadow-sm"
        >
          Museum of Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-pink-600/90 mt-1 md:mt-2 text-sm md:text-base italic"
        >
           Desliza para recordar
        </motion.p>
      </header>

      {/* 2. CONTENEDOR DE SCROLL HORIZONTAL CENTRADO
          - overflow-x-auto: Permite el scroll horizontal nativo.
          - flex flex-nowrap gap-6: Alinea los elementos en fila con espacio.
          - snap-x snap-mandatory: LA CLAVE. Activa el CSS Scroll Snapping horizontal.
          - px-8 md:px-[25%]: Padding horizontal. En móvil es pequeño, en escritorio es grande para centrar la primera imagen.
      */}
      {/* Contenedor Principal Ajustado */}
      <div className="flex-grow flex items-center w-full pb-4 md:pb-6">
        
        {/* Mantenemos el ajuste de ancho para Web que te gustó antes (los bordes) */}
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
                className={`
                  relative flex-shrink-0 snap-center
                  
                  /* --- CAMBIO CRÍTICO AQUÍ --- */
                  /* En móvil: w-[75vw] para ver un poco de la siguiente tarjeta */
                  /* En móvil: h-[60vh] (Altura del viewport) en lugar de px fijos. */
                  /* Esto garantiza que SIEMPRE quepa en la pantalla sin scroll vertical */
                  
                  w-[80vw] max-w-[300px] md:w-[380px] 
                  h-[60vh] max-h-[450px] md:h-[520px]
                  
                  bg-white/60 backdrop-blur-xl border border-white/40
                  rounded-[2rem] shadow-xl overflow-hidden group
                `}
              >
                {/* Imagen: Ocupa el 72% de la altura disponible */}
                <div className="h-[72%] w-full relative overflow-hidden">
                  <img
                    src={moment.img}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                </div>
              
                {/* Info: Ocupa el resto (28%) y se centra */}
                <div className="absolute bottom-0 w-full h-[28%] bg-white/50 backdrop-blur-md flex flex-col justify-center items-center p-2 border-t border-white/30">
                  <h3 className="text-2xl md:text-3xl font-serif text-pink-900 m-0 leading-tight">
                    {moment.title}
                  </h3>
                  <span className="mt-2 px-3 py-1 bg-pink-500/20 text-pink-800 text-xs font-bold rounded-full uppercase">
                    {moment.date}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Espaciador final */}
            <div className="w-4 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}