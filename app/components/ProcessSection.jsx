'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const processSteps = [
    { id: 1, icon: "ri-chat-3-line", title: "Discovery & Consultation", description: "We start by understanding your vision, lifestyle, and requirements in a detailed meeting to align on the project's goals and budget." },
    { id: 2, icon: "ri-layout-line", title: "Concept & Space Planning", description: "Our team develops initial concepts, mood boards, and 2D/3D layouts to visualize the potential of your space and define the design direction." },
    { id: 3, icon: "ri-palette-line", title: "Material & Furniture Selection", description: "We curate a selection of high-quality materials, finishes, furniture, and lighting that perfectly match the approved concept and your personal style." },
    { id: 4, icon: "ri-tools-line", title: "Execution & Project Management", description: "Our skilled team manages the entire implementation process, coordinating with vendors and craftsmen to ensure the design is executed flawlessly." },
    { id: 5, icon: "ri-sparkling-2-line", title: "Styling & Handover", description: "The final stage involves adding decor and styling touches before the final walkthrough and handing over your beautifully transformed space." },
];

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(1);
    const active = processSteps.find(s => s.id === activeStep);

    return (
        <section className="relative bg-[var(--primary-color)] px-5 sm:px-10 lg:px-20 py-24 lg:py-36 overflow-hidden">

            <div className="relative z-10 mx-auto max-w-[1400px]">

                {/* ── HEADER ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 lg:mb-28">
                    <div>
                        <p className="uppercase font-jost font-semibold tracking-[0.3em] text-[var(--accent-gold)] text-xs mb-5">
                            Our Journey
                        </p>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-bricolage leading-[0.95] text-white tracking-tighter">
                            Our Refined <br />
                            <span className="italic font-serif font-light opacity-50">Design Process</span>
                        </h2>
                    </div>

                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="font-jost font-semibold text-sm text-white bg-[var(--accent-gold)] px-8 py-4 rounded-full hover:bg-[#b89560] transition-colors shadow-lg shrink-0"
                        >
                            Start Your Project →
                        </motion.button>
                    </Link>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-8">

                    {/* LEFT — step cards */}
                    <div className="flex flex-col gap-3">
                        {processSteps.map((step) => {
                            const isActive = activeStep === step.id;
                            return (
                                <motion.div
                                    key={step.id}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={isActive}
                                    aria-label={`Step ${step.id}: ${step.title}`}
                                    onClick={() => setActiveStep(step.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setActiveStep(step.id);
                                        }
                                    }}
                                    animate={{
                                        backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                                    }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    className="group relative flex items-center justify-between px-7 py-5 rounded-2xl cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                >
                                    <div className="flex items-center gap-5">
                                        {/* number */}
                                        <span
                                            className="font-bricolage font-black text-3xl leading-none shrink-0 transition-colors duration-300"
                                            style={{ color: isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)' }}
                                        >
                                            {String(step.id).padStart(2, '0')}
                                        </span>

                                        {/* icon */}
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                                            style={{
                                                backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                                            }}
                                        >
                                            <i
                                                className={`${step.icon} text-xl transition-colors duration-300`}
                                                style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.55)' }}
                                            />
                                        </div>

                                        {/* title */}
                                        <h3
                                            className="font-jost font-semibold text-base sm:text-lg transition-colors duration-300"
                                            style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
                                        >
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* arrow */}
                                    <motion.span
                                        animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="text-white font-bold text-xl shrink-0"
                                    >
                                        →
                                    </motion.span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT — detail card */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="sticky top-28 bg-white/8 rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[320px] lg:min-h-[460px] border border-white/10"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                                        >
                                            <i className={`${active?.icon} text-2xl text-white`} />
                                        </div>
                                        <span className="font-bricolage font-black text-6xl leading-none text-white"
                                            style={{ opacity: 0.08 }}>
                                            {String(activeStep).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="font-bricolage font-bold text-2xl lg:text-3xl mb-5 leading-tight text-white">
                                        {active?.title}
                                    </h3>
                                    <p className="font-jost text-base lg:text-lg text-white/60 leading-relaxed">
                                        {active?.description}
                                    </p>
                                </div>

                                {/* progress dots */}
                                <div className="flex items-center gap-2 mt-10">
                                    {processSteps.map((s) => (
                                        <motion.div
                                            key={s.id}
                                            role="button"
                                            tabIndex={0}
                                            aria-label={`Go to step ${s.id}`}
                                            onClick={() => setActiveStep(s.id)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setActiveStep(s.id);
                                                }
                                            }}
                                            animate={{
                                                width: s.id === activeStep ? 28 : 8,
                                                backgroundColor: s.id === activeStep ? '#ffffff' : 'rgba(255,255,255,0.25)',
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="h-2 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ── MOBILE progress bar ── */}
                <div className="block lg:hidden mt-10">
                    <div className="relative h-[2px] w-full bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-white origin-left"
                            animate={{ scaleX: ((activeStep - 1) / (processSteps.length - 1)) }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                    <p className="font-jost text-sm text-white/50 mt-3">
                        Step {activeStep} of {processSteps.length}
                    </p>
                </div>

            </div>
        </section>
    );
}