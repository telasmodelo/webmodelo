import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Droplets, CheckCircle, Clock, Layers, Users } from "lucide-react";

const valuePropositions = [
  {
    icon: Factory,
    title: "Capacidad productiva destacada",
    description: "Una planta preparada para responder a grandes volúmenes con eficiencia y calidad."
  },
  {
    icon: Droplets,
    title: "Tintorería especializada", 
    description: "Procesos de teñido de alto nivel, flexibles y orientados a las necesidades de cada producto."
  },
  {
    icon: CheckCircle,
    title: "Control integral de procesos",
    description: "Supervisamos internamente cada etapa de la fabricación y tintorería."
  },
  {
    icon: Clock,
    title: "Garantía en entregas",
    description: "Gestionamos entregas de manera eficiente, garantizando una respuesta rápida."
  },
  {
    icon: Layers,
    title: "Variedad de desarrollos textiles",
    description: "Ofrecemos una amplia gama de telas de punto y plano."
  },
  {
    icon: Users,
    title: "Asesoramiento profesional",
    description: "Acompañamos a cada cliente para seleccionar el producto que mejor se adapta a sus necesidades."
  }
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Nuestro compromiso
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestro{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              valor agregado
            </span>
          </h2>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuePropositions.map((item, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-border hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;