'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import LocationMap from '../components/LocationMap';


// Data for the "Meet the Team" section
const teamMembers = [
  { name: 'Mohd Kamaal Khalid', role: 'Founder', image: '/team/member-1.jpg' },
  { name: 'Himayat', role: 'Founder', image: '/team/member-2.jpg' },

];

// Data for the "Alternating Features" section
const featuresData = [
  {
    title: "A Personalized Approach",
    description: "Every project begins with a deep understanding of your vision. We collaborate closely with you to ensure every detail, from the color palette to the final decor, is a perfect reflection of your personal style and aspirations.",
    image: "/features/features-1.jpg"
  },
  {
    title: "Uncompromising Quality",
    description: "We are committed to the highest standards of quality. By sourcing the finest materials and partnering with skilled craftsmen, we deliver interiors that are not only beautiful but also built to last for generations.",
    image: "/features/features-2.jpg"
  }
];

// Design Process
const processSteps = [
  { id: 1, icon: "ri-chat-3-line", title: "Discovery & Consultation", description: "We start by understanding your vision, lifestyle, and requirements in a detailed meeting to align on the project's goals and budget." },
  { id: 2, icon: "ri-layout-line", title: "Concept & Space Planning", description: "Our team develops initial concepts, mood boards, and 2D/3D layouts to visualize the potential of your space and define the design direction." },
  { id: 3, icon: "ri-palette-line", title: "Material & Furniture Selection", description: "We curate a selection of high-quality materials, finishes, furniture, and lighting that perfectly match the approved concept and your personal style." },
  { id: 4, icon: "ri-tools-line", title: "Execution & Project Management", description: "Our skilled team manages the entire implementation process, coordinating with vendors and craftsmen to ensure the design is executed flawlessly." },
  { id: 5, icon: "ri-sparkling-2-line", title: "Styling & Handover", description: "The final stage involves adding decor and styling touches before the final walkthrough and handing over your beautifully transformed space." },
];
const galleryItems = [
  { img: '/properties/p1.png', title: 'Modern Salon', category: 'Commercial' },
  { img: '/properties/p2.png', title: 'Elegant Bedroom Design', category: 'Residential' },
  { img: '/properties/p3.png', title: 'Elegant Bedroom Design', category: 'Residential' },
  { img: '/properties/p4.jpg', title: 'Mobile Showroom', category: 'Commercial' },
  { img: '/properties/p5.jpg', title: 'Premium Resturant', category: 'Commercial' },
  { img: '/properties/p6.jpg', title: 'Modular Kitchen Interiors', category: 'Residential' },
  { img: '/properties/p7.jpg', title: 'Clothing Showroom', category: 'Commercial' },
  { img: '/properties/p8.jpg', title: 'CA Office', category: 'Commercial' },
  { img: '/properties/p9.png', title: 'Wooden Almirah', category: 'Residential' },
];

const filters = ['All', 'Residential', 'Commercial'];

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true, margin: "200px" });

  const [filteredItems, setFilteredItems] = useState(galleryItems);
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);
  const progressPercentage = ((activeStep - 1) / (processSteps.length - 1)) * 100;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, ease: 'easeOut' },
    },
  };

  return (

    <>
      {/* --- Page Header --- */}
      <motion.header
        className="relative h-[60vh] overflow-hidden flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/properties/p6.jpg" alt="Luxurious living room" fill className="object-cover z-0" priority />
        <div className="absolute inset-0 z-10" />
        <motion.div
          className="relative z-20 text-white px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-jost text-[var(--primary-color)] uppercase tracking-widest mb-2">Our Story</p>
          <h1 className="text-5xl text-[var(--primary-color)] md:text-8xl font-bricolage font-bold">
            Crafting Spaces, <br />Creating Stories
          </h1>
        </motion.div>
      </motion.header>

      <main>
        {/* --- Alternating Features Section --- */}
        <section className="bg-[var(--bg-warm)] px-[8%] lg:px-[12%] py-20 lg:py-28">
          <div className="container mx-auto">
            <motion.div
              className="space-y-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionVariants}
            >
              {featuresData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                  variants={fadeIn}
                >
                  <div className={`relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                    <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-4xl lg:text-5xl font-bricolage font-bold text-[var(--primary-color)] leading-tight mb-6">{feature.title}</h3>
                    <p className="font-jost text-lg text-[var(--text-color)] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Founder Story Section --- */}
        <section className="bg-white px-[8%] lg:px-[12%] py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Founder Photo */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  {/*
                    ACTION REQUIRED:
                    Replace /team/member-1.jpg with a high-quality photo of the founder.
                    Ideal: candid shot at a project site or in the office/studio.
                    Avoid plain studio portraits — a natural environment builds more trust.
                  */}
                  <Image
                    src="/team/member-1.jpg"
                    fill
                    alt="Mohd Kamaal Khalid — Founder, Awadh Interior Designer"
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-5 -right-5 bg-[var(--primary-color)] text-white px-7 py-5 rounded-2xl shadow-2xl">
                  <p className="font-bricolage font-bold text-4xl leading-none">5+</p>
                  <p className="font-jost text-xs uppercase tracking-widest text-[var(--text-light)] mt-1">
                    Years of<br />Excellence
                  </p>
                </div>
              </motion.div>

              {/* Story Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-jost text-[var(--primary-color)] uppercase tracking-[0.25em] text-xs mb-5 font-semibold">
                  The Founder&apos;s Journey
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold font-bricolage text-[var(--primary-color)] tracking-tighter leading-[1.05] mb-8">
                  Mohd Kamaal<br />Khalid
                </h2>

                {/* Founder quote */}
                <blockquote className="border-l-[3px] border-[var(--accent-gold)] pl-6 mb-8">
                  <p className="font-dm-serif italic text-xl text-[var(--text-dark)] leading-relaxed">
                    {/*
                      ACTION REQUIRED: Replace this with a real quote from the founder.
                      Best quotes are specific, personal, and reveal a belief — not a slogan.
                    */}
                    &ldquo;I started Awadh Interior because people in our cities deserved beautiful, functional spaces — not just in Mumbai or Delhi.&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-5 font-jost text-[var(--text-mid)] text-base leading-relaxed mb-10">
                  <p>
                    {/*
                      ACTION REQUIRED: Replace with the real founder story.
                      Include: where he grew up, what inspired him to get into design,
                      the moment he decided to start Awadh Interior.
                    */}
                    Growing up in Azamgarh, Kamaal saw a clear gap — the quality of interior design available in metros was simply not accessible in Eastern UP. Skilled craftsmen existed, but the design thinking, project management, and honest costing were missing. That gap became the founding idea for Awadh Interior Designer.
                  </p>
                  <p>
                    {/*
                      ACTION REQUIRED: Replace with real milestones and achievements.
                    */}
                    Over 5 years and 200+ projects across Azamgarh, Mau, Varanasi, Lucknow, and Gorakhpur, the firm built its reputation on three non-negotiables: a 3D walkthrough before any work begins, itemised transparent costing, and delivery on the date promised.
                  </p>
                </div>

                {/* Timeline milestones */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--accent-gold)]/10">
                  {[
                    { year: '2019', event: 'Founded Awadh Interior' },
                    { year: '2021', event: 'Expanded to 5 cities' },
                    { year: '2024', event: '200+ projects delivered' },
                  ].map((milestone, i) => (
                    <div key={i}>
                      <p className="font-bricolage font-bold text-lg text-[var(--primary-color)]">
                        {milestone.year}
                      </p>
                      <p className="font-jost text-xs text-[var(--text-mid)] leading-snug mt-1">
                        {milestone.event}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Our Values Section --- */}
        <WhyChooseUsSection />

        {/* --- Meet the Team Section --- */}
        {/* --- Meet the Team Section (Updated for 2 members & Centered Layout) --- */}
        <section className="bg-[var(--bg-warm)] px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-24 lg:py-28"> {/* Adjusted Padding */}
          <div className="container mx-auto text-left">
            {/* Heading */}
            <div className="overflow-hidden mb-12 md:mb-16"> {/* Adjusted Margin */}
              <motion.h2
                className="text-4xl xs:text-5xl sm:text-6xl font-bold font-bricolage text-[var(--primary-color)]" // Adjusted Size
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textRevealVariants}
              >
                Meet Our Team
              </motion.h2>
            </div>

            {/* Team Grid (Centered for 2 members on medium screens and up) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl" // Use sm:grid-cols-2 and max-width for centering
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ // Simple container variant for stagger
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]" // Adjusted aspect ratio and rounding
                  variants={fadeIn} // Use the existing fadeIn variant
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill // Use fill for aspect ratio container
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px" // Adjusted sizes
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Added scale hover effect
                  />
                  {/* Overlay stays the same */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-white text-left">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bricolage font-bold leading-tight"> {/* Adjusted Size */}
                        {member.name}
                      </h3>
                      <p className="font-jost text-sm sm:text-base opacity-90 mt-1">{member.role}</p> {/* Adjusted Size & Margin */}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* --- End Meet the Team Section --- */}
      </main>

      {/* Design Process */}
      <section className="bg-[var(--white-color)] px-[8%] lg:px-[12%] py-20 lg:py-28 relative overflow-hidden">

        <div
          aria-hidden="true"
          className="absolute top-0 left-0 text-[20rem] lg:text-[28rem] font-bricolage font-black text-[var(--primary-color)]/5 z-0 leading-none"
        >
          03
        </div>

        <div className="relative z-10 container mx-auto">
          {/* Top Section: Title & Description */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 mb-16 lg:mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-5xl lg:text-8xl font-bold font-bricolage leading-none text-[var(--primary-color)]">
                Our Refined<br />Design Process
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col items-start">
              <p className="uppercase font-jost font-semibold tracking-wider text-[var(--primary-color)] border-b border-gray-300 pb-2 mb-4 w-fit">
                OUR JOURNEY
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStep}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="font-jost text-base lg:text-lg text-[var(--text-color)] leading-relaxed mb-8"
                >
                  {processSteps.find(step => step.id === activeStep)?.description}
                </motion.p>
              </AnimatePresence>
              <Link href="/contact">
                <motion.button
                  className="font-jost font-semibold text-lg text-[var(--white-color)] bg-[var(--primary-color)] px-8 py-3 rounded-full hover:bg-[var(--accent-gold)] transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Start Your Project →
                </motion.button>
              </Link>
            </div>
          </div>

          {/* --- Stepper Section --- */}
          <div className="relative">
            {/* DESKTOP Stepper (Horizontal) */}
            <div className="hidden lg:block">
              <div className="absolute top-8 -translate-y-1/2 left-0 w-full h-px bg-gray-200"></div>
              <motion.div
                className="absolute top-8 -translate-y-1/2 left-0 h-1 bg-[var(--primary-color)] origin-left w-full"
                animate={{ scaleX: progressPercentage / 100 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />
              <div className="relative flex justify-between items-start">
                {processSteps.map((step) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center text-center cursor-pointer group px-2"
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    <motion.div
                      className={`relative w-16 h-16 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${activeStep >= step.id ? 'border-[var(--primary-color)] bg-[var(--primary-color)]' : 'border-gray-300 bg-[var(--white-color)] group-hover:border-[var(--text-light)]'}`}
                      animate={{ scale: activeStep === step.id ? 1.1 : 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <i className={`${step.icon} text-3xl transition-colors duration-300 ${activeStep >= step.id ? 'text-white' : 'text-[var(--text-mid)] group-hover:text-[var(--primary-color)]'}`}></i>
                    </motion.div>
                    <h3 className={`mt-6 w-40 font-jost text-base transition-colors duration-300 ${activeStep === step.id ? 'font-bold text-[var(--primary-color)]' : 'font-medium text-[var(--text-color)]'}`}>
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE Stepper (Vertical) */}
            <div className="block lg:hidden">
              <div className="absolute left-8 -translate-x-1/2 top-0 h-full w-px bg-gray-200"></div>
              <motion.div
                className="absolute left-8 -translate-x-1/2 top-0 w-1 bg-[var(--primary-color)] origin-top h-full"
                animate={{ scaleY: progressPercentage / 100 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />
              <div className="relative flex flex-col gap-20">
                {processSteps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-center gap-6"
                    onClick={() => setActiveStep(step.id)}
                  >
                    <motion.div
                      className={`relative w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${activeStep >= step.id ? 'border-[var(--primary-color)] bg-[var(--primary-color)]' : 'border-gray-300 bg-[var(--white-color)]'}`}
                      animate={{ scale: activeStep === step.id ? 1.1 : 1 }}
                    >
                      <i className={`${step.icon} text-3xl transition-colors duration-300 ${activeStep >= step.id ? 'text-white' : 'text-[var(--text-mid)]'}`}></i>
                    </motion.div>
                    <h3 className={`font-jost text-lg transition-colors duration-300 ${activeStep === step.id ? 'font-bold text-[var(--primary-color)]' : 'font-medium text-[var(--text-color)]'}`}>
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationMap />

      {/* Gallery */}
      <section className='px-[8%] lg:px-[12%] py-20 lg:py-28'>
        <div className="container mx-auto">
          {/* Animated Header */}
          <motion.h1
            className='text-6xl lg:text-8xl font-bricolage font-bold mb-6 text-[var(--primary-color)]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Gallery
          </motion.h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-jost font-semibold text-lg px-6 py-2 rounded-full transition-colors duration-300 relative ${activeFilter === filter ? 'text-white' : 'text-[var(--text-color)] hover:text-[var(--primary-color)]'
                  }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="filter-highlight"
                    className="absolute inset-0 bg-[var(--primary-color)] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div
            layout // This prop enables the magic shuffle animation
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.a
                  key={item.img}
                  href={item.img}
                  // Add your lightbox attributes here if needed
                  // data-lightbox="gallery" 
                  data-title={item.title}
                  className='group relative block overflow-hidden rounded-2xl'
                  layout // Animate position changes
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                  {/* CORRECTED: 'absolute' instead of 'absoulte' */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <h4 className='text-white text-2xl font-bricolage font-semibold'>{item.title}</h4>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Banner */}
      <div ref={videoRef} className='relative w-full h-[500px] overflow-hidden'>
        {isVideoInView && (
          <video autoPlay loop muted playsInline preload="none" poster="/IDV1-poster.jpg" className='absolute top-0 left-0 w-full h-full object-cover'><source src='/IDV1.webm' type='video/webm' /><source src='/IDV1.mp4' type='video/mp4' /></video>
        )}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-left px-6 sm:px-12 md:px-20 z-10"><motion.h2 className='text-5xl md:text-6xl font-bricolage font-bold text-white mb-10' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut' }}>Ready for an Upgrade? Let's Talk</motion.h2><motion.button className='px-8 py-4 cursor-pointer bg-[var(--accent-gold)] text-white font-bold rounded-full hover:bg-[#b89560] transition-colors text-lg' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact Us</motion.button></div>
      </div>

    </>
  );
}