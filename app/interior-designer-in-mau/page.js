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
  title: "Best Interior Designer in Mau | Awadh Interior",
  description: "Professional interior design in Mau. Residential & commercial interiors, modular kitchens, wardrobes. Transparent pricing & free 3D preview. Call today!",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/interior-designer-in-mau',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Best Interior Designer <br /> in Mau.</>}
        subtitle={<>Transforming homes and offices in <strong>Mau</strong> with premium, customized interior design solutions tailored to your budget.</>}
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
