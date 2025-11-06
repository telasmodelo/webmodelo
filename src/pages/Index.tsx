import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ProductShowcase from "@/components/ProductShowcase";
import ClientPortal from "@/components/ClientPortal";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll a esa sección después de que la página se cargue
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remover el #
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Si no hay hash, hacer scroll al inicio de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ProductShowcase />
        <ClientPortal />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;