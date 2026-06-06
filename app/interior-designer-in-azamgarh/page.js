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
  title: "Best Interior Designer in Azamgarh | Free Consultation | Awadh Interior",
  description: "Award-winning interior design in Azamgarh — modular kitchens, false ceilings, full home interiors from ₹800/sqft. Free 3D design preview. Call +91 7905503597.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/interior-designer-in-azamgarh',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Best Interior Designer <br /> in Azamgarh.</>}
        subtitle={<>Transforming homes and offices in <strong>Azamgarh</strong> with premium, customized interior design solutions.</>}
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
