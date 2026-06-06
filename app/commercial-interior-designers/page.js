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
  title: "Expert Commercial & Office Interior Designers | Awadh Interior",
  description: "Top commercial interior designers. We design inspiring and productive office spaces, retail stores, and commercial establishments.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/commercial-interior-designers',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection 
        title={<>Expert Commercial <br /> Interior Design.</>}
        subtitle={<>Designing inspiring, productive, and modern <strong>office and commercial spaces</strong> that elevate your brand and impress your clients.</>}
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
