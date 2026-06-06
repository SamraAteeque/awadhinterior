'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '180+', label: 'Happy Clients' },
  { value: '5 Yrs', label: 'Of Excellence' },
  { value: '5', label: 'Cities Served' },
];

/* Photo strip data — 5 images at staggered heights like the reference */
const stripImages = [
  { src: '/originals/ID3.jpg', alt: 'Interior detail', heightClass: 'h-[260px] sm:h-[320px]', topOffset: 'mt-16' },
  { src: '/originals/ID4.jpg', alt: 'Living space',    heightClass: 'h-[340px] sm:h-[420px]', topOffset: 'mt-6'  },
  { src: '/originals/ID1.jpg', alt: 'Hero room',       heightClass: 'h-[420px] sm:h-[520px]', topOffset: 'mt-0'  },
  { src: '/originals/ID5.jpg', alt: 'Design detail',   heightClass: 'h-[340px] sm:h-[420px]', topOffset: 'mt-6'  },
  { src: '/originals/ID2.jpg', alt: 'Accent piece',    heightClass: 'h-[260px] sm:h-[320px]', topOffset: 'mt-16' },
];

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[var(--bg-warm)] overflow-hidden">

      {/* ── Top editorial block ── */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 pt-20 pb-14 lg:pt-32 lg:pb-20 text-center">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-jost text-[11px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
          About Awadh Interior
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-bricolage font-bold text-[var(--text-dark)] leading-[0.95] tracking-tighter mb-8 mx-auto"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          We Design{' '}
          <span className="font-dm-serif italic font-normal text-[var(--accent-gold)]">Spaces</span>
          {' '}That Inspire.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-jost text-[var(--text-mid)] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          We serve both private and commercial clients. From classic restoration to modern minimalism,
          we find the quintessence of their vision and elevate it equally in the scale of the design
          and its subtle details.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Link href="/about">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(201,169,110,0.28)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 border border-[var(--text-dark)] text-[var(--text-dark)] font-jost font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[var(--text-dark)] hover:text-[var(--bg-warm)] transition-colors duration-300 cursor-pointer"
            >
              About Us
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* ── Cinematic stacked photo strip ── */}
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end gap-1 sm:gap-1.5"
        >
          {stripImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex-1 overflow-hidden ${img.heightClass} ${img.topOffset}`}
              style={{ minWidth: 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
              {/* Subtle bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Stats + quote row ── */}
      <div className="border-t border-[var(--accent-gold)]/15">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-0">

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-14 flex-shrink-0">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <p className="font-bricolage font-bold text-3xl lg:text-4xl text-[var(--primary-color)] leading-none">
                    {stat.value}
                  </p>
                  <p className="font-jost text-[11px] uppercase tracking-[0.15em] text-[var(--text-mid)] mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-16 bg-[var(--accent-gold)]/30 mx-16 flex-shrink-0" />

            {/* Quote */}
            <div className="flex items-start gap-5 flex-1">
              <div className="w-1 h-14 bg-[var(--accent-gold)] flex-shrink-0 mt-1" />
              <div>
                <blockquote className="font-dm-serif italic text-xl lg:text-2xl text-[var(--text-dark)] leading-relaxed">
                  &ldquo;A home should tell the story of who you are — and be the story of where you&apos;re going.&rdquo;
                </blockquote>
                <p className="font-jost text-[11px] uppercase tracking-[0.2em] text-[var(--text-mid)] mt-3">
                  Awadh Interior Designer
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}