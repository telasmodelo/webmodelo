import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fabrics } from "@/data/fabrics";
import { Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FabricCatalog = () => {
  const navigate = useNavigate();

  const handleFabricClick = (fabricId: string) => {
    navigate(`/fabric/${fabricId}`);
  };

  return (
    <section id="carta-colores" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Carta de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Colores
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra amplia gama de telas y colores disponibles. Haz clic en cada tela para ver todos los colores disponibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fabrics.map((fabric) => (
            <Card key={fabric.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={fabric.image} 
                  alt={fabric.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {fabric.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {fabric.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Palette className="w-4 h-4 mr-2" />
                    {fabric.colors.length} colores disponibles
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {fabric.colors.slice(0, 8).map((color) => (
                    <div
                      key={color.code}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                  {fabric.colors.length > 8 && (
                    <div className="w-6 h-6 rounded-full bg-muted border-2 border-white shadow-sm flex items-center justify-center text-xs font-medium text-muted-foreground">
                      +{fabric.colors.length - 8}
                    </div>
                  )}
                </div>

                <Button 
                  onClick={() => handleFabricClick(fabric.id)}
                  className="w-full"
                  variant="outline"
                >
                  Ver todos los colores
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricCatalog;