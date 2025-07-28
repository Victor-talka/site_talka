import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Onde nossa <span className="gradient-text">inteligência</span> encontra o seu mercado
          </h2>
          <p className="text-xl text-corporate-lg max-w-3xl mx-auto">
            Nossa tecnologia não é uma teoria. Nós a aplicamos para resolver desafios reais 
            de setores específicos, criando soluções de ponta que falam a língua do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ConverseIA Direito */}
          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="/logoescurahorizontal.png" 
                    alt="ConverseIA Direito" 
                    className="h-12 w-auto max-w-[200px] object-contain"
                  />
                </div>
              </div>
              
              <p className="text-corporate-lg mb-8 leading-relaxed">
                Uma solução de IA especializada que revoluciona o atendimento e a qualificação 
                de clientes no setor jurídico, garantindo agilidade e precisão.
              </p>

              <Button variant="outline" className="group">
                Conheça a solução
                <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Conciarge */}
          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="/Conciarge(NEGATIVO+FUNDOTRANSPARENTE)-logo5.png" 
                    alt="Conciarge" 
                    className="h-16 w-auto max-w-[180px] object-contain"
                  />
                </div>
              </div>
              
              <p className="text-corporate-lg mb-8 leading-relaxed">
                Reinventamos a jornada do paciente, automatizando o agendamento e a comunicação 
                para clínicas e o setor de saúde com um toque de cuidado digital.
              </p>

              <Button variant="outline" className="group">
                Conheça a solução
                <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;