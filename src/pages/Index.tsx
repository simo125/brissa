import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ServiceSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
