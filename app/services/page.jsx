'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Your full services data with all 12 services
const servicesData = [
  { icon: 'ri-ruler-2-line', title: '3D Visualization', description: 'Creating realistic 3D models and renderings to help you visualize the final space before execution begins.' },
  { icon: 'ri-home-4-line', title: 'Floor Works', description: 'Expert design and installation of various flooring materials for durability and style.' },
  { icon: 'ri-apps-2-line', title: 'Glass Works', description: 'Custom glass solutions for partitions, doors, and decorative elements that add elegance to any interior.' },
  { icon: 'ri-image-line', title: 'Wallpaper', description: 'A curated selection and professional application of wallpapers to create stunning accent walls.' },
  { icon: 'ri-kitchen-line', title: 'Modular Kitchen', description: 'Designing and installing efficient, stylish, and functional modular kitchens tailored to your space.' },
  { icon: 'ri-cloud-line', title: 'False Ceiling', description: 'Creative false ceiling designs with integrated lighting to enhance the ambiance of any room.' },
  { icon: 'ri-layout-masonry-line', title: 'Wall Paneling', description: 'Adding texture and character to walls with custom decorative paneling in a variety of materials.' },
  { icon: 'ri-sofa-line', title: 'Designer Furniture', description: 'Sourcing and custom-designing bespoke furniture pieces that perfectly complement your interior design.' },
  { icon: 'ri-building-line', title: 'ACP Elevation', description: 'Modern and durable exterior design solutions using Aluminium Composite Panels for a sleek facade.' },
  { icon: 'ri-checkbox-multiple-line', title: 'PVC False Ceiling', description: 'Durable and stylish PVC false ceilings, offering a modern look with easy maintenance.' },
  { icon: 'ri-building-2-line', title: 'Commercial Interior', description: 'Complete interior design services for offices, retail stores, and other commercial spaces.' },
  { icon: 'ri-home-5-line', title: 'Residential Interior', description: 'Personalized interior design for homes, creating beautiful, comfortable, and functional living spaces.' },
];

// Services2 (Data for new section)
const Services2 = [
  {
    icon: '/services2/services1.jpg',
    title: 'Space Planning',
    description: 'Strategic space utilization to maximize potential and long-term value.',
  },
  {
    icon: '/services2/services2.jpg',
    title: '3D Visualization',
    description: 'Bringing concepts to life with photorealistic 3D renderings for a clear vision of the final outcome.',
  },
  {
    icon: '/services2/services3.jpg',
    title: 'Lighting Design',
    description: 'Enhancing ambiance and functionality with strategic and layered lighting placements.',
  },
  {
    icon: '/services2/services4.jpg',
    title: 'Custom Furniture',
    description: 'Crafting bespoke furniture pieces that perfectly fit your space and reflect your unique style.',
  },
  {
    icon: '/services2/services5.jpg',
    title: 'Color Consultation',
    description: 'Choosing harmonious color palettes that reflect the desired mood, space, and personality.',
  },
  {
    icon: '/services2/services6.jpg',
    title: 'Turnkey Projects',
    description: 'Offering a complete, end-to-end solution from concept to handover for a seamless, hassle-free experience.',
  },
]

const pricingData = [
  {
    title: 'Full Home Interior',
    price: '₹800',
    unit: 'per sq ft',
    tag: 'Most Popular',
    description: 'End-to-end turnkey residential design — from first concept to final handover.',
    includes: [
      'Space planning & 3D walkthrough',
      'Custom furniture & cabinetry',
      'False ceiling & lighting design',
      'Flooring, wallpaper & paint finish',
      'Dedicated project manager',
    ],
  },
  {
    title: 'Modular Kitchen',
    price: '₹1.2L',
    unit: 'onwards',
    tag: 'High Demand',
    description: 'Ergonomic, Indian-kitchen-optimised designs built for daily use and durability.',
    includes: [
      'L-shape, U-shape or island layout',
      'High-gloss or matte finish cabinets',
      'Granite or Quartz countertop',
      '3D preview before any execution',
      '5-year warranty on all hardware',
    ],
  },
  {
    title: 'False Ceiling',
    price: '₹80',
    unit: 'per sq ft',
    tag: 'Quick Upgrade',
    description: 'Architectural ceiling designs that transform a room\'s character and ambiance.',
    includes: [
      'POP, Gypsum or PVC options',
      'Integrated LED cove lighting',
      'Custom patterns & shaped cutouts',
      'Fan & light point relocation',
      'Crack-resistant smooth finish',
    ],
  },
];

// Data for "Our Approach" section
const approachData = [
  { icon: 'ri-chat-3-line', title: 'Consult & Conceptualize', description: 'We begin with a deep dive into your vision, needs, and lifestyle to form the core concept of your project.' },
  { icon: 'ri-draft-line', title: 'Design & Develop', description: 'Our team translates the concept into detailed designs, selecting materials and finishes that align with your aesthetic.' },
  { icon: 'ri-hammer-line', title: 'Execute & Deliver', description: 'With meticulous project management, we bring the design to life, ensuring quality craftsmanship and timely delivery.' },
];

export default function ServicesPage() {
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true, margin: "200px" });

  // --- Animation Variants (Unchanged) ---
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }
  // --- End of Animation Variants ---

  return (
    <>
      {/* --- Page Header (Unchanged) --- */}
      <motion.header
        className="relative h-[60vh] overflow-hidden flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/properties/p5.jpg" alt="Stylish interior design" fill className="object-cover z-0" priority />
        <div className="absolute inset-0  z-10" />
        <motion.div
          className="relative z-20 text-white px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-jost text-[var(--primary-color)] uppercase tracking-widest mb-2">What We Do</p>
          <h1 className="text-5xl text-[var(--primary-color)] md:text-8xl font-bricolage font-bold">
            Interior Design Services
          </h1>
        </motion.div>
      </motion.header>

      <main>
        {/* --- Main Services Grid (Unchanged) --- */}
        <section className="bg-[var(--bg-warm)] px-[8%] lg:px-[12%] py-20 lg:py-28">
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Mapping ALL 12 services */}
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 bg-white rounded-2xl border border-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  variants={fadeIn}
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                    <i className={`${service.icon} text-3xl text-[var(--primary-color)] group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <h3 className="text-2xl font-bricolage font-semibold text-[var(--primary-color)] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-jost text-[var(--text-color)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- START: NEW "CORE EXPERTISE" (SERVICES2) SECTION --- */}
        <section className="bg-white px-[8%] lg:px-[12%] py-20 lg:py-28">
          <div className="container mx-auto">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl text-left mb-16 px-2 sm:px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="overflow-hidden mb-4">
                <motion.h2
                  className="text-5xl lg:text-7xl font-bold font-bricolage text-[var(--primary-color)]"
                  variants={textRevealVariants}
                >
                  Our Core Expertise
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  className="text-lg font-jost text-[var(--text-color)]"
                  variants={textRevealVariants}
                  style={{ transitionDelay: '0.2s' }}
                >
                  We specialize in key areas to bring a complete and cohesive design to your space.
                </motion.p>
              </div>
            </motion.div>

            {/* Expertise Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {Services2.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--accent-gold)]/10 transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent-gold)]/30"
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bricolage font-semibold text-[var(--primary-color)] mb-3">
                      {service.title}
                    </h3>
                    <p className="font-jost text-[var(--text-color)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* --- END: NEW "CORE EXPERTISE" SECTION --- */}


        {/* --- START: REDESIGNED "OUR APPROACH" SECTION --- */}
        <section className='bg-[var(--bg-warm)] px-[8%] lg:px-[12%] py-20 lg:py-28'>
          <div className="container mx-auto text-left px-2 sm:px-4">
            <motion.h2
              className="text-5xl lg:text-7xl font-bold font-bricolage text-[var(--primary-color)] mb-6"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
            >
              Our Approach
            </motion.h2>
            <motion.p
              className='mb-16 text-[var(--text-color)] font-jost text-lg max-w-2xl'
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              We follow a structured and collaborative process to ensure every project is a resounding success, from the first conversation to the final reveal.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants} // Use container for stagger
            >
              {approachData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative p-8 text-left bg-white rounded-2xl shadow-md border border-[var(--accent-gold)]/10 group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[var(--accent-gold)]/30"
                  variants={cardVariants} // Use card variant
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                    <i className={`${item.icon} text-3xl text-[var(--primary-color)] group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <h3 className="text-2xl font-bricolage font-semibold text-[var(--primary-color)] mb-3">{item.title}</h3>
                  <p className="font-jost text-[var(--text-color)] leading-relaxed">{item.description}</p>

                  {/* Connecting arrows for desktop */}
                  {index < approachData.length - 1 && (
                    <i className="ri-arrow-right-line text-3xl text-gray-300/70 absolute top-1/2 -right-6 -translate-y-1/2 hidden md:block"></i>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* --- END: REDESIGNED "OUR APPROACH" SECTION --- */}


        {/* --- Investment Guide Section --- */}
        <section className="bg-[var(--primary-color)] px-[8%] lg:px-[12%] py-20 lg:py-28">
          <div className="container mx-auto">

            {/* Header */}
            <motion.div
              className="text-left mb-14 px-2 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="font-jost text-[var(--text-light)] uppercase tracking-[0.25em] text-xs mb-5 font-semibold">
                Investment Guide
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-bricolage text-white leading-tight tracking-tighter mb-4">
                Transparent Pricing,<br />
                <span className="italic font-serif font-light opacity-60">No Surprises.</span>
              </h2>
              <p className="font-jost text-white/55 text-base max-w-xl leading-relaxed mt-4">
                Every project is unique. These ranges give you a clear starting point so you can plan with confidence.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {pricingData.map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-colors duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <span className="inline-block font-jost text-[10px] font-bold uppercase tracking-widest text-[var(--text-light)] bg-white/10 px-3 py-1 rounded-full w-fit mb-6">
                    {plan.tag}
                  </span>

                  <h3 className="text-xl font-bricolage font-bold text-white mb-2">
                    {plan.title}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4xl font-bricolage font-bold text-[var(--text-light)]">
                      {plan.price}
                    </span>
                    <span className="font-jost text-sm text-white/40">
                      {plan.unit}
                    </span>
                  </div>

                  <p className="font-jost text-white/55 text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="h-px bg-white/10 mb-6" />

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-jost text-sm text-white/65">
                        <i className="ri-checkbox-circle-fill text-[var(--text-light)] mt-0.5 text-base flex-shrink-0"></i>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <motion.button
                      className="w-full py-3 border border-white/20 rounded-full font-jost font-semibold text-sm text-white hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Custom Quote
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              className="text-center font-jost text-white/35 text-xs mt-10 max-w-lg mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Prices are indicative and vary based on project scope, materials selected, and site conditions.
              A final quote is shared after a free site visit and consultation.
            </motion.p>
          </div>
        </section>
        {/* --- End: Investment Guide Section --- */}


        {/* --- START: ENHANCED VIDEO BANNER --- */}
        <div ref={videoRef} className='relative w-full h-[500px] overflow-hidden'>
          {isVideoInView && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/IDV1-poster.jpg"
              className='absolute top-0 left-0 w-full h-full object-cover'
            >
              <source src='/IDV1.webm' type='video/webm' />
              <source src='/IDV1.mp4' type='video/mp4' />
            </video>
          )}
          <div className="absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-left px-6 sm:px-12 md:px-20 z-10"><motion.h2 className='text-5xl md:text-6xl font-bricolage font-bold text-white mb-10' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut' }}>Ready for an Upgrade? Let's Talk</motion.h2><motion.button className='px-8 py-4 cursor-pointer bg-[var(--accent-gold)] text-white font-bold rounded-full hover:bg-[#b89560] transition-colors text-lg' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact Us</motion.button></div>
        </div>
        {/* --- END: ENHANCED VIDEO BANNER --- */}
      </main>
    </>
  );
}