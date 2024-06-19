"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Carrusl() {
  return (
    <div className="px-4 py-6 md:py-14 md:px-11">
      <div className="w-full h-screen bg-gray-900 pt-[80px] flex flex-col items-center">
        <h1 className="text-gray-400 text-center text-[24px]">
          This is my first carousel prototype
        </h1>
        <Carousel
          className="w-full pt-11"
          opts={{
            loop: true,
          }}
          plugins={[
            AutoScroll({
              startDelay: 0,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {[
              "/imgcarousel/--11.png",
              "/imgcarousel/--7.png",
              "/imgcarousel/--8.png",
              "/imgcarousel/--9.png",
              "/imgcarousel/--10.png",
            ].flatMap((imagen, index, array) => [
              <CarouselItem
                key={`item-${index}`}
                className="basis-1/3 md:basis-1/4"
              >
                <Image
                  src={imagen}
                  alt={`Imagen ${index + 1}`}
                  width={200}
                  height={60}
                />
              </CarouselItem>,
              index < array.length - 1 ? (
                <div
                  key={`separator-${index}`}
                  className="w-4 bg-gray-200"
                ></div>
              ) : null,
            ])}
          </CarouselContent>
        </Carousel>
        <Carousel
          className="w-full pt-11"
          opts={{
            loop: true,
          }}
          plugins={[
            AutoScroll({
              startDelay: 0,
              direction: "backward",
              speed: 1.8,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {[
              "/imgcarousel/-.png",
              "/imgcarousel/--3.png",
              "/imgcarousel/--2.png",
              "/imgcarousel/--4.png",
              "/imgcarousel/--5.png",
              "/imgcarousel/--6.png",
            ].flatMap((imagen, index, array) => [
              <CarouselItem
                key={`item-${index}`}
                className="basis-1/3 md:basis-1/4"
              >
                <Image
                  src={imagen}
                  alt={`Imagen ${index + 1}`}
                  width={200}
                  height={60}
                />
              </CarouselItem>,
              index < array.length - 1 ? (
                <div
                  key={`separator-${index}`}
                  className="w-4 bg-gray-200"
                ></div>
              ) : null,
            ])}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

