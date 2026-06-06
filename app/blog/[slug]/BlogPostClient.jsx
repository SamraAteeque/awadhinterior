'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ArticleContent({ blocks }) {
  return (
    <div className="space-y-6 font-jost text-[var(--text-mid)] text-base lg:text-[17px] leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === 'heading') {
          return (
            <h2
              key={i}
              className="font-bricolage font-bold text-[var(--text-dark)] text-xl lg:text-2xl mt-10 mb-2 border-l-[3px] border-[var(--accent-gold)] pl-4"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="space-y-3 pl-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function BlogPostClient({ post, related }) {
  return (
    <>
      {/* ── Hero ── */}
      <motion.div
        className="relative h-[55vh] sm:h-[65vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 lg:px-14 xl:px-20 pb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <Link href="/blog" className="font-jost text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest">
              Blog
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-jost text-xs text-[var(--accent-gold)] uppercase tracking-widest">
              {post.category}
            </span>
          </div>

          <h1
            className="font-bricolage font-bold text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)] flex items-center justify-center flex-shrink-0">
                <i className="ri-user-line text-white text-xs" />
              </div>
              <span className="font-jost font-semibold text-white text-sm">{post.author}</span>
            </div>
            <span className="font-jost text-white/50 text-sm">{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1.5 font-jost text-white/50 text-sm">
              <i className="ri-time-line" />
              {post.readTime}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Article ── */}
      <main className="bg-white">
        <div className="max-w-[780px] mx-auto px-5 sm:px-8 py-16 lg:py-24">

          {/* Excerpt highlight */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-jost text-lg lg:text-xl text-[var(--text-dark)] font-medium leading-relaxed border-l-4 border-[var(--accent-gold)] pl-6 mb-12"
          >
            {post.excerpt}
          </motion.p>

          {/* Article body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ArticleContent blocks={post.content} />
          </motion.div>

          {/* Tags */}
          <div className="mt-14 pt-8 border-t border-[var(--accent-gold)]/10 flex flex-wrap items-center gap-3">
            <span className="font-jost text-xs text-[var(--text-mid)] uppercase tracking-widest">Tagged:</span>
            <span className="font-jost text-xs font-semibold px-4 py-1.5 rounded-full bg-[var(--bg-warm)] text-[var(--text-dark)] border border-[var(--accent-gold)]/15">
              {post.category}
            </span>
            <span className="font-jost text-xs font-semibold px-4 py-1.5 rounded-full bg-[var(--bg-warm)] text-[var(--text-dark)] border border-[var(--accent-gold)]/15">
              Interior Design
            </span>
            <span className="font-jost text-xs font-semibold px-4 py-1.5 rounded-full bg-[var(--bg-warm)] text-[var(--text-dark)] border border-[var(--accent-gold)]/15">
              Awadh Interior
            </span>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link href="/blog">
              <motion.span
                whileHover={{ x: -3 }}
                className="inline-flex items-center gap-2 font-jost font-semibold text-sm text-[var(--primary-color)] hover:text-[var(--accent-gold)] transition-colors duration-300 cursor-pointer uppercase tracking-[0.12em]"
              >
                <i className="ri-arrow-left-line" />
                Back to Blog
              </motion.span>
            </Link>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="bg-[var(--primary-color)] px-5 sm:px-8 lg:px-14 xl:px-20 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              Ready to Transform Your Space?
            </span>
            <h2 className="font-bricolage font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Let&apos;s Design Your{' '}
              <span className="font-dm-serif italic font-normal text-[var(--accent-gold)]">Dream Space</span>
            </h2>
            <p className="font-jost text-white/60 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free consultation with our team. We&apos;ll understand your vision and give you a detailed 3D plan before any work begins.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(201,169,110,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[#b89560] transition-colors duration-300 cursor-pointer"
              >
                Book Free Consultation
                <i className="ri-arrow-right-line" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* ── Related Articles ── */}
        {related.length > 0 && (
          <div className="px-5 sm:px-8 lg:px-14 xl:px-20 py-16 lg:py-24 bg-[var(--bg-warm)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                Keep Reading
              </span>
              <h3 className="font-bricolage font-bold text-[var(--text-dark)] text-3xl mb-10">Related Articles</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rp, i) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <Link href={`/blog/${rp.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/30 hover:shadow-xl transition-all duration-300">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={rp.image}
                          alt={rp.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <span className="font-jost text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] block mb-2">
                          {rp.category}
                        </span>
                        <h4 className="font-bricolage font-bold text-[var(--text-dark)] text-base leading-snug group-hover:text-[var(--primary-color)] transition-colors duration-300 line-clamp-2">
                          {rp.title}
                        </h4>
                        <p className="font-jost text-[11px] text-[var(--text-mid)] mt-3">{rp.readTime}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </>
  );
}
