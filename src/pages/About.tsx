import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Manifesto Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Nosso <span className="gradient-text">Manifesto</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-talka mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl"></div>
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-16 shadow-2xl">
                <div className="absolute top-8 left-8 text-6xl text-accent/20 font-serif">"</div>
                <div className="absolute bottom-8 right-8 text-6xl text-accent/20 font-serif rotate-180">"</div>
                
                <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                    Não nos conformamos com o comum. Em um mundo de processos repetitivos e potencial desperdiçado, 
                    nós enxergamos uma oportunidade de libertação.
                  </p>
                  
                  <p className="pl-4 border-l-4 border-accent/30">
                    Acreditamos que a tecnologia, em sua forma mais pura, não serve para substituir o talento humano, 
                    mas para <span className="font-semibold text-accent">ampliá-lo</span>. Ela existe para eliminar o ruído, a fricção e a monotonia que sufocam a 
                    criatividade e a estratégia.
                  </p>
                  
                  <p>
                    Nascemos para desafiar a ideia de que automação é sinônimo de impessoalidade. Para nós, é o contrário: 
                    ao automatizar o operacional, liberamos as pessoas para o que elas fazem de melhor – 
                    <span className="font-semibold text-primary">conectar, inovar, cuidar e pensar estrategicamente</span>.
                  </p>
                  
                  <p className="pl-4 border-l-4 border-primary/30">
                    Nosso propósito é construir pontes entre a complexidade dos negócios e a simplicidade da eficiência. 
                    Somos um hub de inovações, arquitetos de processos e pioneiros na implementação de uma nova classe de 
                    força de trabalho digital: os <span className="font-semibold text-accent">Agentes Autônomos de Inteligência Artificial</span>.
                  </p>
                  
                  <div className="text-center pt-8">
                    <p className="text-2xl md:text-3xl font-bold gradient-text leading-tight">
                      Na TALKA, nós não apenas criamos software.<br/>
                      <span className="text-accent">Nós criamos tempo.</span><br/>
                      <span className="text-primary">Criamos clareza.</span><br/>
                      <span className="gradient-text">Criamos o futuro do trabalho.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Missão */}
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="p-4 bg-gradient-talka rounded-2xl mx-auto w-fit mb-6">
                    <Target className="h-10 w-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Nossa Missão</h3>
                  <p className="text-corporate-lg leading-relaxed">
                    Simplificar a complexidade dos processos empresariais através de automação e inteligência artificial, 
                    para que as empresas e as pessoas possam alcançar seu máximo potencial.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="p-4 bg-gradient-talka rounded-2xl mx-auto w-fit mb-6">
                    <Eye className="h-10 w-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Nossa Visão</h3>
                  <p className="text-corporate-lg leading-relaxed">
                    Ser o principal catalisador da transformação digital na América Latina, reconhecida por implementar 
                    os ecossistemas de automação mais inteligentes e eficientes do mercado.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="p-4 bg-gradient-talka rounded-2xl mx-auto w-fit mb-6">
                    <Heart className="h-10 w-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Nossos Valores</h3>
                  <div className="space-y-4 text-left">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Inovação Ousada</h4>
                      <p className="text-muted-foreground text-sm">Desafiamos o status quo e buscamos constantemente o que vem a seguir.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Parceria Profunda</h4>
                      <p className="text-muted-foreground text-sm">O sucesso do nosso cliente é a nossa métrica mais importante.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Impacto Real</h4>
                      <p className="text-muted-foreground text-sm">Entregamos soluções que geram resultados mensuráveis e transformadores.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-talka p-1 rounded-3xl">
              <div className="bg-background rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                  "Inteligência que Transforma. Automação que Libera."
                </h2>
                <p className="text-xl text-corporate-lg">
                  Este é mais que nosso slogan. É nossa promessa de que cada linha de código, 
                  cada processo otimizado e cada agente de IA implementado tem um único objetivo: 
                  liberar o potencial humano para o que realmente importa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;