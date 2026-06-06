'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BlogPosts from '@/app/JsonData/BlogPosts.json';

const ALL_CATEGORIES = ['All', ...new Set(BlogPosts.map(p => p.category))];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.25 } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? BlogPosts
    : BlogPosts.filter(p => p.category === activeCategory);

  const featured = BlogPosts.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || activeCategory !== 'All');

  return (
    <>
      {/* ── Page Header ── */}
      <motion.header
        className="relative h-[60vh] overflow-hidden flex items-end pb-16 lg:pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/properties/p5.jpg"
          alt="Interior design blog"
          fill
          className="object-cover z-0 brightness-[0.35]"
          priority
        />
        <div className="relative z-20 px-5 sm:px-8 lg:px-14 xl:px-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              Awadh Interior — Insights
            </span>
            <h1
              className="font-bricolage font-bold text-white leading-[0.92]"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Design<br />
              <span className="font-dm-serif italic font-normal text-[var(--accent-gold)]">Ideas</span><br />
              & Guides.
            </h1>
          </motion.div>
        </div>
      </motion.header>

      <main className="bg-[var(--bg-warm)] min-h-screen">

        {/* ── Featured Post (only on 'All' filter) ── */}
        {activeCategory === 'All' && featured && (
          <section className="px-5 sm:px-8 lg:px-14 xl:px-20 pt-16 pb-10">
            <Link href={`/blog/${featured.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-[var(--accent-gold)]/10 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-96 lg:h-full min-h-[380px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  <span className="absolute top-5 left-5 font-jost text-[10px] font-bold uppercase tracking-widest bg-[var(--accent-gold)] text-white px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block font-jost text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-4">
                    {featured.category}
                  </span>
                  <h2 className="font-bricolage font-bold text-[var(--text-dark)] text-2xl lg:text-4xl leading-tight mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="font-jost text-[var(--text-mid)] text-base leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] flex items-center justify-center flex-shrink-0">
                        <i className="ri-user-line text-white text-xs" />
                      </div>
                      <div>
                        <p className="font-jost font-semibold text-[var(--text-dark)] text-xs">{featured.author}</p>
                        <p className="font-jost text-[var(--text-mid)] text-[10px]">{formatDate(featured.date)} · {featured.readTime}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 font-jost font-bold text-xs uppercase tracking-widest text-[var(--primary-color)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                      Read Article
                      <i className="ri-arrow-right-line text-sm" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </section>
        )}

        {/* ── Category Filters ── */}
        <section className="px-5 sm:px-8 lg:px-14 xl:px-20 pt-8 pb-10">
          <div className="flex items-center gap-2 flex-wrap">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-jost text-xs font-semibold uppercase tracking-[0.15em] px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[var(--primary-color)] border-[var(--primary-color)] text-white'
                    : 'bg-white border-[var(--accent-gold)]/20 text-[var(--text-mid)] hover:border-[var(--accent-gold)]/50 hover:text-[var(--text-dark)]'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-2 font-jost text-[11px] text-[var(--text-mid)] uppercase tracking-widest">
              — {filtered.length} articles
            </span>
          </div>
        </section>

        {/* ── Articles Grid ── */}
        <section className="px-5 sm:px-8 lg:px-14 xl:px-20 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeCategory === 'All' ? BlogPosts.filter(p => !p.featured) : filtered).map((post, i) => (
                <motion.div
                  key={post.slug}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/30 hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block font-jost text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-bricolage font-bold text-[var(--text-dark)] text-lg leading-snug mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-jost text-[var(--text-mid)] text-sm leading-relaxed mb-5 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--accent-gold)]/10">
                        <p className="font-jost text-[11px] text-[var(--text-mid)]">
                          {formatDate(post.date)} · {post.readTime}
                        </p>
                        <i className="ri-arrow-right-up-line text-[var(--text-mid)] group-hover:text-[var(--accent-gold)] transition-colors duration-300 text-base" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

      </main>
    </>
  );
}
