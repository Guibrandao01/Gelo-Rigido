import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import iceCubesImage from "@/assets/ice-cubes.jpg";
import iceBlocksImage from "@/assets/ice-blocks.jpg";
import artgelo from "@/assets/gelogelado.png";
import gelin from "@/assets/gelooriginal.png";

import img100ml_1 from "@/assets/100ml/100ml.1.jpeg";
import img100ml_2 from "@/assets/100ml/100ml.2.jpeg";

import img200ml_1 from "@/assets/200ml/200ml.1.jpeg";
import img200ml_2 from "@/assets/200ml/200ml.2.jpeg";

import img400ml_1 from "@/assets/400ml/400ml.1.jpeg";
import img400ml_2 from "@/assets/400ml/400ml.2.jpeg";

import img500ml_1 from "@/assets/500ml/500ml.1.jpeg";
import img500ml_2 from "@/assets/500ml/500ml.2.jpeg";

import img510ml_1 from "@/assets/510ml/510ml.1.jpeg";
import img510ml_2 from "@/assets/510ml/510ml.2.jpeg";

import img550ml_1 from "@/assets/550ml/550ml.1.jpeg";
import img550ml_2 from "@/assets/550ml/550ml.2.jpeg";

import img750ml_1 from "@/assets/750ml/750ml.1.jpeg";
import img750ml_2 from "@/assets/750ml/750ml.2.jpeg";

import img1litro_1 from "@/assets/1litro/1litro.1.jpeg";
import img1litro_2 from "@/assets/1litro/1litro.2.jpeg";


const products = [
  {
    id: 1,
    name: "Gelo Rígido 100ml - 15unidades",
    description:
      "Pode ser congelado e usado várias vezes, reduzindo custos a longo prazo",
    images: [img100ml_1, img100ml_2],
    sizes: ["8,7cm", "5,0cm", "2,9cm"],
    features: ["100% puro", "Derretimento lento", "Formato uniforme"],
  },
  {
    id: 2,
    name: "Gelo Rígido 200ml - 15unidades",
    description:
      "Barras de gelo industrial para grandes volumes e refrigeração",
    images: [img200ml_1, img200ml_2],
    sizes: ["12,0cm", "7,0cm", "2,9cm"],
    features: ["Alta durabilidade", "Ideal para pescados", "Refrigeração industrial"],
  },
  {
    id: 3,
    name: "Gelo Rígido 400ml - 15unidades",
    description:
      "Não derrete como o gelo comum (não gera água), evitando bagunça ou contaminação de alimentos.",
    images: [img400ml_1, img400ml_2],
    sizes: ["17,0cm", "10,0cm", "2,7cm"],
    features: ["Máxima conservação", "Fácil manuseio", "Cobertura uniforme"],
  },
  {
    id: 4,
    name: "Gelo Rígido 500ml - 15unidades",
    description:
      "Mantém a temperatura de forma mais estável por mais tempo que cubos de gelo tradicionais",
    images: [img500ml_1, img500ml_2],
    sizes: ["17,0cm", "10,0cm", "3,7cm"],
    features: ["Atóxicos e reutilizáveis", "100% recicláveis", "Derretimento lento"],
  },
  {
    id: 5,
    name: "Gelo Rígido 510ml - 15unidades",
    description:
      "Muitos são feitos com material atóxico e próprios para contato com alimentos ",
    images: [img510ml_1, img510ml_2],
    sizes: ["13,5cm", "9,5cm", "4,9cm"],
    features: ["Maior resistência a impactos", "Embalagens otimizadas", "Melhor congelamento"],
  },
  {
    id: 6,
    name: "Gelo Rígido 550ml - 15unidades",
    description:
      "Disponíveis em diferentes tamanhos e formas para se ajustar melhor ao espaço ",
    images: [img550ml_1, img550ml_2],
    sizes: ["22,0cm", "15,0cm", "2,0cm"],
    features: ["Produtos 100% inspecionados", "Mais limpo", "Padrões de qualidade"],
  },

  {
    id: 7,
    name: "Gelo Rígido 750ml - 15unidades",
    description:
      "Mantém a temperatura de forma mais estável por mais tempo que cubos de gelo tradicionais ",
    images: [img750ml_1 , img750ml_2],
    sizes: ["27,5cm", "15,5cm", "2,3cm"],
    features: ["Blocos extremamente compactos", "Formato padronizado", "Ideal para uso profissional"],
  },
  {
    id: 8,
    name: "Gelo Rígido 1 Litro - 15unidades",
    description:
      "Mantém a temperatura de forma mais estável por mais tempo que cubos de gelo tradicionais ",
    images: [img1litro_1, img1litro_2],
    sizes: ["21,5cm", "15,5cm", "3,5cm"],
    features: ["Equipe altamente qualificada", "100% puro", "Controle de temperatura"],
  },
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
            Oferecemos uma linha completa de gelos rígidos para atender todas as
            suas necessidades comerciais
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
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {product.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={img}
                            alt={`${product.name} imagem ${idx + 1}`}
                            className="w-full h-60 object-cover bg-black/5 rounded-t-lg transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2 text-foreground">
                  {product.name}
                </CardTitle>
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
                  <h4 className="font-semibold text-foreground mb-2">
                    Características:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground text-sm flex items-center"
                      >
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
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                >
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
