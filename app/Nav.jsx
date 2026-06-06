'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icons ---
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export default function Nav() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef(null);

    const navlinks = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/properties' },
        { name: 'Areas', href: '/service-areas' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const logoUrl = "/logo.jpg";

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsSticky(scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSticky
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5 lg:py-8'
        }`;

    // --- Animation Variants ---
    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.07,
                delayChildren: 0.1
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.3 } }
    };

    const backdropVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.3 } }
    };

    return (
        <header
            ref={navRef}
            className={headerClasses}
            role="banner"
        >
            <div className="relative flex justify-between items-center max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

                {/* --- Logo --- */}
                <Link
                    href='/'
                    className="flex items-center gap-3 group relative z-50"
                    aria-label="Awadh Interior Homepage"
                >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                        <Image
                            src={logoUrl}
                            alt="Awadh Interior Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold font-bricolage leading-none tracking-tight text-black">
                            Awadh Interior Designer
                        </span>
                    </div>
                </Link>

                {/* --- Desktop Navigation --- */}
                <nav className="hidden lg:flex items-center gap-12" aria-label="Desktop Navigation">
                    {navlinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-jost text-[15px] font-medium tracking-wide transition-colors duration-300 relative ${pathname === link.href
                                ? 'text-black font-semibold'
                                : 'text-black/70 hover:text-black'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* --- Right Actions (Language / Button) --- */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* Call Now Option */}
                    <a href="tel:+917905503597" className="flex items-center gap-2 font-jost font-medium text-black hover:text-gray-600 transition-colors">
                        <i className="ri-phone-line text-lg"></i>
                        <span>Call Now</span>
                    </a>

                    {/* Get Started Button (Black) */}
                    <Link href="/contact">
                        <button className="px-6 py-2.5 bg-[var(--primary-color)] text-white font-jost font-medium text-sm rounded-full shadow-md hover:bg-[var(--accent-gold)] transition-all duration-300 transform hover:-translate-y-0.5">
                            Get Started
                        </button>
                    </Link>
                </div>


                {/* --- Mobile Menu Toggle --- */}
                <div className="lg:hidden relative z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 -mr-2 text-black hover:text-gray-600 transition-colors focus:outline-none`}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMenuOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <XIcon />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <MenuIcon />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* --- Mobile Navigation Drawer --- */}
            {/*
              FIX: Two separate AnimatePresence blocks instead of one wrapping a fragment.
              AnimatePresence requires motion components as *direct* children for exit tracking.
              A React fragment wrapper breaks the key tracking → backdrop lingers after close,
              sitting as a full-screen invisible div (z-40) that intercepts all subsequent clicks.
            */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="backdrop"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={backdropVariants}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 lg:hidden"
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && (
                        <motion.div
                            key="drawer"
                            id="mobile-menu"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed top-0 right-0 h-screen w-[85%] sm:w-[320px] bg-white text-black shadow-2xl z-40 lg:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile Navigation"
                        >
                            {/* Mobile Links */}
                            <nav className="flex flex-col space-y-6">
                                {navlinks.map((link) => (
                                    <motion.div key={link.name} variants={linkVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block text-2xl font-dm-serif font-medium tracking-tight transition-colors duration-300 ${pathname === link.href ? 'text-black' : 'text-gray-500 hover:text-black'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between w-full">
                                                <span>{link.name}</span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div variants={linkVariants} className="flex flex-col gap-4 mt-4">
                                    <a href="tel:+917905503597" className="flex items-center gap-3 text-xl font-jost font-medium text-black hover:text-gray-600">
                                        <i className="ri-phone-line"></i>
                                        <span>Call Now</span>
                                    </a>
                                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                        <button className="w-full px-6 py-3 bg-[var(--primary-color)] text-white font-jost font-medium text-lg rounded-full shadow-md hover:bg-[var(--accent-gold)] transition-colors">
                                            Get Started
                                        </button>
                                    </Link>
                                </motion.div>


                                {/* --- Mobile Contact Info --- */}
                                <motion.div variants={linkVariants} className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-6 text-sm pb-10">
                                    {/* Address */}
                                    <div className="flex items-start gap-4 text-gray-600">
                                        <i className="ri-map-pin-line text-lg text-[var(--primary-color)] mt-1"></i>
                                        <p className="leading-relaxed font-jost">
                                            Harra ki chungi, Polytechnic Rd, chauraha, Pura Jodhi, Azamgarh, Uttar Pradesh, 276001
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 text-gray-600">
                                        <i className="ri-phone-line text-lg text-[var(--primary-color)] mt-1"></i>
                                        <div className="flex flex-col font-jost">
                                            <a href="tel:+917905503597" className="hover:text-black transition-colors">+91 7905503597</a>
                                            <a href="tel:+916307782010" className="hover:text-black transition-colors">+91 6307782010</a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <i className="ri-mail-line text-lg text-[var(--primary-color)]"></i>
                                        <a href="mailto:contact@awadhinteriordesigner.in" className="hover:text-black transition-colors font-jost">
                                            contact@awadhinteriordesigner.in
                                        </a>
                                    </div>

                                    {/* Instagram */}
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <i className="ri-instagram-line text-lg text-[var(--primary-color)]"></i>
                                        <a href="https://www.instagram.com/awadh_interior_designer/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-medium font-jost">
                                            @awadh_interior_designer
                                        </a>
                                    </div>
                                </motion.div>
                            </nav>
                        </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
