import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { getFabricById } from "@/data/fabrics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const FabricColors = () => {
  const { fabricId } = useParams<{ fabricId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const fabric = fabricId ? getFabricById(fabricId) : null;

  // Set the first color as selected when fabric loads
  useEffect(() => {
    if (fabric && fabric.colors.length > 0) {
      setSelectedColor(fabric.colors[0].code);
    }
  }, [fabric]);

  // Scroll to top when component mounts or fabricId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [fabricId]);

  if (!fabric) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Tela no encontrada</h1>
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const copyToClipboard = async (text: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      toast({
        title: "Código copiado",
        description: `El código ${text} de ${colorName} se copió al portapapeles`,
      });
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar el código",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/carta-colores')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la carta de colores
            </Button>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/3">
                <img 
                  src={fabric.image} 
                  alt={fabric.name}
                  className="w-full aspect-video object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {fabric.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {fabric.description}
                </p>
                <Badge variant="secondary" className="text-sm">
                  {fabric.colors.length} colores disponibles
                </Badge>
              </div>
            </div>
          </div>

          {/* Colors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {fabric.colors.map((color) => (
              <Card 
                key={color.code} 
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedColor === color.code 
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : 'hover:shadow-lg hover:scale-102'
                }`}
                onClick={() => setSelectedColor(color.code)}
              >
                <CardHeader className="pb-4">
                  <div 
                    className="w-full aspect-square rounded-lg shadow-inner border-4 border-white mb-4"
                    style={{ backgroundColor: color.hex }}
                  />
                  <CardTitle className="text-lg font-semibold text-center text-foreground">
                    {color.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Código:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold text-foreground">
                          {color.code}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(color.code, color.name);
                          }}
                          className="h-6 w-6 p-0"
                        >
                          {copiedCode === color.code ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">HEX:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-foreground">
                          {color.hex.toUpperCase()}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(color.hex.toUpperCase(), color.name);
                          }}
                          className="h-6 w-6 p-0"
                        >
                          {copiedCode === color.hex.toUpperCase() ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Necesitas más información?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contáctanos para obtener muestras de {fabric.name} o consultar sobre disponibilidad de colores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/#contacto')}>
                  Contactar ahora
                </Button>
                <Button variant="outline" onClick={() => navigate('/#client-portal')}>
                  Realizar pedido
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FabricColors;