import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, FolderKanban, Sparkles } from "lucide-react";

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
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 h-full flex flex-col hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="mb-8">
                    <img 
                      src="/logoescurahorizontal.png" 
                      alt="ConverseIA Direito Logo" 
                      className="h-12 w-auto object-contain"
                    />
                    <p className="text-muted-foreground mt-2">Setor Jurídico</p>
                  </div>
                  
                  <p className="text-lg text-corporate-lg mb-8 leading-relaxed flex-grow">
                    Uma solução de IA especializada que revoluciona o atendimento e a qualificação de clientes, garantindo agilidade e precisão. Automatiza a triagem, qualifica leads em tempo real e conduz consultas iniciais com alto nível de especialização.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3" /><span>Qualificação automática de clientes</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3" /><span>Triagem especializada de casos</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3" /><span>Integração com sistemas jurídicos</span></div>
                  </div>

                  <Button variant="outline" size="lg" className="group w-full mt-auto">
                    Conheça a solução
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Conciarge */}
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 h-full flex flex-col hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="mb-8">
                    <img 
                      src="/Conciarge(NEGATIVO+FUNDOTRANSPARENTE)-logo5.png" 
                      alt="Conciarge Logo" 
                      className="h-16 w-auto object-contain"
                    />
                    <p className="text-muted-foreground mt-2">Setor de Saúde</p>
                  </div>
                  
                  <p className="text-lg text-corporate-lg mb-8 leading-relaxed flex-grow">
                    Reinventamos a jornada do paciente, automatizando o agendamento e a comunicação para clínicas com um toque de cuidado digital. Nossa solução humaniza a automação, mantendo o calor humano em cada interação.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-3" /><span>Agendamento inteligente 24/7</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-3" /><span>Comunicação empática automatizada</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-3" /><span>Integração com sistemas de saúde</span></div>
                  </div>

                  <Button variant="outline" size="lg" className="group w-full mt-auto">
                    Conheça a solução
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
              
              {/* Gestão de Projetos Tecnológicos */}
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 h-full flex flex-col hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-talka p-4 rounded-2xl mr-6">
                      <FolderKanban className="w-12 h-12 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">
                        Gestão de Projetos
                      </h3>
                      <p className="text-muted-foreground">Tecnologia e Inovação</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-corporate-lg mb-8 leading-relaxed flex-grow">
                    Estruturamos e gerenciamos seus projetos de tecnologia do início ao fim. Garantimos que suas iniciativas de inovação sejam entregues no prazo, dentro do orçamento e com o impacto esperado, utilizando metodologias ágeis e governança robusta.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3" /><span>Planejamento estratégico e roadmap</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3" /><span>Gestão de escopo, tempo e custos</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3" /><span>Metodologias ágeis (Scrum, Kanban)</span></div>
                  </div>

                  <Button variant="outline" size="lg" className="group w-full mt-auto">
                    Saiba mais
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Projetos Personalizados */}
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 h-full flex flex-col hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-talka p-4 rounded-2xl mr-6">
                      <Sparkles className="w-12 h-12 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">
                        Projetos Personalizados
                      </h3>
                      <p className="text-muted-foreground">Soluções Sob Medida</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-corporate-lg mb-8 leading-relaxed flex-grow">
                    Sua empresa tem um desafio único? Nós criamos soluções de automação e IA totalmente personalizadas. Realizamos um diagnóstico profundo para desenvolver uma ferramenta que se integra perfeitamente à sua operação e resolve seu problema específico.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-3" /><span>Diagnóstico e arquitetura de solução</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-3" /><span>Desenvolvimento de agentes de IA</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-3" /><span>Integração com sistemas existentes</span></div>
                  </div>

                  <Button variant="outline" size="lg" className="group w-full mt-auto">
                    Fale com um especialista
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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