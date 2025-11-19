import lunch from "@/assets/lunch.jpg";
import dinner from "@/assets/dinner.jpg";

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Lunch Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 animate-slide-in">
            <img
              src={lunch}
              alt="Déjeuner au Jardin d'Orient"
              className="w-full h-96 object-contain rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6 animate-fade-in">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Déjeuner Ensoleillé
            </h3>
            <p className="text-foreground leading-relaxed">
              Découvrez nos <strong>plats légers et rafraîchissants</strong>, parfaits 
              pour une pause déjeuner gourmande. Salades composées, poissons grillés 
              et spécialités méditerranéennes vous attendent dans un cadre lumineux et 
              apaisant.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium">⏰Opening every Day: 7:00 AM - 1:00 AM</p>
              <p>LA BRISA FOOD 🇲🇦</p>
            </div>
          </div>
        </div>

        {/* Dinner Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Dîner Gastronomique
            </h3>
            <p className="text-foreground leading-relaxed">
            Nous avons tous les types de dîners que vous souhaitez !
            À La Brisa, notre service est soigné afin de vous proposer une grande variété de plats : poisson, poulet, viande, pâtes, tajines revisités, salades gourmandes, et bien plus encore.
            Tout est préparé comme il se doit, avec saveur, générosité et une touche méditerranéenne moderne.

            Peu importe ce dont vous avez envie… l’essentiel, c’est que nous avons absolument tout !
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium">Service de 7:00 AM - 1:00 AM</p>
              <p>Menu dégustation à partir de 20dh</p>
            </div>
          </div>
          <div className="animate-slide-in">
            <img
              src={dinner}
              alt="Dîner au Jardin d'Orient"
              className="w-full h-96 object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
