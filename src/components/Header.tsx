import { Button } from "@/components/ui/button";
import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoSvg from "@/assets/logo-dark.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#productos");
      // Esperar a que la página se cargue antes de hacer scroll
      setTimeout(() => {
        const productosSection = document.getElementById("productos");
        if (productosSection) {
          productosSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const productosSection = document.getElementById("productos");
      if (productosSection) {
        productosSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContactoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contacto");
      setTimeout(() => {
        const contactoSection = document.getElementById("contacto");
        if (contactoSection) {
          contactoSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const contactoSection = document.getElementById("contacto");
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-background border-b border-border shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoSvg} 
              alt="Telas Modelo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about-us" className="text-foreground hover:text-primary transition-smooth font-medium">
              Sobre nosotros
            </Link>
            <a 
              href="#productos" 
              onClick={handleProductosClick}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Productos
            </a>
            <Link to="/carta-colores" className="text-foreground hover:text-primary transition-smooth font-medium">
              Carta de colores
            </Link>
            <a 
              href="#contacto" 
              onClick={handleContactoClick}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="hero" 
              size="default"
              onClick={() => document.getElementById('client-portal')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <LogIn className="w-4 h-4 mr-2" />
              INGRESO SISTEMA PEDIDOS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link to="/about-us" className="text-foreground hover:text-primary transition-smooth font-medium">
                Sobre nosotros
              </Link>
              <a 
                href="#productos" 
                onClick={handleProductosClick}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Productos
              </a>
              <Link to="/carta-colores" className="text-foreground hover:text-primary transition-smooth font-medium">
                Carta de colores
              </Link>
              <a 
                href="#contacto" 
                onClick={handleContactoClick}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Contacto
              </a>
            </nav>
            <div className="flex flex-col space-y-3">
              <Button 
                variant="hero" 
                size="default" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('client-portal')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                INGRESO SISTEMA PEDIDOS
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;