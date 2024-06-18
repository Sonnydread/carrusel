"use client"

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const CarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (emblaApi) {
      // Inicializa el plugin AutoScroll con la opción play automáticamente
      const autoScroll = AutoScroll(emblaApi, { speed: 7 }); // Ajusta la velocidad según sea necesario
      autoScroll.play();

      emblaApi.reInit(); // Re-inicializa el carrusel para aplicar el plugin AutoScroll

      return () => {
        autoScroll.destroy(); // Limpieza: desactiva el autoScroll cuando el componente se desmonte
      };
    }
  }, [emblaApi]); // Dependencia: emblaApi, para reaccionar a sus cambios

  return (
    <>
      <div ref={emblaRef} className="embla">
        <div className="embla__viewport h-[400px] overflow-x-auto">
          <div className="embla__container flex">
            <div className="embla__slide w-[300px]"><img src="/public/--2.png" alt="Item 1" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/-.png" alt="Item 2" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/--3.png" alt="Item 3" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/--4.png" alt="Item 4" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/--5.png" alt="Item 5" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;