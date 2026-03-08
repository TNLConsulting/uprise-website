import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTABanner />
      <ContactFooter />
    </div>
  );
};

export default Index;
