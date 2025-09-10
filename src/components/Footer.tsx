const Footer = () => {
  return (
    <footer className="bg-ice-deep text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
              </div>
              <h3 className="text-2xl font-bold">Gelo Rigido BH</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Fornecedor líder em gelos rígidos industriais. 
              Qualidade, rapidez e confiabilidade há mais de 15 anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Gelos Rigidos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>

              <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Qualidade</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>📞 (31) 99379-8263</li>
              <li>📧 gelorigidobh@gmail.com</li>
              <li>📍 Rua Industrial, 123</li>
              <li>🕒 24h - 7 dias por semana</li>
            </ul>
          </div> */}
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Gelo Rigido Bh. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;