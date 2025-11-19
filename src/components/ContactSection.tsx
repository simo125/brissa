import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Réservez Votre Table
            </h2>
            <p className="text-lg text-muted-foreground">
              Contactez-nous pour une expérience culinaire inoubliable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    📍Errachidia, Ain Al Ati 2
                    <br />
                    near Lycée Tafilalt.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+212 6 33 22 44 54</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@labrica.fr</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                  <p className="text-muted-foreground">
                    Lundi - Dimanche
                    <br />
                    7:00 AM - 1:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Prénom"
                  className="bg-background"
                />
                <Input
                  placeholder="Nom"
                  className="bg-background"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-background"
              />
              <Input
                type="tel"
                placeholder="Téléphone"
                className="bg-background"
              />
              <Input
                type="date"
                placeholder="Date souhaitée"
                className="bg-background"
              />
              <Textarea
                placeholder="Message (nombre de personnes, préférences...)"
                className="bg-background min-h-32"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Envoyer la Réservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
