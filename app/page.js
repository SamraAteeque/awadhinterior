import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GSAPHeroAboutWrapper from "./components/GSAPHeroAboutWrapper";
import dynamic from 'next/dynamic';

// Lazy load below-the-fold components
const DesignSpotlight = dynamic(() => import("./components/DesignSpotlight"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const PortfolioSection    = dynamic(() => import("./components/PortfolioSection"));
const BeforeAfterSection  = dynamic(() => import("./components/BeforeAfterSection"));
const VideoBanner         = dynamic(() => import("./components/VideoBanner"));
const MarqueeStrip        = dynamic(() => import("./components/MarqueeStrip"));
const BlogPreview = dynamic(() => import("./components/BlogPreview"));
const TestimonialsSection = dynamic(() => import("./components/TestimonialsSection"));

export const metadata = {
  title: "Best Interior Designer in Azamgarh, Lucknow & Varanasi | Awadh Interior",
  description: "Top-rated interior design services in Azamgarh, Mau, Varanasi, Lucknow, and Gorakhpur. Free consultation available. View our portfolio!",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in',
  }
};

export default function Home() {
  return (
    <>
      <GSAPHeroAboutWrapper
        heroComponent={<HeroSection />}
        aboutComponent={<AboutSection />}
      />
      <MarqueeStrip />
      <DesignSpotlight />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <BeforeAfterSection />
      <VideoBanner />
      <TestimonialsSection />
      <BlogPreview />
    </>
  );
}
