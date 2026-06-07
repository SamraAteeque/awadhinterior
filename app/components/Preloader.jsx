'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('preloader_shown');
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Timer to remove preloader
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
            sessionStorage.setItem('preloader_shown', 'true');
        }, 1800);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
                    style={{ display: 'var(--preloader-display, flex)' }}
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full relative">
                        {/* Phase 1: Hello we are */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <motion.h1
                                className="text-2xl md:text-2xl lg:text-3xl font-jost font-light tracking-widest uppercase text-gray-300 flex space-x-2"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                                }}
                            >
                                {["Hello,", "we", "are"].map((word, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, y: 15 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </motion.div>

                        {/* Phase 2: Logo and Name */}
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } }
                                }}
                                className="flex flex-col items-center px-4 text-center"
                            >
                                <motion.div 
                                    variants={{
                                        hidden: { scale: 0.9, opacity: 0 },
                                        visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
                                    }}
                                    className="relative w-16 h-16 md:w-24 md:h-24 mb-8 rounded-full overflow-hidden border border-white/10 shadow-2xl"
                                >
                                    <Image
                                        src="/logo.jpg"
                                        alt="Awadh Interior Designer Logo"
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                        priority
                                    />
                                </motion.div>
                                <h1 className="text-xl md:text-2xl lg:text-4xl font-bricolage font-bold text-white tracking-tight leading-[1.1] flex flex-wrap justify-center gap-x-2">
                                    {["Awadh", "Interior"].map((word, idx) => (
                                        <motion.span
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 15 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                    <motion.span
                                        variants={{
                                            hidden: { opacity: 0, y: 15 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                        }}
                                        className="italic font-serif font-light text-[var(--primary-color)] w-full md:w-auto mt-1 md:mt-0"
                                    >
                                        Designer
                                    </motion.span>
                                </h1>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
