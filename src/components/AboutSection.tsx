import { Button } from "@/components/ui/button";
import about1 from "@/assets/Capture1.jpg";
import about2 from "@/assets/capture2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              La Brisa
            </h2>
            <p className="text-lg text-muted-foreground italic">
            </p>
            <p className="text-foreground leading-relaxed">
              Découvrez <strong>un véritable havre de paix au cœur de la ville</strong>. 
              La Brisa vous invite à une expérience culinaire unique, où 
              <strong> la cuisine méditerranéenne</strong> se réinvente avec créativité dans 
              <strong> un cadre élégant et raffiné</strong>. Savourez des plats d'exception 
              tout en profitant de notre ambiance chaleureuse et sophistiquée.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Découvrir Notre Histoire
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <img
              src={about1}
              alt="Intérieur élégant du restaurant"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <img
              src={about2}
              alt="Détails décoratifs"
              className="w-full h-80 object-cover rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
