import { Button } from "@/components/ui/button";
import logo  from "@/assets/logori.jpeg";
import logo_sem_fundo  from "@/assets/logo_sem_fundo.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
           {/* <div className="w-32 h-32 bg-gradient-hero rounded-lg flex items-center justify-center"> */}
              <div className="flex items-center">
              <img
              src={logo}
              alt="logo"
              className="w-16 h-16 rounded-lg" 
              />
            </div>
          {/* </div>  */}
          <h1 className="text-2xl font-bold text-foreground">Gelo Rigido</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <Button  onClick={() => {
            const phone = "5531993580175"; 
            const message = `Olá! Desejo solicitar o orcamento !`;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank", "noopener,noreferrer");
          }}
        variant="default" className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;