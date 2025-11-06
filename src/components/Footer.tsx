import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/logo-dark.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logoSvg} alt="Telas Modelo" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Más de 55 años ofreciendo textiles en toda Argentina.
            </p>
            <Link to="/about-us">
              <Button variant="electric" size="lg">
                Conocé más sobre nosotros
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Garay 3210, Merlo, Buenos Aires, Argentina
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@telasmodelo.com.ar
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Lun - Vie: 8:00 - 18:00hs
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Telas Modelo. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Términos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Preguntas Frecuentes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;