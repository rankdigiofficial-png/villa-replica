import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <FAQSection />
      <CTASection />
      <BlogSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
