'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const servicesData = [
    { icon: 'ri-box-3-line', title: '3D Visualization', description: 'Photorealistic 3D renders of your space before a single nail is driven — see exactly what you are getting.' },
    { icon: 'ri-layout-bottom-2-line', title: 'Floor Works', description: 'Expert design and installation of marble, tile, wooden, and vinyl flooring for durability and style.' },
    { icon: 'ri-window-2-line', title: 'Glass Works', description: 'Custom glass partitions, doors, and decorative panels that add lightness and elegance to any interior.' },
    { icon: 'ri-brush-2-line', title: 'Wallpaper', description: 'A curated selection and professional installation of wallpapers to create stunning, textured accent walls.' },
    { icon: 'ri-fridge-line', title: 'Modular Kitchen', description: 'Ergonomic, Indian-kitchen-optimised designs with soft-close hardware, granite tops, and 5-year warranty.' },
    { icon: 'ri-layout-top-2-line', title: 'False Ceiling', description: 'POP, Gypsum, and PVC false ceiling designs with integrated LED cove lighting and crack-resistant finish.' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

const ServiceCard = ({ service }) => (
    <Link href="/services" aria-label={`Learn more about ${service.title}`}>
        <motion.div
            className="group relative p-8 border border-gray-200/60 rounded-2xl  text-(var(--accent-gold)),  overflow-hidden transition-all duration-300 hover:border-transparent cursor-pointer"
            variants={cardVariants}
            whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[#152322] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <div className="relative z-20">
                <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full bg-[var(--primary-color)]/5 group-hover:bg-white/10 transition-colors duration-300">
                    <i className={`${service.icon} text-3xl text-[var(--accent-gold)] group-hover:text-[var(--accent-gold)] transition-colors duration-300`}></i>
                </div>
                <h3 className="text-2xl font-bricolage font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="font-jost leading-relaxed text-base min-h-[80px] text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                </p>
                <div className="absolute bottom-8 right-8 text-2xl text-gray-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <i className="ri-arrow-right-up-line"></i>
                </div>
            </div>
        </motion.div>
    </Link>
);

export default function ServicesSection() {
    return (
        <section className="bg-[var(--bg-warm)] px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
            <div className="container mx-auto max-w-[1920px]">
                <div className="flex flex-col items-start text-left gap-6 md:gap-10 mb-16 lg:mb-24 px-2 sm:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="uppercase font-jost font-semibold tracking-widest text-[var(--accent-gold)] border-b border-[var(--accent-gold)]/30 pb-2 mb-6 text-sm mr-auto w-fit">
                            WHAT WE DO
                        </p>
                        <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold font-bricolage leading-[1] text-[var(--primary-color)]">
                            Services We <br />
                            <span className="italic font-serif text-[var(--accent-gold)]">Provide</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="max-w-2xl mr-auto"
                    >
                        <p className="font-jost font-semibold text-lg text-[var(--text-mid)] leading-relaxed">
                            Whether you're dreaming of a cozy home retreat or a bold, modern workspace, our experts bring your vision to life with creativity and precision.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {servicesData.slice(0, 6).map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </motion.div>

                <div className="text-center mt-16 md:mt-20">
                    <Link href="/services">
                        <motion.button
                            className="font-jost font-semibold text-base text-white bg-[var(--accent-gold)] px-10 py-4 rounded-full hover:bg-[#2a4542] transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Services
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
