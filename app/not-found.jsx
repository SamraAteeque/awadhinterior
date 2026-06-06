'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'View Our Projects', href: '/properties', icon: 'ri-image-2-line' },
  { label: 'Our Services', href: '/services', icon: 'ri-tools-line' },
  { label: 'Service Areas', href: '/service-areas', icon: 'ri-map-pin-line' },
  { label: 'Contact Us', href: '/contact', icon: 'ri-phone-line' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-warm)] flex flex-col items-center justify-center px-5 py-24 text-center relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[var(--primary-color)]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[var(--accent-gold)]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-center"
        >
          <Link href="/" aria-label="Back to homepage">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--primary-color)]/20 shadow-lg">
              <Image src="/logo.jpg" alt="Awadh Interior Designer" fill className="object-cover" />
            </div>
          </Link>
        </motion.div>

        {/* 404 number */}
        <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-bricolage font-black text-[var(--primary-color)]/10 leading-none select-none"
          style={{ fontSize: 'clamp(8rem, 25vw, 20rem)' }}
          aria-hidden="true"
        >
          404
        </motion.p>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="-mt-6 sm:-mt-10 lg:-mt-16"
        >
          <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
            Page Not Found
          </span>

          <h1 className="font-bricolage font-bold text-[var(--text-dark)] mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            This space hasn&apos;t been designed yet.
          </h1>

          <p className="font-jost text-[var(--text-mid)] text-base leading-relaxed max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist. It may have moved, been renamed, or the URL might have a typo.
          </p>

          {/* Primary CTA */}
          <Link href="/">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(26,46,36,0.18)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-[var(--primary-color)] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[var(--accent-gold)] transition-colors duration-300 mb-12"
            >
              ← Back to Homepage
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p className="font-jost text-[11px] uppercase tracking-[0.2em] text-[var(--text-mid)] mb-5">
            Or visit one of these pages
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 font-jost text-xs font-semibold px-5 py-2.5 rounded-full bg-white border border-[var(--accent-gold)]/20 text-[var(--text-dark)] hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all duration-250 shadow-sm"
              >
                <i className={`${link.icon} text-sm`} />
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
