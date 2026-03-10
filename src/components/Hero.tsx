import { Button } from "@/components/ui/button";
import { ArrowRight, Shirt, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 textile-pattern opacity-30"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Desarrollando textiles de vanguardia
                </span>{" "}
                desde 1967
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especializados en la producción de telas y servicios de tintorería, brindamos innovación y calidad a la industria textil argentina.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Sistema de pedidos oculto - descomentar para reactivar */}
              {/* <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('client-portal')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ingresá a tu Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button> */}
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conocé nuestros Productos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>

          </div>

          {/* Right Column - Factory Image */}
          <div className="lg:col-span-1 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-glow">
              <img 
                src="/images/foto inicio.jpg" 
                alt="Planta industrial de Telas Modelo"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;