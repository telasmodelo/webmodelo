export interface FabricColor {
    name: string;
    code: string;
    hex: string;
  }
  
  export interface Fabric {
    id: string;
    name: string;
    description: string;
    image: string;
    colors: FabricColor[];
  }
  
  export const fabrics: Fabric[] = [
    {
      id: "polar",
      name: "Polar",
      description: "Tela polar de alta calidad, ideal para confección de prendas abrigadas y cómodas.",
      image: "/images/polar-fabric.jpg",
      colors: [
        { name: "BLANCO", code: "001", hex: "#FFFFFF" },
        { name: "NATURAL", code: "134", hex: "#F5F5DC" },
        { name: "BEIGE", code: "138", hex: "#D9C2A3" },
        { name: "CEMENTO FUERTE", code: "181", hex: "#A3A3A3" },
        { name: "NEGRO", code: "005", hex: "#000000" },
        { name: "CAMEL", code: "137", hex: "#C19A6B" },
        { name: "SEPIA", code: "486", hex: "#704214" },
        { name: "MOSTAZA", code: "479", hex: "#D4A017" },
        { name: "GAMUZA", code: "503", hex: "#C2A283" },
        { name: "CHOCOLATE", code: "548", hex: "#4E2C1E" },
        { name: "AMARILLO PATITO", code: "055", hex: "#FFF59D" },
        { name: "AMARILLO", code: "054", hex: "#FACC15" },
        { name: "AMARILLO ORO", code: "060", hex: "#D97706" },
        { name: "VERDE LIQUEN", code: "842", hex: "#7C9A6D" },
        { name: "VERDE", code: "854", hex: "#16A34A" },
        { name: "VERDE AGUA", code: "908", hex: "#00A896" },
        { name: "VERDE BRILLANTE", code: "856", hex: "#22C55E" },
        { name: "VERDE TROPICAL", code: "824", hex: "#10B981" },
        { name: "VERDE MUSGO", code: "880", hex: "#4D7C0F" },
        { name: "DURAZNO", code: "488", hex: "#F4A460" },
        { name: "NARANJA", code: "570", hex: "#F97316" },
        { name: "OCRE", code: "567", hex: "#CC7722" },
        { name: "LADRILLO", code: "603", hex: "#B45309" },
        { name: "BORDO", code: "247", hex: "#7F1D1D" },
        { name: "ROSA", code: "719", hex: "#F472B6" },
        { name: "CHICLE", code: "728", hex: "#EC4899" },
        { name: "GUINDA", code: "329", hex: "#7F1B2D" },
        { name: "ROJO", code: "669", hex: "#DC2626" },
        { name: "BORRAVINO", code: "628", hex: "#6B0F1A" },
        { name: "LILA", code: "444", hex: "#A78BFA" },
        { name: "OBISPO", code: "947", hex: "#7C3AED" },
        { name: "MORA", code: "972", hex: "#6D28D9" },
        { name: "UVA", code: "977", hex: "#5B21B6" },
        { name: "VIOLETA", code: "933", hex: "#8B5CF6" },
        { name: "CELESTE", code: "069", hex: "#93C5FD" },
        { name: "CELESTE ARG", code: "083", hex: "#60A5FA" },
        { name: "AZULENO", code: "300", hex: "#3B82F6" },
        { name: "AZULINO", code: "086", hex: "#2563EB" },
        { name: "FRANCIA", code: "306", hex: "#1D4ED8" },
        { name: "BERGAMOTA", code: "579", hex: "#FBBF24" },
        { name: "AFRICANO", code: "497", hex: "#78350F" },
        { name: "VERDE JADE", code: "789", hex: "#10B981" },
        { name: "TURQUESA", code: "793", hex: "#06B6D4" },
        { name: "AERO", code: "092", hex: "#38BDF8" },
        { name: "PETROLEO", code: "107", hex: "#0F766E" },
        { name: "MARINO", code: "130", hex: "#1E3A8A" },
        { name: "NARANJA FLUO", code: "608", hex: "#FF6A00" },
        { name: "AMARILLO FLUO", code: "051", hex: "#FFD000" },
        { name: "GRIS 15%", code: "366", hex: "#D4D4D8" },
        { name: "GRIS 40%", code: "432", hex: "#9CA3AF" },
        { name: "GRIS MEDIO", code: "371", hex: "#6B7280" },
        { name: "GRIS 70%", code: "435", hex: "#374151" },
        { name: "GRIS INTENSO", code: "430", hex: "#111827" }
      ]
    },
    {
      id: "deportivo",
      name: "Deportivo",
      description: "Tejido técnico para prendas deportivas: transpirable, elástico y de secado rápido.",
      image: "/images/deportivo-fabric.png",
      colors: [
        { name: "BLANCO", code: "001", hex: "#FFFFFF" },
        { name: "NATURAL", code: "155", hex: "#EEE8D5" },
        { name: "AMARILLO", code: "061", hex: "#FACC15" },
        { name: "ORO 2007", code: "058", hex: "#D4A017" },
        { name: "AMARILLO ORO", code: "060", hex: "#D97706" },
        { name: "DORADO 2007", code: "012", hex: "#B45309" },
        { name: "NARANJA", code: "570", hex: "#F97316" },
        { name: "CORAL INTENSO", code: "568", hex: "#FB7185" },
        { name: "ROJO", code: "661", hex: "#DC2626" },
        { name: "CARMIN", code: "667", hex: "#991B1B" },
        { name: "BORDO", code: "245", hex: "#7F1D1D" },
        { name: "ROSA", code: "695", hex: "#F472B6" },
        { name: "CHICLE", code: "728", hex: "#EC4899" },
        { name: "ORQUIDEA", code: "350", hex: "#C084FC" },
        { name: "LILA", code: "462", hex: "#A78BFA" },
        { name: "VIOLETA", code: "928", hex: "#7C3AED" },
        { name: "UVA", code: "977", hex: "#5B21B6" },
        { name: "MARINO", code: "120", hex: "#1E3A8A" },
        { name: "AZUL 2006", code: "116", hex: "#1D4ED8" },
        { name: "AZUL ARGENTINA", code: "115", hex: "#60A5FA" },
        { name: "AERONAUTICO", code: "100", hex: "#3B82F6" },
        { name: "PETROLEO", code: "109", hex: "#0F766E" },
        { name: "FRANCIA", code: "306", hex: "#1D4ED8" },
        { name: "TURQUESA", code: "793", hex: "#06B6D4" },
        { name: "CIELO", code: "085", hex: "#93C5FD" },
        { name: "CELESTE", code: "081", hex: "#60A5FA" },
        { name: "VERDE BRILLANTE", code: "856", hex: "#22C55E" },
        { name: "VERDE ESMERALDA", code: "817", hex: "#10B981" },
        { name: "VERDE MUSGO", code: "880", hex: "#4D7C0F" },
        { name: "VERDE OSCURO", code: "907", hex: "#14532D" },
        { name: "MARRON", code: "543", hex: "#4E342E" },
        { name: "GAMUZA", code: "503", hex: "#C2A283" },
        { name: "BEIGE", code: "139", hex: "#D9C2A3" },
        { name: "TIZA", code: "393", hex: "#F3F4F6" },
        { name: "ESTAÑO", code: "390", hex: "#D1D5DB" },
        { name: "GRIS CENIZA", code: "348", hex: "#9CA3AF" },
        { name: "GRIS OSCURO", code: "426", hex: "#374151" },
        { name: "GRIS 30%", code: "368", hex: "#BDBDBD" },
        { name: "GRIS 50%", code: "433", hex: "#9E9E9E" },
        { name: "NEGRO", code: "005", hex: "#000000" },
        { name: "GRIS 65%", code: "434", hex: "#666666" },
        { name: "GRIS 70%", code: "437", hex: "#4B5563" },
        { name: "AMARILLO FLUO", code: "051", hex: "#FFD000" },
        { name: "NARANJA FLUO", code: "608", hex: "#FF6A00" }
      ]
    },
    {
      id: "darlom",
      name: "Darlom",
      description: "Tejido Darlom de alta calidad, suave y resistente al desgaste.",
      image: "/images/darlom-fabric.jpg",
      colors: [
        { name: "Blanco Nieve", code: "201", hex: "#ffffff" },
        { name: "Negro Carbón", code: "202", hex: "#1f2937" },
        { name: "Azul Petróleo", code: "203", hex: "#164e63" },
        { name: "Gris Acero", code: "204", hex: "#475569" },
        { name: "Beige Arena", code: "205", hex: "#d6d3d1" },
        { name: "Rojo Borgona", code: "206", hex: "#991b1b" },
        { name: "Verde Bosque", code: "207", hex: "#14532d" },
        { name: "Mostaza", code: "208", hex: "#a16207" },
        { name: "Rosa Palo", code: "209", hex: "#fda4af" },
        { name: "Lila", code: "210", hex: "#a855f7" }
      ]
    },
    {
      id: "elastano",
      name: "Elastano",
      description: "Tejido con elastano para máxima flexibilidad y comodidad en el movimiento.",
      image: "/images/elastano.png",
      colors: [
        { name: "Blanco", code: "301", hex: "#ffffff" },
        { name: "Negro", code: "302", hex: "#000000" },
        { name: "Azul Eléctrico", code: "303", hex: "#2563eb" },
        { name: "Gris Plata", code: "304", hex: "#94a3b8" },
        { name: "Coral", code: "305", hex: "#f97316" },
        { name: "Verde Neón", code: "306", hex: "#22c55e" },
        { name: "Amarillo Flúor", code: "307", hex: "#facc15" },
        { name: "Rosa Chicle", code: "308", hex: "#f472b6" },
        { name: "Púrpura", code: "309", hex: "#9333ea" },
        { name: "Aqua", code: "310", hex: "#06b6d4" }
      ]
    }
    ,
    {
      id: "sarga",
      name: "Sarga",
      description: "Tela sarga resistente y duradera, perfecta para prendas de trabajo y uniformes.",
      image: "/images/sarga.png",
      colors: [
        { name: "Negro", code: "401", hex: "#111827" },
        { name: "Azul Marino", code: "402", hex: "#1f3a8a" },
        { name: "Beige", code: "403", hex: "#d1b894" },
        { name: "Gris", code: "404", hex: "#6b7280" }
      ]
    },
    {
      id: "camisetas",
      name: "Camisetas",
      description: "Algodón de alta calidad para confección de camisetas cómodas y transpirables.",
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
      colors: [
        { name: "Blanco", code: "501", hex: "#ffffff" },
        { name: "Negro", code: "502", hex: "#000000" },
        { name: "Gris", code: "503", hex: "#9ca3af" },
        { name: "Azul", code: "504", hex: "#2563eb" }
      ]
    },
    {
      id: "ribb",
      name: "Ribb",
      description: "Tejido ribb con textura acanalada, ideal para cuellos, puños y prendas ajustadas.",
      image: "/images/ribb.png",
      colors: [
        { name: "Blanco", code: "601", hex: "#ffffff" },
        { name: "Negro", code: "602", hex: "#000000" },
        { name: "Rojo", code: "603", hex: "#ef4444" },
        { name: "Verde", code: "604", hex: "#16a34a" }
      ]
    }
  ];
  
  export const getFabricById = (id: string): Fabric | undefined => {
    return fabrics.find(fabric => fabric.id === id);
  };