'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const galleryItems = [
  { src: '/ID1.jpg',           title: 'Living Room',       category: 'Residential' },
  { src: '/properties/p1.png', title: 'Modular Salon',     category: 'Commercial'  },
  { src: '/properties/p2.png', title: 'Bedroom Design',    category: 'Residential' },
  { src: '/properties/p3.png', title: 'Premium Bedroom',   category: 'Residential' },
  { src: '/properties/p4.jpg', title: 'Mobile Showroom',   category: 'Commercial'  },
  { src: '/properties/p5.jpg', title: 'Restaurant',        category: 'Commercial'  },
  { src: '/properties/p6.jpg', title: 'Modular Kitchen',   category: 'Residential' },
  { src: '/properties/p7.jpg', title: 'Fashion Boutique',  category: 'Commercial'  },
  { src: '/properties/p8.jpg', title: 'CA Office',         category: 'Commercial'  },
  { src: '/properties/p9.png', title: 'Wardrobe Design',   category: 'Residential' },
  { src: '/ID2.jpg',           title: 'Interior Detail',   category: 'Residential' },
  { src: '/ID3.jpg',           title: 'Space Design',      category: 'Residential' },
];

const TABS = ['All', 'Residential', 'Commercial'];

export default function InstagramGallery() {
  const [active, setActive] = useState('All');
  const galleryRef = useRef(null);

  const items = active === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === active);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gal-item').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 36, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=80',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, galleryRef);
    return () => ctx.revert();
  }, [active]);

  return (
    <section ref={galleryRef} className="bg-[var(--primary-color)] py-20 lg:py-32 overflow-hidden">

      {/* ── Header ── */}
      <div className="px-5 sm:px-8 lg:px-14 xl:px-20">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-8 lg:mb-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              Our Gallery
            </span>
            <h2
              className="font-bricolage font-bold text-white leading-[0.95]"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}
            >
              A Visual<br />
              <span className="font-dm-serif font-medium italic text-white/40">Journey</span><br />
              Of Spaces.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="self-end sm:self-auto flex-shrink-0"
          >
            <Link
              href="https://www.instagram.com/awadh_interior_designer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(201,169,110,0.38)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[var(--accent-gold)] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[#b89560] transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-base" />
                Follow on Instagram
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-10 lg:mb-14 flex-wrap"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`font-jost text-xs uppercase tracking-[0.15em] px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                active === tab
                  ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white'
                  : 'bg-transparent border-white/20 text-white/55 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {tab}
            </button>
          ))}
          <span className="ml-2 font-jost text-[11px] text-white/25 uppercase tracking-widest">
            — {items.length} works
          </span>
        </motion.div>
      </div>

      {/* ── Gallery grid ── */}
      <div className="px-5 sm:px-8 lg:px-14 xl:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          >
            {items.map((item, idx) => (
              <a
                key={`${item.src}-${idx}`}
                href="https://www.instagram.com/awadh_interior_designer/"
                target="_blank"
                rel="noopener noreferrer"
                className={`gal-item group relative overflow-hidden rounded-xl sm:rounded-2xl ${
                  idx === 0
                    ? 'col-span-2 md:col-span-1 aspect-[4/3] md:aspect-[3/4]'
                    : 'aspect-[3/4]'
                }`}
              >
                <Image
                  src={item.src}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/85 via-[var(--primary-color)]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Gold border ring on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-[var(--accent-gold)] transition-all duration-400 pointer-events-none" />

                {/* Project info reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="font-jost text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bricolage font-bold text-white text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Instagram icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <i className="ri-instagram-line text-white text-xs sm:text-sm" />
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-5 sm:px-8 lg:px-14 xl:px-20 mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5"
      >
        <p className="font-jost text-xs text-white/35 max-w-xs text-center sm:text-left leading-relaxed">
          Follow our journey transforming spaces across Eastern Uttar Pradesh.
        </p>
        <Link href="/properties">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 font-jost font-bold text-xs uppercase tracking-[0.18em] text-white/50 hover:text-[var(--accent-gold)] transition-colors duration-300 cursor-pointer"
          >
            View Full Portfolio
            <span className="w-8 h-[1.5px] bg-current" />
          </motion.button>
        </Link>
      </motion.div>

    </section>
  );
}
