import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import dynamic from 'next/dynamic';

const DesignSpotlight = dynamic(() => import("../components/DesignSpotlight"));
const ProcessSection = dynamic(() => import("../components/ProcessSection"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const PortfolioSection = dynamic(() => import("../components/PortfolioSection"));
// const ExpertiseSection = dynamic(() => import("../components/ExpertiseSection"));
const VideoBanner = dynamic(() => import("../components/VideoBanner"));
const TrustedSuppliers = dynamic(() => import('../components/TrustedSuppliers'));
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"));

export const metadata = {
  title: "Top Interior Designer in Varanasi (Banaras) | Awadh Interior",
  description: "Premium interior design in Varanasi — luxury homes, hotels, restaurants & offices. 3D walkthrough before execution. Serving Banaras since 2019.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/interior-designer-in-varanasi',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Top Interior Designer <br /> in Varanasi.</>}
        subtitle={<>Transforming spaces across <strong>Varanasi (Banaras)</strong> with personalized design, premium materials, and expert craftsmanship.</>}
      />
      <AboutSection />
      <DesignSpotlight />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <ExpertiseSection /> */}
      <VideoBanner />
      <TestimonialsSection />
      <TrustedSuppliers />
    </>
  );
}
