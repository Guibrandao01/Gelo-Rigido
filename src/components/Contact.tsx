import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-deep">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Pronto para fornecermos o melhor gelo para seu negócio? Fale conosco!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground">Solicite seu Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Nome" 
                  className="bg-primary-foreground/90 border-primary-foreground/30 text-foreground"
                />
                <Input 
                  placeholder="Empresa" 
                  className="bg-primary-foreground/90 border-primary-foreground/30 text-foreground"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="E-mail" 
                  type="email"
                  className="bg-primary-foreground/90 border-primary-foreground/30 text-foreground"
                />
                <Input 
                  placeholder="Telefone" 
                  className="bg-primary-foreground/90 border-primary-foreground/30 text-foreground"
                />
              </div>
              <Textarea 
                placeholder="Descreva suas necessidades (tipo de gelo, quantidade, frequência de entrega...)"
                rows={4}
                className="bg-primary-foreground/90 border-primary-foreground/30 text-foreground"
              />
              <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:shadow-glow transition-all duration-300">
                Enviar Solicitação
              </Button>
            </CardContent>
          </Card>
           */}
          <div className="space-y-6 text-primary-foreground">
            <div>
              <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold">Endereço</div>
                    <div className="text-primary-foreground/80">Av. Vila Rica, 613 Inconfidentes, Contagem - MG, 32260-100</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-primary-foreground/80"> (31) 99379-8263</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="text-primary-foreground/80">gelorigidobh@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    🕒
                  </div>
                  <div>
                    <div className="font-semibold">Horário de Funcionamento</div>
                    <div className="text-primary-foreground/80">24 horas, 7 dias por semana</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="bg-primary-foreground/10 p-6 rounded-lg border border-primary-foreground/20">
              <h4 className="font-bold text-lg mb-2">Atendimento de Emergência</h4>
              <p className="text-primary-foreground/80 mb-4">
                Precisa de gelo urgente? Temos plantão 24h para atender emergências.
              </p>
              <Button 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Ligar Agora: (11) 9999-8888
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;