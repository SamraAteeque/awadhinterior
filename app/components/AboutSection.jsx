'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES_SUMMARY = [
  {
    icon: (
      <svg className="w-7 h-7 mx-auto text-[var(--accent-gold)] stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential Interior",
    desc: "Elegant and comfortable homes designed for you."
  },
  {
    icon: (
      <svg className="w-7 h-7 mx-auto text-[var(--accent-gold)] stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Interior",
    desc: "Functional and inspiring spaces for your business."
  },
  {
    icon: (
      <svg className="w-7 h-7 mx-auto text-[var(--accent-gold)] stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Design & Planning",
    desc: "Smart layouts and creative design solutions."
  },
  {
    icon: (
      <svg className="w-7 h-7 mx-auto text-[var(--accent-gold)] stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Turnkey Projects",
    desc: "End-to-end interior solutions with complete peace of mind."
  }
];

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '180+', label: 'Happy Clients' },
  { value: '5 Yrs', label: 'Of Excellence' },
  { value: '5', label: 'Cities Served' },
];

export default function AboutSection({ title, description, descriptionSecondary }) {
  return (
    <section className="relative w-full bg-[var(--bg-warm)] overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20">
        
        {/* ── 1. Top 4-Column Features Grid (Exactly as seen in image_5af183.png) ── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-20 text-center">
          {SERVICES_SUMMARY.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center space-y-3.5 group px-4"
            >
              {/* Icon Frame */}
              <div className="p-1 transition-transform duration-300 group-hover:scale-105">
                {service.icon}
              </div>
              
              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-dm-serif text-[1.15rem] font-medium text-[var(--primary-color)]">
                  {service.title}
                </h3>
                <p className="font-jost text-xs sm:text-sm text-[var(--primary-color)] leading-relaxed max-w-[240px] mx-auto font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Minimal Accent Line under each feature */}
              <div className="w-8 h-[1.5px] bg-[var(--accent-gold)]/30 pt-0.5 transition-w duration-300 group-hover:w-12" />
            </motion.div>
          ))}
        </div>

        {/* ── 2. Asymmetrical About Content Row sitting right beneath features ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pt-4">
          
          {/* Left Column Image Box — Dropping elegantly to the baseline */}
          <div className="lg:col-span-6 xl:col-span-7 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden shadow-xs bg-gray-100"
            >
              <Image
                src="/originals/ID1.jpg" 
                alt="Awadh Interior modern kitchen and dining space luxury setup"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </div>

          {/* Right Column Content Box — Clean baseline layout alignment */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 lg:pb-4">
            
            {/* Header Element */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-dm-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[var(--primary-color)] font-medium tracking-tight"
              >
                {title || (
                  <>
                    About <span className="italic text-[var(--accent-gold)]">Awadh Interior Designer</span>
                  </>
                )}
              </motion.h2>
              <div className="w-12 h-[2px] bg-[var(--accent-gold)]/40" />
            </div>

            {/* Paragraph Text Content */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-jost text-[var(--primary-color)] text-sm sm:text-base leading-relaxed"
              >
                {description || "Awadh Interior Designer is a premier interior design firm dedicated to transforming spaces into beautiful and functional environments. We believe every space has a story, and we are here to bring that story to life."}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-jost text-[var(--primary-color)] text-sm sm:text-[15px] leading-relaxed font-medium"
              >
                {descriptionSecondary || "We serve both private and commercial clients. From classic restoration to modern minimalism, we find the quintessence of their vision and elevate it equally in the scale of the design and its subtle details."}
              </motion.p>
            </div>

            {/* Clean Rounded Pill Button Container */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-3"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-[var(--accent-gold)] text-white font-jost font-medium text-xs tracking-wider uppercase rounded-full shadow-md transition-all flex items-center gap-2 hover:bg-[#233d30]"
                >
                  Read More <span className="text-sm font-light">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

        </div>

        {/* ── 3. Bottom Performance Metrics Row ── */}
        <div className="mt-16 pt-10 border-t border-[var(--accent-gold)]/15">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <p className="font-bricolage font-bold text-3xl lg:text-4xl text-[var(--primary-color)] leading-none">
                  {stat.value}
                </p>
                <p className="font-jost text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--primary-color)] mt-2">
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