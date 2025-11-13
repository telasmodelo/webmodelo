import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Palette, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Polar",
    description: "Tela polar de alta calidad, ideal para confección de prendas abrigadas y cómodas.",
    category: "Polar",
    image: "/images/polar-fabric.jpg",
    subproducts: [
      {
        id: "polar-clasico",
        name: "Clásico",
        description: "Polar tradicional con máxima calidez y durabilidad.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "polar-liviano",
        name: "Liviano",
        description: "Polar ligero perfecto para capas intermedias.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "polar-frazada",
        name: "Frazada",
        description: "Ideal para ropa de cama abrigada. Para hacer mantas de todos los tamaños para el invierno, tanto para uso domestico como comercial.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      }
    ]
  },
  {
    id: 2,
    name: "Deportivo",
    description: "Tejido técnico especializado para prendas deportivas y activewear de alto rendimiento.",
    category: "Deportivo",
    image: "/images/deportivo-fabric.png",
    subproducts: [
      {
        id: "deportivo-clasico",
        name: "Clásico",
        description: "Tejido deportivo tradicional con excelente transpirabilidad y durabilidad.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "deportivo-frizado",
        name: "Frizado",
        description: "Tejido deportivo con friza en el reverso, lo que aporta abrigo y confort. Su interior suave lo hace ideal para prendas de invierno.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      }
    ]
  },
  {
    id: 3,
    name: "Darlom",
    description: "Tejido Darlom de alta calidad, conocido por su suavidad y resistencia al desgaste.",
    category: "Darlom",
    image: "/images/darlom-fabric.jpg"
  },
  {
    id: 4,
    name: "Sarga",
    description: "Tela sarga resistente y duradera, perfecta para prendas de trabajo y uniformes.",
    category: "Sarga",
    image: "/images/sarga.png"
  },
  {
    id: 5,
    name: "Elastano",
    description: "Tejido con elastano para máxima flexibilidad y comodidad en el movimiento.",
    category: "Elastano",
    image: "/images/elastano.png"
  },
  {
    id: 6,
    name: "Camisetas",
    description: "Algodón de alta calidad para confección de camisetas cómodas y transpirables.",
    category: "Camisetas",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
    subproducts: [
      {
        id: "camisetas-set",
        name: "Set",
        description: "Conjunto completo de camisetas con diferentes tallas y colores coordinados.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "camisetas-w15",
        name: "W15",
        description: "Camisetas con peso de 150 gramos por metro cuadrado, ideal para uso diario.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "camisetas-w5",
        name: "W5",
        description: "Camisetas ultra ligeras con peso de 50 gramos por metro cuadrado, perfectas para verano.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "camisetas-w18",
        name: "W18",
        description: "Camisetas con peso de 180 gramos por metro cuadrado, mayor resistencia y durabilidad.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      },
      {
        id: "camisetas-elastano",
        name: "Con Elastano",
        description: "Camisetas con elastano para mayor flexibilidad y ajuste perfecto al cuerpo.",
        composicion: "100% poliester",
        ancho: "[Completar]",
        rendimiento: "[Completar]"
      }
    ]
  },
  {
    id: 7,
    name: "Ribb",
    description: "Tejido ribb con textura acanalada, ideal para cuellos, puños y prendas ajustadas.",
    category: "Ribb",
    image: "/images/ribb.png"
  }
];

const ProductShowcase = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const toggleExpansion = (productId: number) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

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
              Descubrí nuestras telas de punto y plano, diseñadas para ofrecer calidad, durabilidad y excelente rendimiento.
            </p>
            <p>
              Todos nuestros productos son lavables, de colores firmes y con encogimiento controlado, ideales para confeccionar prendas y artículos textiles de todo tipo.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="space-y-4">
              <Card className="group hover:shadow-elegant transition-smooth border-border hover:border-primary/20">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => toggleExpansion(product.id)}
                    >
                      {expandedProduct === product.id ? (
                        <ChevronUp className="w-4 h-4 mr-2" />
                      ) : (
                        <Eye className="w-4 h-4 mr-2" />
                      )}
                      {expandedProduct === product.id ? "Ver menos" : "Ver más"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Subproducts Section - Only for products with subproducts */}
              {expandedProduct === product.id && product.subproducts && (
                <div className="space-y-4">
                  {/* Description Box */}
                  <Card className="bg-gradient-subtle border-primary/20">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-foreground mb-2">
                        {product.name === "Polar" ? "Sobre el Polar" : 
                         product.name === "Deportivo" ? "Sobre el Deportivo" : 
                         product.name === "Camisetas" ? "Sobre las Camisetas" :
                         `Sobre ${product.name}`}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {product.name === "Polar" ? 
                          "Nuestro polar es una tela sintética de alta calidad que combina calidez y durabilidad. Perfecta para prendas de abrigo y frazadas." :
                          product.name === "Deportivo" ?
                          "Nuestro tejido deportivo está diseñado para ofrecer máximo rendimiento en " +
                          "actividades físicas. Combina transpirabilidad, elasticidad y secado rápido " +
                          "para mantener la comodidad durante el ejercicio. Ideal para prendas de " +
                          "activewear y ropa deportiva de alta calidad." :
                          product.name === "Camisetas" ?
                          "Nuestras camisetas están confeccionadas con algodón de alta calidad, " +
                          "ofreciendo máxima comodidad y transpirabilidad. Disponibles en diferentes " +
                          "pesos y composiciones para adaptarse a cada necesidad. Desde conjuntos " +
                          "completos hasta opciones con elastano para mayor flexibilidad." :
                          `Información detallada sobre ${product.name.toLowerCase()}.`
                        }
                      </p>
                    </CardContent>
                  </Card>

                  {/* Subproducts */}
                  <div className="grid gap-4">
                    <h4 className="font-semibold text-foreground">Variantes disponibles:</h4>
                    {product.subproducts.map((subproduct) => (
                      <Card key={subproduct.id} className="border-border hover:border-primary/20 transition-smooth">
                        <CardContent className="pt-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-foreground">{subproduct.name}</h5>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {subproduct.description}
                          </p>
                          <div className="space-y-2 pt-4 border-t border-border">
                            <div className="text-sm">
                              <span className="font-semibold text-foreground">Composición:</span>
                              <span className="text-muted-foreground ml-2">{subproduct.composicion}</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-semibold text-foreground">Ancho:</span>
                              <span className="text-muted-foreground ml-2">{subproduct.ancho}</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-semibold text-foreground">Rendimiento:</span>
                              <span className="text-muted-foreground ml-2">{subproduct.rendimiento}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;