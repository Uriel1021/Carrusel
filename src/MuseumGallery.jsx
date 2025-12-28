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


export default function MuseumGallery() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!carouselRef.current) return;
      setWidth(
        carouselRef.current.scrollWidth -
        carouselRef.current.offsetWidth
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      {/* Título */}
      <header className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-pink-600"
        >
          Museum of Us
        </motion.h1>
        <p className="text-gray-500 mt-2 italic">
          Desliza para recorrer los recuerdos
        </p>
      </header>

      {/* Viewport */}
      <div className="overflow-hidden px-10">
        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Track */}
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex flex-nowrap gap-8"
          >
            {moments.map((moment) => (
              <motion.div
                key={moment.id}
                whileHover={{ scale: 1.05 }}
                className="min-w-[320px] md:min-w-[420px] h-[460px] bg-white rounded-3xl shadow-xl p-4"
              >
                <img
                  src={moment.img}
                  alt={moment.title}
                  onLoad={() => {
                    if (!carouselRef.current) return;
                    setWidth(
                      carouselRef.current.scrollWidth -
                      carouselRef.current.offsetWidth
                    );
                  }}
                  className="w-full h-[85%] object-cover rounded-2xl pointer-events-none"
                />

                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {moment.title}
                  </h3>
                  <p className="text-pink-400 text-sm">
                    {moment.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
