'use client';

import { motion } from 'framer-motion';

const supplierCategories = [
  {
    icon: 'ri-tree-line',
    category: 'Wood & Plywood',
    description: 'Structural & decorative wood materials',
    brands: ['Greenply', 'CenturyPly', 'National Plywood', 'Kitply'],
  },
  {
    icon: 'ri-paint-brush-line',
    category: 'Paint & Finishes',
    description: 'Premium interior & exterior paints',
    brands: ['Asian Paints', 'Berger Paints', 'Dulux', 'Nerolac'],
  },
  {
    icon: 'ri-grid-line',
    category: 'False Ceiling',
    description: 'Gypsum, POP & PVC ceiling systems',
    brands: ['Armstrong', 'Saint-Gobain', 'USG Boral', 'Gyproc'],
  },
  {
    icon: 'ri-window-line',
    category: 'Glass & Aluminium',
    description: 'Glazing, partitions & façade systems',
    brands: ['Saint-Gobain Glass', 'Asahi India', 'Jindal Aluminium', 'Fenesta'],
  },
  {
    icon: 'ri-settings-3-line',
    category: 'Hardware & Fittings',
    description: 'Handles, hinges & cabinet hardware',
    brands: ['Hettich', 'Hafele', 'Dorset', 'Godrej Locking'],
  },
  {
    icon: 'ri-layout-masonry-line',
    category: 'Tiles & Flooring',
    description: 'Ceramic, vitrified & natural stone',
    brands: ['Kajaria', 'Somany', 'Johnson Tiles', 'Orient Bell'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function TrustedSuppliers() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ── Header ── */}
      <div className="px-5 sm:px-8 lg:px-14 xl:px-20 pt-20 pb-14 lg:pt-28 lg:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              Our Sourcing Partners
            </span>
            <h2
              className="font-bricolage font-bold text-[var(--text-dark)] leading-[0.95]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}
            >
              Brands We<br />
              <span className="font-dm-serif italic font-normal text-[var(--accent-gold)]">Trust</span> & Source.
            </h2>
          </div>
          <p className="font-jost text-[var(--text-mid)] text-base max-w-sm leading-relaxed lg:text-right lg:mb-1">
            Every material we specify is sourced from India&apos;s most trusted brands — because quality starts before the first nail is hammered.
          </p>
        </motion.div>

        {/* ── Category Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {supplierCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group p-7 rounded-2xl border border-[var(--accent-gold)]/12 bg-[var(--bg-warm)] hover:border-[var(--accent-gold)]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon + Category name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-color)]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <i className={`${cat.icon} text-lg text-[var(--primary-color)] group-hover:text-white transition-colors duration-300`} />
                </div>
                <div>
                  <h3 className="font-bricolage font-bold text-[var(--text-dark)] text-base leading-tight">
                    {cat.category}
                  </h3>
                  <p className="font-jost text-[11px] text-[var(--text-mid)] mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Gold divider */}
              <div className="h-px bg-[var(--accent-gold)]/15 mb-4" />

              {/* Brand pills */}
              <div className="flex flex-wrap gap-2">
                {cat.brands.map((brand, j) => (
                  <span
                    key={j}
                    className="font-jost text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-[var(--text-dark)] border border-[var(--accent-gold)]/15 group-hover:border-[var(--accent-gold)]/40 transition-colors duration-300"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Quality assurance strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--primary-color)] px-5 sm:px-8 lg:px-14 xl:px-20 py-10"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4">
            <i className="ri-shield-check-line text-[var(--accent-gold)] text-2xl flex-shrink-0" />
            <p className="font-jost text-sm text-white/70 leading-relaxed">
              All materials come with <span className="text-white font-semibold">manufacturer warranties</span> and are sourced directly from authorized dealers across Eastern UP.
            </p>
          </div>
          <div className="flex items-center gap-8 flex-shrink-0">
            {[
              { value: '200+', label: 'Projects' },
              { value: '6+', label: 'Categories' },
              { value: '24+', label: 'Trusted Brands' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-bricolage font-bold text-xl text-white leading-none">{stat.value}</p>
                <p className="font-jost text-[10px] uppercase tracking-widest text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
