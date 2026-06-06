'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('submitting');
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          project_type: 'Newsletter Subscription',
          from_name: 'Newsletter Subscriber',
          from_email: newsletterEmail,
          phone_number: 'N/A',
          message: `New newsletter subscriber: ${newsletterEmail}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch {
      setNewsletterStatus('error');
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-[var(--primary-color)] text-[var(--text-light)] px-[8%] lg:px-[12%] pt-20 pb-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bricolage font-bold text-white mb-4">Awadh Interiors</h3>
            <p className="font-jost leading-relaxed mb-6">
              Crafting personalized, functional, and inspiring spaces that reflect your unique story and aspirations.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/awadh_interior_designer/" aria-label="Follow us on Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[var(--primary-color)] transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bricolage font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 font-jost">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/properties" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bricolage font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 font-jost">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line mt-1 text-white"></i>
                <span>Harra ki chungi, Polytechnic Rd, chauraha, Pura Jodhi, Azamgarh, Uttar Pradesh, 276001</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line mt-1 text-white"></i>
                <a href="mailto:contact@awadhinteriordesigner.in" className="hover:text-white transition-colors">contact@awadhinteriordesigner.in</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-phone-line mt-1 text-white"></i>
                <div className="flex flex-col gap-1">
                  <a href="tel:+917905503597" className="hover:text-white transition-colors">+91 7905503597</a>
                  <a href="tel:+916307782010" className="hover:text-white transition-colors">+91 6307782010</a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bricolage font-semibold text-white mb-6">Stay Updated</h4>
            {newsletterStatus === 'success' ? (
              <p className="font-jost text-sm text-white/80">
                <i className="ri-checkbox-circle-line mr-2 text-[var(--text-light)]"></i>
                You&apos;re subscribed! Thanks for joining.
              </p>
            ) : (
              <>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    className="w-full bg-white/10 px-4 py-2 rounded-l-md focus:outline-none placeholder:text-[var(--text-light)]/50 font-jost text-white text-sm"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'submitting'}
                    aria-label="Subscribe to newsletter"
                    className="bg-[var(--accent-gold)] text-white px-4 py-2 rounded-r-md font-semibold hover:bg-[#b89560] transition-colors disabled:opacity-60"
                  >
                    {newsletterStatus === 'submitting'
                      ? <i className="ri-loader-4-line animate-spin"></i>
                      : <i className="ri-send-plane-fill"></i>
                    }
                  </button>
                </form>
                {newsletterStatus === 'error' && (
                  <p className="font-jost text-xs text-red-300 mt-2">
                    Failed to subscribe. Please try again.
                  </p>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Sub-Footer */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="font-jost text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Awadh Interior Designer. All Rights Reserved.
          </p>
          <div className="flex gap-6 font-jost text-sm">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
             <p className="font-jost text-sm mb-4 md:mb-0">
         <Link href="https://web-portfolio-two-chi.vercel.app/" className="hover:text-white">Design and Developed by Samrateq</Link>
          </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}