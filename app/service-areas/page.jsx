import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Interior Design Service Areas | Eastern UP | Awadh Interior",
  description: "Awadh Interior Designer serves Azamgarh, Varanasi, Lucknow, Gorakhpur & Mau. Professional residential & commercial interior design across Eastern Uttar Pradesh.",
  alternates: {
    canonical: 'https://awadhinteriordesigner.in/service-areas',
  },
  openGraph: {
    title: "Interior Design Service Areas | Eastern UP | Awadh Interior",
    description: "Awadh Interior Designer serves Azamgarh, Varanasi, Lucknow, Gorakhpur & Mau. Professional residential & commercial interior design across Eastern Uttar Pradesh.",
    url: 'https://awadhinteriordesigner.in/service-areas',
    type: 'website',
  },
};

const serviceAreas = [
  {
    city: 'Azamgarh',
    slug: 'interior-designer-in-azamgarh',
    tagline: 'Our Home Base',
    image: '/properties/p6.jpg',
    description: 'Azamgarh is where Awadh Interior Designer was founded in 2019 and where the majority of our work is concentrated. From residential flats near Polytechnic Road to commercial outlets in the city centre, we have shaped hundreds of spaces across the district. Our deep familiarity with local material vendors, site conditions, and building practices means projects here run with maximum efficiency.',
    services: ['Full Home Interiors', 'Modular Kitchens', 'False Ceiling', 'Commercial Fit-outs', 'Wardrobes & Storage'],
    projectCount: '100+',
  },
  {
    city: 'Varanasi',
    slug: 'interior-designer-in-varanasi',
    tagline: 'The Spiritual Capital',
    image: '/properties/p2.png',
    description: 'Varanasi\'s rapid urban expansion — driven by tourism, commerce, and a growing professional class — has created strong demand for thoughtful interior design. We work across the newer residential sectors like Sigra, Sunderpur, and Lanka, as well as commercial properties in the city\'s expanding business districts. Our team travels to Varanasi sites regularly and maintains strong vendor relationships in the city.',
    services: ['Luxury Residential Interiors', 'Hotel & Hospitality Design', 'Restaurant Interiors', 'Office Fit-outs', 'Boutique Retail Stores'],
    projectCount: '30+',
  },
  {
    city: 'Lucknow',
    slug: 'interior-designer-in-lucknow',
    tagline: 'The City of Nawabs',
    image: '/properties/p1.png',
    description: 'Lucknow\'s design culture blends heritage with contemporary aspiration — a balance we understand deeply. We serve clients in areas like Gomti Nagar, Hazratganj, and Aliganj, covering premium apartments, independent bungalows, and high-footfall commercial spaces. Lucknow clients tend to have strong aesthetic preferences, and our 3D walkthrough process ensures complete alignment before any execution begins.',
    services: ['Premium Residential Design', 'Office & Co-working Spaces', 'Showroom & Retail Design', 'False Ceiling & Lighting', 'Modular Kitchen'],
    projectCount: '25+',
  },
  {
    city: 'Gorakhpur',
    slug: 'interior-designer-in-gorakhpur',
    tagline: 'Gateway to Eastern UP',
    image: '/properties/p8.jpg',
    description: 'Gorakhpur has seen significant infrastructure investment and a resulting uptick in residential and commercial construction. We serve clients across Civil Lines, Betiahata, and the newer sectors developing along the ring road. The city\'s growing middle class is increasingly design-conscious — and Awadh Interior brings that quality-conscious, transparent approach directly to Gorakhpur without a premium on travel.',
    services: ['New Construction Interiors', 'Modular Kitchen & Wardrobes', 'Commercial Interiors', 'False Ceiling', 'Budget Home Design'],
    projectCount: '20+',
  },
  {
    city: 'Mau',
    slug: 'interior-designer-in-mau',
    tagline: 'The Textile Hub',
    image: '/properties/p3.png',
    description: 'Mau\'s strong mercantile community and textile industry have created a class of clients who value craftsmanship and functional design. Our projects in Mau span residential homes of successful businessmen, offices, and the occasional showroom or commercial property. Being based in Azamgarh — less than 50 km from Mau — means we can offer the same quality of attention and site visits as we do for local clients.',
    services: ['Residential Home Interiors', 'Showroom & Shop Design', 'Modular Kitchen', 'False Ceiling & Lighting', 'Furniture & Furnishings'],
    projectCount: '20+',
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* ── Header ── */}
      <header className="relative h-[55vh] overflow-hidden flex items-center justify-center text-center">
        <Image
          src="/ID6.jpg"
          alt="Interior design across Eastern UP"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-20 px-5 sm:px-8 lg:px-14 xl:px-20 w-full max-w-[1440px] mx-auto flex flex-col items-center">
          <p className="font-jost text-[var(--accent-gold)] uppercase tracking-[0.22em] text-xs mb-4">
            Where We Work
          </p>
          <h1 className="font-bricolage font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            Interior Design Services<br />Across Eastern UP
          </h1>
          <p className="font-jost text-white/65 text-base max-w-xl mt-4 leading-relaxed mx-auto">
            From our base in Azamgarh, we design and execute residential and commercial interiors across five cities in Eastern Uttar Pradesh — with the same quality standards and transparent process at every location.
          </p>
        </div>
      </header>

      <main className="bg-white">

        {/* ── City nav chips ── */}
        <nav className="bg-[var(--bg-warm)] border-b border-[var(--accent-gold)]/10 px-5 sm:px-8 lg:px-14 xl:px-20 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-jost text-[11px] uppercase tracking-widest text-[var(--text-mid)]">Jump to city:</span>
            {serviceAreas.map(area => (
              <a
                key={area.city}
                href={`#${area.city.toLowerCase()}`}
                className="font-jost text-xs font-semibold px-4 py-1.5 rounded-full bg-white border border-[var(--accent-gold)]/20 text-[var(--text-dark)] hover:bg-[var(--accent-gold)] hover:text-white hover:border-[var(--accent-gold)] transition-all duration-200"
              >
                {area.city}
              </a>
            ))}
          </div>
        </nav>

        {/* ── City Sections ── */}
        <div className="divide-y divide-[var(--accent-gold)]/10">
          {serviceAreas.map((area, i) => (
            <section key={area.city} id={area.city.toLowerCase()} className="px-5 sm:px-8 lg:px-14 xl:px-20 py-16 lg:py-24 scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>

                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={area.image}
                    alt={`Interior design project in ${area.city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  {/* Project count badge */}
                  <div className="absolute bottom-5 left-5 bg-[var(--primary-color)] text-white px-5 py-3 rounded-xl shadow-xl">
                    <p className="font-bricolage font-bold text-2xl leading-none">{area.projectCount}</p>
                    <p className="font-jost text-[10px] uppercase tracking-widest text-white/60 mt-1">Projects</p>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                    {area.tagline}
                  </span>

                  <h2 className="font-bricolage font-bold text-[var(--text-dark)] text-3xl lg:text-5xl leading-tight mb-5">
                    Interior Designer<br />in {area.city}
                  </h2>

                  <p className="font-jost text-[var(--text-mid)] text-base leading-relaxed mb-8">
                    {area.description}
                  </p>

                  {/* Services list */}
                  <div className="mb-8">
                    <p className="font-jost text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-mid)] mb-3">Services we offer here:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, j) => (
                        <span
                          key={j}
                          className="font-jost text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--bg-warm)] text-[var(--text-dark)] border border-[var(--accent-gold)]/15"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/${area.slug}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--primary-color)] text-white font-jost font-semibold text-sm rounded-full hover:bg-[var(--accent-gold)] transition-colors duration-300"
                    >
                      View {area.city} Page
                      <i className="ri-arrow-right-line" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--accent-gold)]/30 text-[var(--text-dark)] font-jost font-semibold text-sm rounded-full hover:border-[var(--accent-gold)] hover:bg-[var(--bg-warm)] transition-all duration-300"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Surrounding areas note ── */}
        <section className="bg-[var(--bg-warm)] px-5 sm:px-8 lg:px-14 xl:px-20 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              Beyond These Cities
            </span>
            <h2 className="font-bricolage font-bold text-[var(--text-dark)] text-3xl lg:text-4xl mb-5">
              We Also Serve Surrounding Districts
            </h2>
            <p className="font-jost text-[var(--text-mid)] text-base leading-relaxed mb-4 max-w-2xl mx-auto">
              Our reach extends to surrounding districts including <strong className="text-[var(--text-dark)]">Ballia, Ghazipur, Jaunpur, Sultanpur, Ambedkarnagar, and Deoria</strong>. Travel costs for site visits are agreed upfront and are often waived for larger projects.
            </p>
            <p className="font-jost text-[var(--text-mid)] text-sm leading-relaxed max-w-xl mx-auto mb-10">
              If you don&apos;t see your city here, reach out anyway. We evaluate project enquiries from all of Eastern and Central UP and are often able to accommodate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary-color)] text-white font-jost font-semibold text-sm rounded-full hover:bg-[var(--accent-gold)] transition-colors duration-300 shadow-lg"
            >
              Enquire for Your City
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </section>

        {/* ── Map ── */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6278505820183!2d83.18653237486647!3d26.078416095446645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991a315ca7efca5%3A0x9c28788581ed588d!2sAWADH%20INTERIOR%20DESIGNER%2CAZAMGARH!5e0!3m2!1sen!2sin!4v1761303627437!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Awadh Interior Designer location map"
          />
        </div>

      </main>
    </>
  );
}
