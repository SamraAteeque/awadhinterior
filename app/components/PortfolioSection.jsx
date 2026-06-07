'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PropertyData from '@/app/JsonData/Propertys.json';

const ease = [0.33, 1, 0.68, 1];

export default function PortfolioSection() {
  const projects = Array.isArray(PropertyData) ? PropertyData.slice(0, 4) : [];
  if (projects.length === 0) return null;

  return (
    <section className="bg-[#F7F4EF] py-20 lg:py-32 overflow-hidden">
      <div className="px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.2em] text-[#6B6560] mb-5 ext-[var(--primary-color)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] text-[var(--primary-color)]" />
              Selected Work
            </span>
            <h2
              className="font-bricolage font-bold text-[#1A2E24] leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            >
              Projects Crafted<br />
              <span className="font-dm-serif italic text-[var(--accent-gold)]"> With Care.</span><br />
             
            </h2>
          </div>

          <Link
            href="/properties"
            className="group self-end sm:self-auto inline-flex items-center gap-3 font-jost text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-gold)] hover:text-[#C9A96E] transition-colors duration-300 whitespace-nowrap"
          >
            Explore All Projects
            <span className="block w-8 h-[1.5px] bg-current group-hover:w-14 transition-all duration-300" />
          </Link>
        </motion.div>

        {/* ── Projects grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id ?? index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: index * 0.1, ease }}
            >
              <Link href={`/properties/${project.id}`} className="group block">

                {/* ── Image container ── */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl mb-5 bg-gray-200">

                  {/* Project number (decorative) */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 z-10 font-bricolage font-black text-[var(--accent-gold)] leading-none select-none"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <Image
                    src={project.image || '/properties/p1.png'}
                    fill
                    alt={project.title || 'Project'}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1A2E24]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* View project pill */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-white/92 backdrop-blur-sm text-[#1A2E24] font-jost font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ">
                      View Project ↗
                    </span>
                  </div>
                </div>

                {/* ── Project meta ── */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bricolage font-bold text-[#1A2E24] text-xl sm:text-2xl group-hover:text-[#C9A96E] transition-colors duration-300 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="font-jost text-[11px] uppercase tracking-widest text-[#6B6560] border border-[#1A2E24]/15 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                      <span className="font-jost text-xs text-[#6B6560] flex items-center gap-1">
                        <i className="ri-map-pin-line text-[#C9A96E] text-xs" />
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Arrow circle */}
                  <div className="w-10 h-10 flex-shrink-0 rounded-full border border-[#1A2E24]/20 group-hover:bg-[#1A2E24] group-hover:border-[#1A2E24] flex items-center justify-center transition-all duration-300 mt-1">
                    <i className="ri-arrow-right-up-line text-[#1A2E24] group-hover:text-white text-base transition-colors duration-300" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 lg:mt-20 pt-10 border-t border-[#1A2E24]/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="font-jost text-sm text-[var(--primary-color)] max-w-xs text-center sm:text-left leading-relaxed">
            Each project is a unique story of space, light, and craftsmanship.
          </p>
          <Link href="/properties">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(26,46,36,0.18)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-[var(--accent-gold)] text-white font-jost font-semibold text-sm rounded-full shadow-md hover:bg-[#243d32] transition-colors cursor-pointer"
            >
              View Full Portfolio →
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
