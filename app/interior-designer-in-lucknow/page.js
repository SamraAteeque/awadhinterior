import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import dynamic from 'next/dynamic';

const DesignSpotlight = dynamic(() => import("../components/DesignSpotlight"));
const ProcessSection = dynamic(() => import("../components/ProcessSection"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const PortfolioSection = dynamic(() => import("../components/PortfolioSection"));
// const ExpertiseSection = dynamic(() => import("../components/ExpertiseSection"));
const VideoBanner = dynamic(() => import("../components/VideoBanner"));
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"));

export const metadata = {
  title: "Top Interior Designer in Lucknow | Modular Kitchen & Home Decor",
  description: "Luxury interior design services in Lucknow — full home, modular kitchens, false ceilings. 200+ projects across UP. Free consultation. Call now!",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/interior-designer-in-lucknow',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Premium Interior Designer <br /> in Lucknow.</>}
        subtitle={<>Transforming homes and commercial spaces in <strong>Lucknow</strong> with modern aesthetics and highly functional interior design.</>}
      />
      <AboutSection />
      <DesignSpotlight />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <ExpertiseSection /> */}
      <VideoBanner />
      <TestimonialsSection />
    </>
  );
}
