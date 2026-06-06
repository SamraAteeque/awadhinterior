'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BlogPosts from '@/app/JsonData/BlogPosts.json';

const previewPosts = BlogPosts.slice(0, 3);

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogPreview() {
  return (
    <section className="bg-[var(--bg-warm)] overflow-hidden py-20 lg:py-28">
      <div className="px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              From Our Blog
            </span>
            <h2
              className="font-bricolage font-bold text-[var(--text-dark)] leading-[0.95]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Design<br />
              <span className="font-dm-serif italic font-normal text-[var(--accent-gold)]">Insights</span> & Ideas.
            </h2>
          </div>

          <Link href="/blog">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 font-jost font-bold text-xs uppercase tracking-[0.18em] text-[var(--primary-color)] hover:text-[var(--accent-gold)] transition-colors duration-300 cursor-pointer flex-shrink-0"
            >
              View All Articles
              <span className="w-8 h-[1.5px] bg-current" />
            </motion.button>
          </Link>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {previewPosts.map((post, i) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/35 hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 font-jost text-[10px] font-bold uppercase tracking-widest bg-[var(--accent-gold)] text-white px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bricolage font-bold text-[var(--text-dark)] text-lg leading-snug mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-jost text-[var(--text-mid)] text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--accent-gold)]/10">
                    <div className="flex items-center gap-2">
                      <i className="ri-time-line text-[var(--text-mid)] text-xs" />
                      <span className="font-jost text-[11px] text-[var(--text-mid)]">{post.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-jost font-bold text-[11px] uppercase tracking-wider text-[var(--primary-color)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                      Read
                      <i className="ri-arrow-right-up-line text-sm" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-10 border-t border-[var(--accent-gold)]/15 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-jost text-sm text-[var(--text-mid)] max-w-sm text-center sm:text-left">
            Expert guides on materials, costs, design trends, and everything you need to plan your dream interior.
          </p>
          <Link href="/blog">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 10px 24px rgba(201,169,110,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--primary-color)] text-white font-jost font-semibold text-sm rounded-full hover:bg-[var(--accent-gold)] transition-colors duration-300 cursor-pointer flex-shrink-0"
            >
              Visit Our Blog
              <i className="ri-arrow-right-line" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
