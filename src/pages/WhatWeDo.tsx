import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Map, Settings, Zap, Brain, MessageSquare, Link as LinkIcon } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Nossas <span className="gradient-text">Capacidades</span> de Transformação
            </h1>
          </div>
        </section>

        {/* Gestão de Processos Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                O <span className="gradient-text">alicerce</span> da inovação
              </h2>
              <p className="text-xl text-corporate-lg max-w-4xl mx-auto text-center">
                Antes de automatizar, é preciso otimizar. Um processo falho automatizado é apenas uma falha mais rápida. 
                Nossa abordagem garante que sua transformação digital seja construída sobre uma base sólida, eficiente e escalável.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Search,
                  title: "Diagnóstico 360°",
                  description: "Mergulhamos na sua operação para entender os fluxos de trabalho, as ferramentas utilizadas e os pontos de atrito que limitam seu crescimento."
                },
                {
                  icon: Map,
                  title: "Mapeamento de Jornadas",
                  description: "Desenhamos a jornada completa dos seus clientes e colaboradores, identificando gargalos e oportunidades de otimização em cada ponto de contato."
                },
                {
                  icon: Settings,
                  title: "Arquitetura de Soluções",
                  description: "Projetamos o ecossistema tecnológico ideal para sua empresa, recomendando e integrando as ferramentas certas para criar um fluxo de trabalho coeso e inteligente."
                },
                {
                  icon: Zap,
                  title: "Governança e ROI",
                  description: "Estabelecemos métricas claras de sucesso e um roadmap de implementação para garantir que cada investimento em tecnologia gere um retorno sobre o investimento (ROI) claro e mensurável."
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                    <div className="p-3 bg-gradient-talka rounded-xl mb-4 w-fit">
                      <item.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-corporate-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automação com IA Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                A <span className="gradient-text">vanguarda</span> da automação
              </h2>
              <p className="text-xl text-corporate-lg max-w-4xl mx-auto text-center">
                Nós vamos além do RPA e dos chatbots tradicionais. Na TALKA, implementamos Agentes Autônomos de Inteligência Artificial – 
                entidades digitais capazes de interpretar dados, tomar decisões e executar tarefas complexas de ponta a ponta, 
                funcionando como verdadeiros membros da sua equipe.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "IA Conversacional Avançada",
                  description: "Agentes que dialogam com fluidez, entendem contexto e intenção, e conduzem conversas produtivas com clientes e colaboradores."
                },
                {
                  icon: Brain,
                  title: "Automação de Processos Comerciais",
                  description: "Especialização em automatizar o funil de vendas, da qualificação do lead ao follow-up, garantindo que nenhuma oportunidade seja perdida."
                },
                {
                  icon: LinkIcon,
                  title: "Integrações Profundas (APIs)",
                  description: "Conectamos seus sistemas legados e plataformas modernas (CRMs, ERPs) em um ecossistema unificado, onde a informação flui sem barreiras."
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                    <div className="p-4 bg-gradient-talka rounded-xl mb-6 w-fit">
                      <item.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-corporate-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;