import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FabricCatalog from "@/components/FabricCatalog";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CartaDeColores = () => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al inicio cuando se carga la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <FabricCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default CartaDeColores;