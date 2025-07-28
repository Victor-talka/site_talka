import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text">
              Reinventando
            </span>
            <br />
            <span className="text-foreground">
              o Potencial dos
            </span>
            <br />
            <span className="gradient-text">
              Negócios
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-corporate-lg max-w-4xl mx-auto mb-12 leading-relaxed">
            Combinamos automação de processos e inteligência artificial autônoma para criar 
            ecossistemas empresariais que geram valor, liberam o potencial humano e 
            impulsionam o crescimento sustentável.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="group min-w-64">
              Descubra como podemos transformar sua empresa
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
            <div className="w-2 h-3 bg-gradient-talka rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;