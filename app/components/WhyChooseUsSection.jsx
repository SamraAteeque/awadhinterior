'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
    { 
        number: '01', 
        title: 'Personalized Design', 
        description: 'Every project begins with understanding you — your taste, your habits, and the way you want to feel in your space.' 
    },
    { 
        number: '02', 
        title: 'Functional Luxury', 
        description: 'We balance beauty and practicality. A space should not only look luxurious but also function effortlessly in daily life.' 
    },
    { 
        number: '03', 
        title: 'Uncompromising Quality', 
        description: 'Carefully selected materials and precise execution so what you see in the design is exactly what you receive.' 
    },
    { 
        number: '04', 
        title: 'Seamless Process', 
        description: 'Timely delivery and transparent communication. We keep you involved so you feel confident and stress-free.' 
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="bg-[#EBEBEB] py-20 lg:py-32 w-full overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                
                {/* Main Split Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
                    
                    {/* Left Column: Text & Grid */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-semibold text-[var(--primary-color)] mb-4 tracking-tight"
                        >
                            Why Choose Us
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 font-jost text-sm max-w-md mb-12"
                        >
                            Design is not just about decorating a space — it is about creating an experience you live in every day.
                        </motion.p>

                        {/* 2x2 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {values.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex flex-col"
                                >
                                    <span className="text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tighter">
                                        {item.number}
                                    </span>
                                    <h3 className="text-base font-bold text-[#1a1a1a] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 font-jost text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Large Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative w-full aspect-square shadow-2xl">
                            <Image 
                                src="/ID1.jpg" // Using an existing interior image
                                alt="Modern Interior Setup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Statistics Section Added at the Bottom */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-300/50 pt-16">
                    {[
                        { number: "500+", label: "Products Curated" },
                        { number: "200+", label: "Projects Completed" },
                        { number: "180+", label: "Satisfied Customers" },
                        { number: "5 Yrs", label: "Experience" }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-bricolage text-[#1a1a1a] mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-xs font-jost uppercase tracking-widest text-gray-500 mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
