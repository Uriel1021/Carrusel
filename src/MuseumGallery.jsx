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
    <div className="min-h-[100svh] w-full bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 relative overflow-hidden flex flex-col pt-4 md:pt-6">
      
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

      {/* Header */}
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
                  h-[70svh] md:h-[520px]
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

            {/* Espaciador final */}
            <div className="w-4 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
