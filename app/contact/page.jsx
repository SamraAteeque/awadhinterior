'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';

const faqs = [
  {
    question: "What is the first step to start a project?",
    answer: "The first step is a discovery and consultation meeting. We'll discuss your vision, requirements, and budget to understand the project scope. Fill out our contact form above and we'll schedule a call within 24 hours.",
  },
  {
    question: "How long does a typical interior design project take?",
    answer: "Project timelines vary by scope. A single room takes 2–4 weeks; a full home renovation can take 2–4 months. We provide a detailed project timeline after the initial consultation.",
  },
  {
    question: "Do you work with existing furniture and decor?",
    answer: "Absolutely. We are happy to incorporate your existing pieces into the new design. Our goal is a space that feels personal to you, and that often includes items you already own.",
  },
  {
    question: "What is your fee structure?",
    answer: "Our fee structure is transparent — typically a fixed design fee plus a percentage of the overall project cost. All costs are discussed in full before any work begins. No hidden charges, no surprises.",
  },
  {
    question: "Do you provide a 3D visualization before execution?",
    answer: "Yes, a 3D walkthrough is a standard part of our process for every project. You approve the design digitally before a single nail is hammered. What you see is exactly what you get.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay } },
});

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Compact cinematic header ── */}
      <header className="relative h-[45vh] overflow-hidden flex items-center justify-center text-center">
        <Image
          src="/ID2.jpg"
          alt="Interior design consultation"
          fill
          className="object-cover brightness-40 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/50" />
        <motion.div
          className="relative z-20 text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
            Free Consultation
          </span>
          <h1 className="font-bricolage font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
            Let&apos;s Build Something<br />
            <em className="font-dm-serif font-normal italic text-[var(--accent-gold)]">Beautiful</em> Together.
          </h1>
        </motion.div>
      </header>

      <main>

        {/* ── Contact Form — first section, immediately after header ── */}
        <section className="bg-white px-5 sm:px-8 lg:px-14 xl:px-20 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[var(--bg-warm)] px-5 sm:px-8 lg:px-14 xl:px-20 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn()}
              className="mb-14"
            >
              <span className="inline-flex items-center gap-2 font-jost text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent-gold)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                FAQ
              </span>
              <h2 className="font-bricolage font-bold text-[var(--text-dark)]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Frequently Asked<br />Questions
              </h2>
            </motion.div>

            <div className="space-y-0 divide-y divide-[var(--accent-gold)]/10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn(index * 0.06)}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left py-6 gap-6"
                    aria-expanded={expandedFaq === index}
                  >
                    <span className="font-jost text-lg font-semibold text-[var(--primary-color)] leading-snug">
                      {faq.question}
                    </span>
                    <motion.i
                      className="ri-arrow-down-s-line text-2xl text-[var(--accent-gold)] flex-shrink-0"
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-jost text-base text-[var(--text-mid)] pb-6 pr-10 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Map ── */}
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6278505820183!2d83.18653237486647!3d26.078416095446645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991a315ca7efca5%3A0x9c28788581ed588d!2sAWADH%20INTERIOR%20DESIGNER%2CAZAMGARH!5e0!3m2!1sen!2sin!4v1761303627437!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Awadh Interior Designer location"
          />
        </div>

      </main>
    </>
  );
}
