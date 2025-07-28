import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Inteligência Aplicada</span> para Setores Específicos
            </h1>
            <p className="text-xl text-corporate-lg max-w-4xl mx-auto">
              Acreditamos que o verdadeiro impacto da tecnologia acontece quando ela é moldada para as necessidades únicas de cada indústria. 
              Conheça nossas soluções prontas para transformar seu mercado.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* ConverseIA Direito */}
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-talka p-6 rounded-2xl mr-6">
                      <div className="w-16 h-16 bg-foreground/10 rounded-xl flex items-center justify-center">
                        <span className="text-foreground font-bold text-2xl">C</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">
                        ConverseIA Direito
                      </h3>
                      <p className="text-muted-foreground">Setor Jurídico</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-corporate-lg mb-8 leading-relaxed">
                    Uma solução de IA especializada que revoluciona o atendimento e a qualificação 
                    de clientes no setor jurídico, garantindo agilidade e precisão. Nossa plataforma 
                    automatiza a triagem de casos, qualifica leads em tempo real e conduz consultas 
                    iniciais com alto nível de especialização jurídica.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">Qualificação automática de clientes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">Triagem especializada de casos</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">Integração com sistemas jurídicos</span>
                    </div>
                  </div>

                  <Button variant="outline" size="lg" className="group w-full">
                    Conheça a solução
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Conciarge */}
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-talka p-6 rounded-2xl mr-6">
                      <div className="w-16 h-16 bg-foreground/10 rounded-xl flex items-center justify-center">
                        <span className="text-foreground font-bold text-2xl">C</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">
                        Conciarge
                      </h3>
                      <p className="text-muted-foreground">Setor de Saúde</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-corporate-lg mb-8 leading-relaxed">
                    Reinventamos a jornada do paciente, automatizando o agendamento e a comunicação 
                    para clínicas e o setor de saúde com um toque de cuidado digital. Nossa solução 
                    humaniza a automação, mantendo o calor humano em cada interação.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      <span className="text-muted-foreground">Agendamento inteligente 24/7</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      <span className="text-muted-foreground">Comunicação empática automatizada</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      <span className="text-muted-foreground">Integração com sistemas de saúde</span>
                    </div>
                  </div>

                  <Button variant="outline" size="lg" className="group w-full">
                    Conheça a solução
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Sua indústria tem um <span className="gradient-text">desafio único</span>?
            </h2>
            <p className="text-xl text-corporate-lg mb-10">
              Se o seu setor não está listado, mas você acredita que a automação inteligente pode revolucionar sua operação, 
              nós queremos ouvir você. Somos especialistas em desenvolver soluções de IA personalizadas.
            </p>
            <Button size="lg" className="group">
              Fale com um especialista sobre um projeto customizado
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;