'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Import your properties data
import PropertyData from "@/app/JsonData/Propertys.json";

// Data for the "Our Approach" section
const approachData = [
    { icon: 'ri-ruler-2-line', title: 'Innovative Spaces', description: 'We design spaces that are not only beautiful but also intelligent, maximizing functionality and adapting to your future needs.' },
    { icon: 'ri-plant-line', title: 'Sustainable Design', description: 'Our commitment to sustainability means we prioritize eco-friendly materials and energy-efficient solutions in every project.' },
    { icon: 'ri-group-line', title: 'Client Collaboration', description: 'Your vision is our guide. We believe in a collaborative process, working with you at every stage to bring your dream to life.' },
];

export default function PropertiesPage() {
  // Dynamically create filters from your data, ensuring 'All' is first
  const propertyTypes = ['All', ...new Set(PropertyData.map(p => p.type))];

  const [activeFilter, setActiveFilter] = useState('All');
  // Initialize filteredProperties with ALL data initially
  const [filteredProperties, setFilteredProperties] = useState(PropertyData);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProperties(PropertyData);
    } else {
      setFilteredProperties(PropertyData.filter(property => property.type === activeFilter));
    }
  }, [activeFilter]);

    // Animation Variants
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } };
    const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

    // Parallax Header Logic
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


  return (
    <>
      {/* --- Page Header with Parallax --- */}
      <header ref={headerRef} className="relative h-[60vh] overflow-hidden flex items-center justify-center text-center">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
            <Image src="/ID6.jpg" alt="Elegant interior collage" fill className="object-cover brightness-75" priority />
        </motion.div>
        <motion.div
            className="relative z-20 text-white px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-jost uppercase tracking-widest mb-2 text-gray-200">Our Portfolio</p>
          <h1 className="text-5xl md:text-8xl font-bricolage font-bold">
            Explore Our Work
          </h1>
        </motion.div>
      </header>

      <main>
        {/* --- Enhanced "Our Approach" Section --- */}
        <section className="bg-white px-[8%] lg:px-[12%] py-20 lg:py-28">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-5xl lg:text-7xl font-bold font-bricolage text-[var(--primary-color)] mb-16"
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}
                >
                    Our Approach to Design
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                 >
                    {approachData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-8 text-left bg-[var(--bg-warm)] rounded-xl border border-[var(--accent-gold)]/10"
                            variants={fadeIn}
                         >
                            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[var(--primary-color)]/10">
                                <i className={`${item.icon} text-3xl text-[var(--primary-color)]`}></i>
                            </div>
                            <h3 className="text-2xl font-bricolage font-semibold text-[var(--primary-color)] mb-3">{item.title}</h3>
                            <p className="font-jost text-[var(--text-color)] leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* --- Filter Buttons Section --- */}
        <section className="bg-[var(--bg-warm)] px-[8%] lg:px-[12%] py-12">
            <div className="container mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
                {propertyTypes.map((type) => (
                    <motion.button
                        key={type}
                        onClick={() => setActiveFilter(type)}
                        className={`font-jost font-semibold text-base md:text-lg px-5 py-2.5 md:px-6 md:py-2.5 rounded-full transition-colors duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]/50 ${
                            activeFilter === type ? 'text-white' : 'text-[var(--text-color)] bg-white shadow-sm hover:text-[var(--primary-color)] hover:bg-gray-100'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {activeFilter === type && (
                            <motion.div
                                layoutId="filter-highlight-properties"
                                className="absolute inset-0 bg-[var(--primary-color)] rounded-full -z-10 shadow-md"
                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                        )}
                        <span className="relative">{type}</span>
                    </motion.button>
                ))}
            </div>
        </section>


        {/* --- Properties Grid Section --- */}
        <section className="bg-white px-[8%] lg:px-[12%] py-20 lg:py-28">
            <div className="container mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProperties.map((property) => (
                            <motion.div
                                layout
                                key={property.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                whileHover={{ y: -5 }}
                            >
                                <Link href={`/properties/${property.id}`} className="block">
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="font-jost text-sm text-[var(--text-mid)] mb-1">{property.type}</p>
                                        <h3 className="text-xl font-bricolage font-semibold text-[var(--primary-color)] mb-2 truncate group-hover:text-opacity-80 transition-opacity">
                                            {property.title}
                                        </h3>
                                        <p className="font-jost text-[var(--text-mid)] text-sm flex items-center">
                                            <i className="ri-map-pin-line mr-1.5 text-base"></i> {property.location}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Message if no properties match filter */}
                <AnimatePresence>
                    {filteredProperties.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center mt-16 font-jost text-lg text-[var(--text-mid)]"
                        >
                            No properties found matching "{activeFilter}".
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
        {/* --- END: Properties Grid Section --- */}


        {/* --- START: REMOVED DUPLICATE VIDEO BANNER --- */}
        {/*
         <div className='relative w-full h-[500px] overflow-hidden'>
             <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover'><source src='/IDV1.mp4' type='video/mp4' /></video>
             <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 z-10"><motion.h2 className='text-5xl md:text-6xl font-bricolage font-bold text-white mb-10' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut' }}>Ready for an Upgrade? Let's Talk</motion.h2><motion.button className='px-8 py-4 cursor-pointer bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-lg' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact Us</motion.button></div>
         </div>
        */}
        {/* --- END: REMOVED DUPLICATE VIDEO BANNER --- */}


        {/* --- CTA Section (Kept this one) --- */}
        <div className='relative w-full h-[50vh] overflow-hidden'>
            <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover'><source src='/IDV1.mp4' type='video/mp4' /></video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <motion.h2 className='text-4xl md:text-6xl font-bricolage font-bold text-white max-w-3xl' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                    Find a Space You Love
                </motion.h2>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                    <Link href="/contact">
                        <motion.button
                            className='mt-10 px-8 py-4 font-jost cursor-pointer bg-[var(--accent-gold)] text-white font-semibold rounded-full hover:bg-[#b89560] transition-colors shadow-md hover:shadow-lg'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
      </main>
    </>
  );
}