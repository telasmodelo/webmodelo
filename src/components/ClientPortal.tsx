import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Lock, User, Mail, Eye, EyeOff, Shield, ShoppingCart, Package, Palette, Hash, Calendar as CalendarIcon, AlertCircle } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";

const productTypes = [
  "Algodón Premium",
  "Mezcla Poliéster", 
  "Lino Fino",
  "Seda Natural",
  "Denim Clásico",
  "Lycra Sport",
  "Jersey",
  "Gabardina"
];

const fabricColors = [
  "Blanco", "Negro", "Azul Marino", "Gris", "Beige", 
  "Rojo", "Verde", "Amarillo", "Rosa", "Violeta",
  "Marrón", "Naranja", "Turquesa", "Fucsia"
];

const ClientPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [deliveryDate, setDeliveryDate] = useState<Date>();

  return (
    <section id="client-portal" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Portal de Clientes
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Acceso{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Exclusivo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ingresá a tu cuenta para realizar pedidos, consultar historial y gestionar tu información.
            </p>
          </div>

          <Tabs defaultValue="access" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="access" className="flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Acceso
              </TabsTrigger>
              <TabsTrigger value="order" className="flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Nuevo Pedido
              </TabsTrigger>
            </TabsList>

            <TabsContent value="access">
              <div className="max-w-md mx-auto">
                <Card className="shadow-elegant border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Lock className="w-6 h-6 mr-3 text-primary" />
                      {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                    </CardTitle>
                    <CardDescription>
                      {isLogin 
                        ? "Ingresá tus credenciales para acceder a tu cuenta"
                        : "Completá los datos para crear tu cuenta de cliente"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {!isLogin && (
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre Completo</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              id="name" 
                              placeholder="Tu nombre completo" 
                              className="pl-10"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="tu@email.com" 
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input 
                            id="password" 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••" 
                            className="pl-10 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {!isLogin && (
                      <Alert className="bg-amber-50 border-amber-200">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                        <AlertDescription className="text-amber-800">
                          <strong>Atención:</strong> Tu cuenta necesita ser validada por nuestro equipo antes de activarse.
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button variant="hero" className="w-full" size="lg">
                      {isLogin ? "Ingresar" : "Crear Cuenta"}
                    </Button>

                    <div className="text-center">
                      <Separator className="my-4" />
                      <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {isLogin 
                          ? "¿No tenés cuenta? Registrate aquí" 
                          : "¿Ya tenés cuenta? Iniciá sesión"
                        }
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="order">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <Badge variant="secondary" className="mb-4">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Formulario de Pedido
                  </Badge>
                  <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
                    Realizá tu{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Pedido Online
                    </span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Completá el formulario con los detalles de tu pedido. Nuestro equipo se pondrá en contacto para confirmar los detalles.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Order Form */}
                  <div className="lg:col-span-2">
                    <Card className="shadow-elegant border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Package className="w-6 h-6 mr-3 text-primary" />
                          Detalles del Pedido
                        </CardTitle>
                        <CardDescription>
                          Especificá los productos que necesitás para tu pedido
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        {/* Product Selection */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="product-type" className="flex items-center">
                              <Package className="w-4 h-4 mr-2" />
                              Tipo de Producto
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccioná el tipo de tela" />
                              </SelectTrigger>
                              <SelectContent>
                                {productTypes.map((type) => (
                                  <SelectItem key={type} value={type.toLowerCase()}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="fabric-color" className="flex items-center">
                              <Palette className="w-4 h-4 mr-2" />
                              Color de Tela
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Elegí el color" />
                              </SelectTrigger>
                              <SelectContent>
                                {fabricColors.map((color) => (
                                  <SelectItem key={color} value={color.toLowerCase()}>
                                    {color}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Quantity and Date */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="quantity" className="flex items-center">
                              <Hash className="w-4 h-4 mr-2" />
                              Cantidad (KG)
                            </Label>
                            <Input 
                              id="quantity" 
                              type="number" 
                              placeholder="Ej: 100" 
                              min="1"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-2" />
                              Fecha de Entrega
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !deliveryDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {deliveryDate ? (
                                    format(deliveryDate, "PPP", { locale: es })
                                  ) : (
                                    <span>Seleccioná una fecha</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={deliveryDate}
                                  onSelect={setDeliveryDate}
                                  initialFocus
                                  className="pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="space-y-2">
                          <Label htmlFor="notes">
                            Observaciones Adicionales
                          </Label>
                          <Textarea
                            id="notes"
                            placeholder="Agregá cualquier detalle específico sobre tu pedido..."
                            rows={4}
                          />
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <Button variant="hero" size="lg" className="flex-1">
                            Enviar Pedido
                          </Button>
                          <Button variant="outline" size="lg" className="flex-1">
                            Guardar Borrador
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-6">
                    <Card className="border-primary/20 bg-gradient-primary/5">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">
                          Resumen del Pedido
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Producto:</span>
                            <span className="font-medium">Por seleccionar</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Color:</span>
                            <span className="font-medium">Por seleccionar</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Cantidad:</span>
                            <span className="font-medium">-</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Entrega:</span>
                            <span className="font-medium">Por definir</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardHeader>
                        <CardTitle className="text-lg">Información Importante</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Los precios se confirman por email</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Tiempo de producción: 5-10 días hábiles</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Muestras disponibles bajo pedido</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;