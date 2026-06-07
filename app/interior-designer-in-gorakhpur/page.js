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
  title: "Best Interior Designer in Gorakhpur | Awadh Interior",
  description: "Premium residential & commercial interior design in Gorakhpur. Free 3D walkthrough, transparent pricing, on-time delivery. Book your free consultation today.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/interior-designer-in-gorakhpur',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Best Interior Designer <br /> in Gorakhpur.</>}
        subtitle={<>Creating stunning, personalized interiors for homes and businesses across <strong>Gorakhpur</strong> with unmatched quality.</>}
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
