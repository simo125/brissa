import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceSection = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="service" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Savourez à toutes heures !
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Au La Brisa, le plaisir n'a pas d'heure. Profitez de notre{" "}
            <strong>service continu de 7:00 AM à 1:00 AM</strong>, qui vous permet de{" "}
            <strong>déguster nos créations à tout moment</strong>. Que ce soit pour 
            un déjeuner ensoleillé ou <strong>un dîner romantique</strong>, notre 
            cuisine est prête à vous émerveiller à chaque instant.
          </p>
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Découvrir la Carte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
