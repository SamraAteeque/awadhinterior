import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import dynamic from 'next/dynamic';

const DesignSpotlight = dynamic(() => import("../components/DesignSpotlight"));
const ProcessSection = dynamic(() => import("../components/ProcessSection"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const PortfolioSection = dynamic(() => import("../components/PortfolioSection"));
// const ExpertiseSection = dynamic(() => import("../components/ExpertiseSection"));
const VideoBanner = dynamic(() => import("../components/VideoBanner"));
const InstagramGallery = dynamic(() => import("../components/InstagramGallery"));
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"));

export const metadata = {
  title: "Premium Modular Kitchen Designs | Awadh Interior",
  description: "Expert modular kitchen designers. We create stylish, functional, and modern kitchen spaces tailored to your needs. Get a free consultation!",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/modular-kitchen-designs',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Premium Modular <br /> Kitchen Designs.</>}
        subtitle={<>Transform your cooking space with modern, highly functional, and stylish <strong>modular kitchens</strong> tailored to your lifestyle.</>}
      />
      <AboutSection />
      <DesignSpotlight />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <ExpertiseSection /> */}
      <VideoBanner />
      <TestimonialsSection />
      <InstagramGallery />
    </>
  );
}
