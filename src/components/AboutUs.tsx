const AboutUs = () => {
    return (
      <section id="sobre-nosotros" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-12">
              Sobre{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nosotros
              </span>
            </h2>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Fundada en 1967 en Merlo, Buenos Aires, comenzamos como tintorería dedicada exclusivamente a procesos de terminación. En 1995 incorporamos la fabricación de nuestros propios tejidos, lo que nos permitió consolidarnos como uno de los referentes de la industria textil argentina.
              </p>
              
              <p>
                Hoy nos especializamos en tejidos sintéticos, con tecnología de última generación y un equipo altamente capacitado. Nuestro compromiso es brindar productos de máxima calidad que respondan a las necesidades de cada cliente.
              </p>
              
              <p>
                Además, trabajamos día a día para minimizar nuestro impacto ambiental. La producción responsable y la mejora continua de nuestros procesos forman parte esencial de nuestra filosofía empresarial.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;