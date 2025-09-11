import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iceCubesImage from "@/assets/ice-cubes.jpg";
import iceBlocksImage from "@/assets/ice-blocks.jpg";
import artgelo from "@/assets/gelogelado.png";
import gelin   from "@/assets/gelooriginal.png";


const products = [
  {
    id: 1,
    name: "Gelo Rígido 100ml - 15unidades",
    description: "Pode ser congelado e usado várias vezes, reduzindo custos a longo prazo",
    image:  gelin,
    sizes: ["8,7cm", "5,0cm", "2,9cm"],
    features: ["100% puro", "Derretimento lento", "Formato uniforme"]
  },
  {
    id: 2,
    name: "Gelo Rígido 200ml - 15unidades",
    description: "Barras de gelo industrial para grandes volumes e refrigeração",
    image: gelin,
    sizes: ["12,0cm", "7,0cm", "2,9cm"],
    features: ["Alta durabilidade", "Ideal para pescados", "Refrigeração industrial"]
  },
  {
    id: 3,
    name: "Gelo Rígido 400ml - 15unidades",
    description: "Não derrete como o gelo comum (não gera água), evitando bagunça ou contaminação de alimentos.",
    image: gelin,
    sizes: ["17,0cm", "10,0cm", "2,0cm"],
    features: ["Máxima conservação", "Fácil manuseio", "Cobertura uniforme"]
  },
  {
    id: 4,
    name: "Gelo Rígido 500ml - 15unidades",
    description: "Mantém a temperatura de forma mais estável por mais tempo que cubos de gelo tradicionais",
    image: gelin,
    sizes: ["17,0cm", "10,0cm", "3,7cm"],
    features: ["Atóxicos e reutilizáveis", "100% recicláveis", "Derretimento lento"]
  },
  {
    id: 5,
    name: "Gelo Rígido 510ml - 15unidades",
    description: "Muitos são feitos com material atóxico e próprios para contato com alimentos ",
    image: gelin,
    sizes: ["113,5cm", "9,5cm", "4,9cm"],
    features: ["Maior resistência a impactos", "Embalagens otimizadas", "Melhor congelamento"]
  },
  {
    id: 6,
    name: "Gelo Rígido 550ml - 15unidades",
    description: "Disponíveis em diferentes tamanhos e formas para se ajustar melhor ao espaço ",
    image: gelin,
    sizes: ["22,0cm", "15,0cm", "2,0cm"],
    features: ["Produtos 100% inspecionados", "Mais limpo", "Padrões de qualidade"]
  },
  {
    id: 7,
    name: "Gelo Rígido 1 Litro - 15unidades",
    description: "Mantém a temperatura de forma mais estável por mais tempo que cubos de gelo tradicionais ",
    image: gelin,
    sizes: ["121,5cm", "15,5cm", "3,5cm"],
    features: ["Equipe altamente qualificada", "100% puro", "Controle de temperatura"]
  }
];



const ProductCatalog = () => {
  return (
    <section id="produtos" className="py-20 bg-gradient-ice">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma linha completa de gelos rígidos para atender todas as suas necessidades comerciais
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-ice transition-all duration-300 animate-fade-in border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-couver group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2 text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {product.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Medidas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span 
                        key={size}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
               <Button
                    onClick={() => {
                      const phone = "5531993798263"; 
                      const message = `Olá! Tenho interesse:\nProduto: *${product.name}*\nMedidas: *${product.sizes}*\nPode me passar mais informações?`;
                      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank", "noopener,noreferrer");
                    }}
                    className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300">
                             Solicitar produto
              </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;