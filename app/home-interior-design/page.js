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
  title: "Home Interior Design Ideas & Services | Awadh Interior",
  description: "Discover beautiful home interior design ideas. Our expert designers create comfortable, luxurious, and personalized living spaces.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/home-interior-design',
  }
};

export default function Page() {
  return (
    <>
      <HeroSection
        title={<>Beautiful Home <br /> Interior Design.</>}
        subtitle={<>Crafting elegant, comfortable, and personalized <strong>home interiors</strong> that perfectly reflect your unique style and personality.</>}
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
