import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-2xl font-bold text-foreground hover:text-primary smooth-transition"
          >
            La Brisa
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Histoire
            </button>
            <button
              onClick={() => scrollToSection("service")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Restaurant
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Cuisine
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Réserver
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 animate-fade-in bg-background border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary smooth-transition font-medium text-left"
              >
                Histoire
              </button>
              <button
                onClick={() => scrollToSection("service")}
                className="text-foreground hover:text-primary smooth-transition font-medium text-left"
              >
                Restaurant
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-foreground hover:text-primary smooth-transition font-medium text-left"
              >
                Cuisine
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary smooth-transition font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full"
              >
                Réserver
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
