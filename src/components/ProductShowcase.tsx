import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Polar",
    description: "Tela polar de alta calidad, ideal para la confección de prendas abrigadas y frazadas.\n\nRecomendada para uso escolar y para prendas como chalecos, pulóveres, camperas, forro de camperas, mantas y mucho más.\n\nContamos con distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 1,50 a 2,40 m\nRinde: de 1,30 a 2 kg/m aprox.",
    category: "Polar",
    image: "/images/polar-fabric.jpg"
  },
  {
    id: 2,
    name: "Deportivo",
    description: "Tela desarrollada para la confección de indumentaria deportiva y urbana. Disponible en versión frisada y sin frisar.\n\nIdeal para la producción de conjuntos deportivos, buzos y pantalones.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 1,45 a 1,60 m\nRinde: de 2 a 3,10 Kg/m",
    category: "Deportivo",
    image: "/images/tela deportivo.jpg"
  },
  {
    id: 3,
    name: "Darlom",
    description: "Tela de punto con elasticidad, suave al tacto y de acabado opaco.\n\nSe caracteriza por su resistencia y estabilidad, manteniendo forma y color con el uso y los lavados.\n\nDestinada a la confección de indumentaria que requiere comodidad y libertad de movimiento.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: 1,60 m\nRinde: de 2 a 2,90 Kg/m",
    category: "Darlom",
    image: "/images/darlom-fabric.jpg"
  },
  {
    id: 4,
    name: "Tejido plano",
    description: "Sarga 100% poliéster, disponible en variedad esmerilada o Snowtex.\n\nLa versión esmerilada presenta un acabado que aporta suavidad al tacto y un aspecto opaco.\nLa variante Snowtex cuenta con tratamiento especial que le confiere propiedad impermeable.\n\nDestinada a la confección de camperas, abrigos, equipos de trabajo impermeables y prendas deportivas.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 1,45 a 1,50 m\nRinde: de 3,60 a 5,60 Kg/m",
    category: "Tejido plano",
    image: "/images/tela sarga.png"
  },
  {
    id: 5,
    name: "Telas con elastano",
    description: "Tejido con elastano que aporta elasticidad y buena recuperación, acompañando el movimiento sin perder estabilidad.\n\nSe caracteriza por su adaptabilidad y confort, manteniendo forma y ajuste con el uso y los lavados.\n\nDestinada a la confección de indumentaria deportiva, urbana y prendas que requieren mayor flexibilidad.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 1,55 a 1,80 m\nRinde: de 3,20 a 5 Kg/m",
    category: "Telas con elastano",
    image: "/images/elastano.png"
  },
  {
    id: 6,
    name: "Telas para camisetas",
    description: "Telas técnicas de punto, aptas para sublimación.\n\nDisponibles en distintas tramas (caladas, microperforadas y otras variantes), que favorecen la respirabilidad y el confort en uso intensivo.\n\nLivianas y resistentes, mantienen su estructura sin abrirse ni desgarrarse y soportan lavados frecuentes sin perder rendimiento.\n\nDestinadas a la confección de camisetas y shorts deportivos (fútbol, básquet, running y otras disciplinas), así como también para tiras y detalles complementarios.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 1,55 a 1,80 m\nRinde: de 3,20 a 5 Kg/m",
    category: "Telas para camisetas",
    image: "/images/camisetasweb.png"
  },
  {
    id: 7,
    name: "Ribb/Puños",
    description: "Ribb microfibra standard de estructura tubular, compuesto por 100% poliéster.\n\nPresenta estructura acanalada y elasticidad, lo que le otorga buena adaptación y durabilidad en aplicaciones específicas de confección.\n\nDestinado principalmente a la realización de cuellos y puños, así como a otras terminaciones que requieren ajuste y resistencia.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 0,6 a 0,8 m\nRinde: de 2,70 a 3,20 Kg/m",
    category: "Ribb/Puños",
    image: "/images/ribb.png"
  },
  {
    id: 8,
    name: "Redes y Forrería",
    description: "Telas técnicas livianas y resistentes, desarrolladas para aplicaciones que requieren ventilación, soporte y durabilidad.\n\nSe caracterizan por su estructura firme y funcional, adecuadas para usos donde se necesita respirabilidad y refuerzo.\n\nDestinadas a forrería de prendas, bolsillería, interiores de camperas, mochilas y otras aplicaciones específicas.\n\nDisponible en distintas variantes, con diferentes anchos y rindes.\n\nAncho: de 1,50 a 1,67 m\nRinde: de 6 a 6,20 Kg/m",
    category: "Redes y Forrería",
    image: "/images/redes-forreria.jpg"
  }
];

const ProductShowcase = () => {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Palette className="w-4 h-4 mr-2" />
            Nuestros Productos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Catálogo de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Textiles
            </span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-2xl mx-auto space-y-4">
            <p>
              Descubrí nuestras telas de punto y plano, desarrolladas para ofrecer calidad, durabilidad y excelente rendimiento.
            </p>
            <p>
              Todos nuestros productos son lavables, de colores firmes y con encogimiento controlado, ideales para la confección de prendas y productos textiles.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="space-y-4">
              <Card className="group hover:shadow-elegant transition-smooth border-border hover:border-primary/20">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-center text-primary transition-smooth">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground whitespace-pre-line">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </Card>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;