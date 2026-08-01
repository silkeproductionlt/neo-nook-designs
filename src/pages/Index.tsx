import { SHOW_NOTICE_BAR } from "@/config/featureFlags";
import NoticeBar from "@/components/NoticeBar";
import HeroSection from "@/components/HeroSection";
import { useLenis } from "@/hooks/useLenis";

import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useLenis();
  return (
    <div className="min-h-screen bg-background">

      <NoticeBar />
      <Navbar />
      <HeroSection />
      
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
