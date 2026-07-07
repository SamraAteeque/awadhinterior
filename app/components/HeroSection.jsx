'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const STATS = [
  { num: '200+', label: 'Projects Done' },
  { num: '180+', label: 'Happy Clients' },
  { num: '5 Yrs', label: 'Of Excellence' },
];

const ease = [0.33, 1, 0.68, 1];

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="relative w-full h-screen overflow-hidden z-10">

      {/* ── Full-screen background image (single request: <picture> serves only the matching crop per viewport) ── */}
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero-desktop.webp" type="image/webp" />
          <source media="(min-width: 1024px)" srcSet="/hero-desktop.jpg" type="image/jpeg" />
          <source srcSet="/hero-mobile.webp" type="image/webp" />
          <img
            src="/hero-mobile.jpg"
            alt="Beautifully designed interior by Awadh Interior Designer"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        {/* Dark gradient overlay for text readability across the whole image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />
      </div>


      {/* ── Centered content layer ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-8">

        <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-4 lg:space-y-6">

          {/* Studio badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
            <span className="font-jost text-white uppercase tracking-[0.2em] text-[var(--primary-color)]">
              Interior Design Studio · Est. 2019
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="font-dm-serif font-medium leading-[1.07] tracking-tight text-[var(--primary-color)]"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
          >
            {title || (
              <>
                Spaces Designed<br />
                <em className="text-[var(--primary-color)]">For the Way</em><br />
                You <span className="text-[var(--accent-gold)]">Live.</span>
              </>
            )}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="font-jost text-sm sm:text-base leading-relaxed text-white/70 max-w-[480px] mx-auto"
          >
            {subtitle || (
              <>
                Bespoke residential & commercial interiors across{' '}
                <strong className="font-semibold text-white/90">
                  Azamgarh, Lucknow, Varanasi, Mau, and Gorakhpur.
                </strong>
              </>
            )}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 items-center justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(201,169,110,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-[var(--accent-gold)] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[#b89560] transition-colors cursor-pointer"
              >
                Get Free Consultation
              </motion.button>
            </Link>
            <Link href="/properties">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 border border-white/35 text-white font-jost font-semibold text-sm rounded-full hover:border-white/70 transition-all cursor-pointer"
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
            className="font-jost text-[11px] text-white/55 flex items-center justify-center gap-1.5"
          >
            <span className="text-[var(--accent-gold)]">✓</span>
            Free 30-min design call — no commitment required.
          </motion.p>

        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78 }}
          className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-8 sm:gap-12 px-5 sm:px-8 py-4 lg:py-5 border-t border-white/15"
        >
          {STATS.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-base sm:text-xl font-bricolage font-bold text-white">
                {num}
              </div>
              <div className="font-jost text-[10px] sm:text-[11px] text-white/55 mt-0.5 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
