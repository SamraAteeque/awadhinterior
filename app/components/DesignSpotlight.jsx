'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function AnimatedCounter({ value, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const hasRun = useRef(false);

    useEffect(() => {
        if (!isInView || hasRun.current) return;
        hasRun.current = true;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            if (ref.current) ref.current.textContent = `${value}${suffix}`;
            return;
        }

        (async () => {
            const gsap = (await import('gsap')).default;
            const obj = { val: 0 };
            gsap.to(obj, {
                val: value,
                duration: 2,
                ease: 'power2.out',
                onUpdate() {
                    if (ref.current) {
                        ref.current.textContent = `${Math.round(obj.val)}${suffix}`;
                    }
                },
            });
        })();
    }, [isInView, value, suffix]);

    return (
        <span ref={ref} className="tabular-nums">
            0{suffix}
        </span>
    );
}

const features = [
    {
        number: "01",
        title: "3D Walkthrough First",
        description: "Every project begins with a photorealistic 3D render. You approve the design before any execution starts — zero guesswork, zero surprises.",
    },
    {
        number: "02",
        title: "200+ Projects Delivered",
        description: "From modular bedrooms in Azamgarh to commercial fit-outs in Lucknow — 200+ completed projects across Eastern UP with 5 years of hands-on experience.",
    },
    {
        number: "03",
        title: "Itemised, Transparent Costs",
        description: "Every quotation is line-by-line. You see exactly what each item costs before work begins. No revision fees, no surprise charges at handover.",
    },
    {
        number: "04",
        title: "On-Time, Every Time",
        description: "We set a delivery date at kickoff and hold to it. Our project manager coordinates vendors, materials, and site work so you never chase updates.",
    },
];

const stats = [
    { value: 500, suffix: '+',    label: 'PRODUCTS CURATED' },
    { value: 200, suffix: '+',    label: 'PROJECTS COMPLETED' },
    { value: 180, suffix: '+',    label: 'SATISFIED CUSTOMERS' },
    { value: 5,   suffix: ' Yrs', label: 'EXPERIENCE' },
];

export default function WhyChooseUsSection() {
    return (
        <section className="bg-white overflow-hidden">

            {/* Why Choose Us */}
            <div className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content Grid */}
                    <div className="lg:col-span-7 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold font-bricolage text-[var(--primary-color)] tracking-tighter leading-tight">
                                Why Choose Us
                            </h2>
                            <p className="mt-4 text-gray-400 font-jost text-xs md:text-sm uppercase tracking-[0.2em] font-medium max-w-md">
                                Design is not just about decorating, it's about creating an experience you live in every day.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex flex-col group"
                                >
                                    <span className="text-4xl md:text-5xl font-bold font-bricolage text-[var(--accent-gold)] mb-4">
                                        {feature.number}
                                    </span>
                                    <h3 className="text-xl font-bold font-bricolage text-black mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="font-jost text-gray-500 text-sm leading-relaxed max-w-xs">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Large Visual Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white"
                    >
                        <Image
                            src="/ID5.jpg"
                            alt="Luxury Interior Design"
                            fill
                            className="object-cover transition-transform duration-[2s] hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/5" />
                    </motion.div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-[var(--bg-warm)] border-y border-[var(--accent-gold)]/10 py-20 px-6 sm:px-10 lg:px-16">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <h3 className="text-3xl md:text-5xl font-bold font-bricolage text-black tracking-tight mb-2">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-[10px] md:text-xs font-jost uppercase tracking-[0.2em] text-gray-400 font-bold">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}