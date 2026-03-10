import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, FileText, Users, Palette } from "lucide-react";

const Banners = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestros{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              servicios comerciales
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Banner 1: Venta de rollos de segunda */}
          <Card className="group hover:shadow-elegant transition-smooth border-primary/30 bg-card/90 backdrop-blur">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth shadow-glow">
                  <Package className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    Segunda calidad disponible
                  </h3>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p>
                      Partidas seleccionadas en diferentes artículos y colores.
                    </p>
                    <p>
                      Una alternativa estratégica para producciones específicas y optimización de costos.
                    </p>
                    <p className="text-primary font-medium pt-2">
                      📩 comercial@telasmodelo.com.ar
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banner 2: Atención personalizada para licitaciones */}
          <Card className="group hover:shadow-elegant transition-smooth border-primary/30 bg-card/90 backdrop-blur">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth shadow-glow">
                  <FileText className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    Licitaciones
                  </h3>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p>
                      Asistencia especializada para organismos públicos y empresas.
                    </p>
                    <p>
                      Acompañamiento en la preparación y provisión de materiales según requerimientos.
                    </p>
                    <p className="text-primary font-medium pt-2">
                      📩 comercial@telasmodelo.com.ar
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banner 3: Atención personalizada para mayoristas */}
          <Card className="group hover:shadow-elegant transition-smooth border-primary/30 bg-card/90 backdrop-blur">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth shadow-glow">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    Mayoristas
                  </h3>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p>
                      Condiciones comerciales especiales y abastecimiento regular.
                    </p>
                    <p>
                      Atención dedicada para distribuidores y revendedores.
                    </p>
                    <p className="text-primary font-medium pt-2">
                      📩 comercial@telasmodelo.com.ar
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Banners;
