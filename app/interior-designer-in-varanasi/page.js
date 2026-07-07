import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import dynamic from 'next/dynamic';

const DesignSpotlight = dynamic(() => import("../components/DesignSpotlight"));
const ProcessSection = dynamic(() => import("../components/ProcessSection"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const PortfolioSection = dynamic(() => import("../components/PortfolioSection"));
const VideoBanner = dynamic(() => import("../components/VideoBanner"));
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"));

export const metadata = {
  title: {
    absolute: "Best Interior Designer in Varanasi | Awadh Interior"
  },
  description: "Premium interior design in Varanasi — luxury homes, hotels, restaurants & offices. 3D walkthrough before execution. Serving Banaras since 2019.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/interior-designer-in-varanasi',
  }
};

const localFaqs = [
  {
    q: "Who is the best interior designer near me in Varanasi?",
    a: "Awadh Interior Designer is a highly-recommended design firm in Varanasi (Banaras), known for premium residential styling, turnkey project execution, modular kitchens, and commercial interiors (hotels, restaurants, and showrooms)."
  },
  {
    q: "What areas in Varanasi do you serve?",
    a: "We serve all major areas in Varanasi, including Sigra, Sunderpur, Lanka, Mahmoorganj, Bhelupur, and the expanding business and residential sectors near Ring Road."
  },
  {
    q: "Do you provide 3D designs for Varanasi interior projects?",
    a: "Yes, we provide a complete 3D visualization and walkthrough of your home or commercial space before any physical execution begins. This ensures you see exactly what you are paying for."
  },
  {
    q: "How do I get in touch with your team for Varanasi consultations?",
    a: "Simply contact us online, call +91 7905503597, or drop a message on WhatsApp. We coordinate scheduled site visits to Varanasi for meetings and design measurements."
  }
];

const localFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": localFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }}
      />
      <HeroSection
        title={<>Top Interior Designer <br /> in Varanasi.</>}
        subtitle={<>Transforming spaces across <strong>Varanasi (Banaras)</strong> with personalized design, premium materials, and expert craftsmanship.</>}
      />
      <AboutSection 
        title={<>About Awadh Interior <span className="italic text-[var(--accent-gold)]">Designer in Varanasi</span></>}
        description="Awadh Interior Designer offers top-rated residential and commercial interior design services in Varanasi (Banaras). Our skilled team specializes in luxury home designs, functional office spaces, boutique hotels, restaurants, and custom modular kitchens optimized for modern living."
        descriptionSecondary="Serving sectors like Sigra, Sunderpur, Lanka, and newer residential areas, we provide absolute clarity through 3D visualizations and transparent billing. Let our Varanasi interior designers transform your space into a stunning masterpiece."
      />
      <DesignSpotlight />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <VideoBanner />
      <TestimonialsSection />

      {/* ── Local Contact & Map Section ── */}
      <section className="bg-white px-5 sm:px-8 lg:px-14 xl:px-20 py-20 lg:py-28 border-t border-[var(--accent-gold)]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* FAQ Accordions */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                Common Queries
              </span>
              <h2 className="font-bricolage font-bold text-[var(--text-dark)] text-3xl sm:text-4xl leading-tight">
                Frequently Asked <br />Questions in Varanasi
              </h2>
            </div>
            
            <div className="space-y-4 pt-4">
              {localFaqs.map((faq, idx) => (
                <details key={idx} className="group border border-gray-200 rounded-xl p-5 bg-[var(--bg-warm)] [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-jost font-semibold text-base sm:text-lg text-[var(--primary-color)] cursor-pointer list-none select-none">
                    <span>{faq.q}</span>
                    <span className="text-[var(--accent-gold)] font-bold text-lg transition-transform duration-200 group-open:rotate-180">↓</span>
                  </summary>
                  <p className="font-jost text-sm sm:text-base text-[var(--text-mid)] mt-4 leading-relaxed border-t border-gray-200/50 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Location & Map info */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                Our Studio Base
              </span>
              <h2 className="font-bricolage font-bold text-[var(--text-dark)] text-3xl sm:text-4xl leading-tight">
                Serving Varanasi
              </h2>
            </div>

            <div className="p-6 sm:p-8 bg-[var(--primary-color)] text-white rounded-2xl space-y-6">
              <div className="flex gap-4 items-start">
                <i className="ri-map-pin-line text-2xl text-[var(--accent-gold)] mt-1" />
                <div className="space-y-1">
                  <p className="font-bricolage font-bold text-lg">Azamgarh Base (Serving Varanasi)</p>
                  <p className="font-jost text-white/70 text-sm sm:text-base">
                    Harra ki chungi, Polytechnic Rd, chauraha, Pura Jodhi, Azamgarh, Uttar Pradesh, 276001
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <i className="ri-phone-line text-2xl text-[var(--accent-gold)] mt-1" />
                <div className="space-y-1">
                  <p className="font-bricolage font-bold text-lg">Contact Numbers</p>
                  <p className="font-jost text-white/70 text-sm sm:text-base">
                    <a href="tel:+917905503597" className="hover:text-[var(--accent-gold)] transition-colors">+91 7905503597</a>,{' '}
                    <a href="tel:+916307782010" className="hover:text-[var(--accent-gold)] transition-colors">+91 6307782010</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6278505820183!2d83.18653237486647!3d26.078416095446645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991a315ca7efca5%3A0x9c28788581ed588d!2sAWADH%20INTERIOR%20DESIGNER%2CAZAMGARH!5e0!3m2!1sen!2sin!4v1761303627437!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Awadh Interior Designer Studio Location Map"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
