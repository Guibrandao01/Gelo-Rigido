import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Qualidade Premium",
    description: "Gelo 100% puro, produzido com água filtrada e processos rigorosos de qualidade",
    icon: "❄️"
  },
  {
    title: "Entrega Rápida",
    description: "Logística otimizada para garantir que seu gelo chegue fresco e no prazo",
    icon: "🚚"
  },
  {
    title: "Preços Competitivos",
    description: "Oferecemos os melhores preços do mercado sem comprometer a qualidade",
    icon: "💰"
  },
  {
    title: "Atendimento 24h",
    description: "Equipe especializada disponível para atender suas necessidades a qualquer hora",
    icon: "📞"
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a Gelo Rigido BH
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Há mais de 15 anos no mercado, a Gelo Rigido BH é referência em fornecimento de gelo 
              industrial para empresas de todos os portes. Nossa missão é garantir que seu 
              negócio tenha sempre o gelo de melhor qualidade.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Utilizamos tecnologia de ponta e processos rigorosos de controle de qualidade 
              para produzir gelo cristalino, puro e durável. Nossa equipe está sempre pronta 
              para atender suas necessidades com agilidade e profissionalismo.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gradient-ice p-4 rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="bg-gradient-ice p-4 rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Clientes atendidos</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-ice transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;