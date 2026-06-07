'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BeforeAfterSlider from './BeforeAfterSlider';

const quickStats = [
    { value: '6–8', unit: 'weeks', label: 'Avg. completion' },
    { value: '3D',  unit: 'first', label: 'Preview before work' },
    { value: '₹0',  unit: 'cost',  label: 'Consultation fee' },
];

export default function BeforeAfterSection() {
    return (
        <section className="bg-[var(--bg-warm)] py-20 lg:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div>
                        <p className="font-jost text-[var(--accent-gold)] uppercase tracking-[0.25em] text-xs mb-4 font-semibold">
                            The Transformation
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-bricolage text-[var(--primary-color)] tracking-tighter leading-tight">
                            See The Difference<br />
                            <span className="italic font-serif text-[var(--accent-gold)]">We Make</span>
                        </h2>
                    </div>
                    <p className="font-jost text-[var(--primary-color)]text-base max-w-sm leading-relaxed lg:text-right">
                        Drag the slider to reveal the transformation. Every project begins with a space and ends with a story.
                    </p>
                </motion.div>

                {/* Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/*
                      ACTION REQUIRED:
                      Replace beforeSrc and afterSrc with real photos from your project sites.
                      - beforeSrc: A photo of the raw/unfinished space before your team starts
                      - afterSrc:  The finished, styled room after handover
                      Using property images as demonstration placeholders for now.
                    */}
                    <BeforeAfterSlider
                        beforeSrc="/originals/Before.png"
                        afterSrc="/originals/After.png"
                        beforeAlt="Living space before interior design intervention"
                        afterAlt="Beautifully transformed space by Awadh Interior Designer"
                    />
                </motion.div>

                {/* Stats row + CTA */}
                <motion.div
                    className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >
                    <div className="flex items-center gap-6 sm:gap-10">
                        {quickStats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-6 sm:gap-10">
                                <div className="text-center">
                                    <p className="font-bricolage font-bold text-2xl text-[var(--primary-color)] leading-none">
                                        {stat.value}
                                        <span className="text-sm  text-[var(--accent-gold)] ml-1">{stat.unit}</span>
                                    </p>
                                    <p className="font-jost text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                                {i < quickStats.length - 1 && (
                                    <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                                )}
                            </div>
                        ))}
                    </div>

                    <Link href="/contact">
                        <motion.button
                            className="shrink-0 px-8 py-3.5 bg-[var(--accent-gold)] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[#2a4542] transition-colors"
                            whileHover={{ y: -2, boxShadow: '0 14px 30px rgba(30,52,50,0.22)' }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                        >
                            Start Your Transformation
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
