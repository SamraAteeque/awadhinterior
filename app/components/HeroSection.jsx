'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const STATS = [
  { num: '200+', label: 'Projects Done' },
  { num: '180+', label: 'Happy Clients' },
  { num: '5 Yrs', label: 'Of Excellence' },
];

const ease = [0.33, 1, 0.68, 1];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden z-10">

      {/* ── Mobile: full-screen image with dark gradient overlay ── */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/hero-mobile.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
      </div>

      {/* ── Desktop: warm cream background ── */}
      <div className="hidden lg:block absolute inset-0 bg-[#F7F4EF]" />

      {/* ── Desktop: right-side image panel ── */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%]">

        {/* Image with rounded bottom-left corner */}
        <div className="relative h-full rounded-bl-[40px] overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Beautifully designed interior by Awadh Interior Designer"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          {/* Subtle left-edge fade into cream */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EF]/25 to-transparent pointer-events-none" />
        </div>

        {/* Floating badge: free consultation */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute top-[30%] -left-5 flex items-center gap-2.5 bg-white/93 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl z-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="font-jost text-[11px] font-semibold text-gray-800 whitespace-nowrap">
            Free Consultation Open
          </span>
        </motion.div>

        {/* Floating badge: project count */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.18 }}
          className="absolute bottom-14 right-10 bg-[#1A2E24] px-5 py-4 rounded-2xl shadow-2xl z-10"
        >
          <div className="text-[2.4rem] font-bricolage font-bold text-white leading-none">200+</div>
          <div className="font-jost text-[10px] text-white/60 mt-1.5 uppercase tracking-[0.18em]">
            Projects Completed
          </div>
        </motion.div>

        {/* Gold accent bar */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          style={{ originY: 1 }}
          className="absolute bottom-0 left-0 w-[3px] h-28 bg-[#C9A96E] rounded-tr-full z-10"
        />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Main content: bottom-aligned on mobile, vertically centered on desktop */}
        <div className="flex-1 flex items-end lg:items-center pt-20 lg:pt-24">
          <div className="w-full lg:w-[48%] px-5 sm:px-8 lg:pl-14 xl:pl-20 pb-6 lg:pb-0 space-y-4 lg:space-y-6">

            {/* Studio badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span className="font-jost text-[10.5px] uppercase tracking-[0.2em] text-white/75 lg:text-[#6B6560]">
                Interior Design Studio · Est. 2019
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-dm-serif font-medium leading-[1.07] tracking-tight text-white lg:text-[#111111]"
              style={{ fontSize: 'clamp(2.6rem, 4.8vw, 4.5rem)' }}
            >
              Spaces Designed<br />
              <em className="text-white/85 lg:text-[#1A2E24]">For the Way</em><br />
              You <span className="text-[#C9A96E]">Live.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="font-jost text-sm sm:text-base leading-relaxed text-white/70 lg:text-[#6B6560] max-w-[420px]"
            >
              Bespoke residential & commercial interiors across{' '}
              <strong className="font-semibold text-white/90 lg:text-[#1A2E24]">
                Azamgarh, Lucknow, Varanasi, Mau, and Gorakhpur.
              </strong>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(201,169,110,0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 bg-[#C9A96E] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[#b89560] transition-colors cursor-pointer"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link href="/properties">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 border border-white/35 lg:border-[#1A2E24]/25 text-white lg:text-[#1A2E24] font-jost font-semibold text-sm rounded-full hover:border-white/70 lg:hover:border-[#1A2E24]/60 transition-all cursor-pointer"
                >
                  View Our Work →
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="font-jost text-[11px] text-white/55 lg:text-[#6B6560]/65 flex items-center gap-1.5"
            >
              <span className="text-[#C9A96E]">✓</span>
              Free 30-min design call — no commitment required.
            </motion.p>

          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78 }}
          className="w-full lg:w-[48%] flex items-center gap-8 sm:gap-12 px-5 sm:px-8 lg:pl-14 xl:pl-20 py-4 lg:py-5 border-t border-white/15 lg:border-[#1A2E24]/10"
        >
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div className="text-base sm:text-xl font-bricolage font-bold text-white lg:text-[#1A2E24]">
                {num}
              </div>
              <div className="font-jost text-[10px] sm:text-[11px] text-white/55 lg:text-[#6B6560] mt-0.5 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
