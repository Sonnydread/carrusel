"use client";
import EmblaCarousel from "@/components/EmblaCarousel"

export default function Page () {
    const OPTIONS: any = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const SLIDE_COUNT_SECOND = 6
    const SLIDES_SECOND = Array.from(Array(SLIDE_COUNT_SECOND).keys())

    return (
        <div className="carousel-container bg-[#1b418d]">
            <h1 className='text-gray-400 text-[24px] pt-40 text-center'>Working with the best technology companies</h1>
            <div>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
            <div className="mt-8">
                <EmblaCarousel slides={SLIDES_SECOND} options={OPTIONS} />
            </div>
        </div>
    )
}

"use client"

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const CarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la reproducción automática

  useEffect(() => {
    if (emblaApi) {
      // Inicializa el plugin AutoScroll con la opción play
      const autoScroll = AutoScroll(emblaApi);
      if (isPlaying) {
        autoScroll.play();
      } else {
        autoScroll.stop();
      }

      emblaApi.reInit(); // Re-inicializa el carrusel para aplicar el plugin AutoScroll

      return () => {
        autoScroll.destroy(); // Limpieza: desactiva el autoScroll cuando el componente se desmonte
      };
    }
  }, [emblaApi, isPlaying]); // Dependencias: emblaApi y isPlaying, para reaccionar a sus cambios

  // Función para alternar la reproducción automática
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <>
      <div ref={emblaRef} className="embla">
        <div className="embla__viewport h-[400px] overflow-x-auto">
          <div className="embla__container flex">
            <div className="embla__slide w-[300px]"><img src="/public/imgcarousel/1.png" alt="Item 1" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/imgcarousel/2.png" alt="Item 2" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/imgcarousel/3.png" alt="Item 3" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/imgcarousel/4.png" alt="Item 4" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/imgcarousel/5.png" alt="Item 5" /></div>
            <div className="embla__slide w-[300px]"><img src="/public/imgcarousel/6.png" alt="Item 6" /></div>
          </div>
        </div>
      </div>
      <button onClick={togglePlay} className="toggle-play">
        {isPlaying ? 'Detener' : 'Reproducir'}
      </button>
    </>
  );
};

export default CarouselComponent