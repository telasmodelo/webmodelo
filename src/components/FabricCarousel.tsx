import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fabricPhotos = [
  {
    src: "/images/carousel/tela-gris.png",
    alt: "Textura de tela gris de punto",
  },
  {
    src: "/images/carousel/tela-bordo.png",
    alt: "Textura de tela bordó",
  },
  {
    src: "/images/carousel/tela-blanca.png",
    alt: "Textura de tela blanca técnica",
  },
  {
    src: "/images/carousel/tela-azul-oscuro.png",
    alt: "Textura de tela azul oscuro",
  },
  {
    src: "/images/carousel/tela-celeste.png",
    alt: "Textura de tela celeste",
  },
  {
    src: "/images/carousel/tela-azul.png",
    alt: "Textura de tela azul microperforada",
  },
];

const FabricCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {fabricPhotos.map((photo) => (
              <CarouselItem
                key={photo.src}
                className="pl-3 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-2xl shadow-elegant aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-background/90 border-border shadow-elegant" />
          <CarouselNext className="right-2 md:-right-12 bg-background/90 border-border shadow-elegant" />
        </Carousel>
      </div>
    </section>
  );
};

export default FabricCarousel;
