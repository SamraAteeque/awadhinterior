'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const EASE_CUBIC_OUT = [0.33, 1, 0.68, 1];

export default function VideoBanner() {
    const videoRef = useRef(null);
    const isVideoInView = useInView(videoRef, { once: true, margin: "200px" });

    return (
        <div ref={videoRef} className='relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group'>
            {/* Video Background — loaded only when in viewport */}
            {isVideoInView && (
                <video
                    key="/IDV1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster="/IDV1-poster.jpg"
                    className='absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-105'
                >
                    <source src='/IDV1.webm' type='video/webm' />
                    <source src='/IDV1.mp4' type='video/mp4' />
                </video>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-10" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 sm:px-12 md:px-20 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: EASE_CUBIC_OUT }}
                >
                    <h2 className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bricolage font-bold text-white mb-6 md:mb-8 max-w-4xl leading-[1.1]'>
                        Ready for a Space Upgrade?
                    </h2>
                    <p className='text-base sm:text-lg md:text-xl text-gray-100 mb-10 md:mb-12 max-w-2xl font-jost mr-auto opacity-90'>
                        Let's collaborate to create an interior that truly reflects your style and needs.
                    </p>
                    <Link href="/contact">
                        <motion.button
                            className='px-8 py-3.5 sm:px-10 sm:py-4 bg-[var(--accent-gold)] text-white font-bold font-jost rounded-full hover:bg-[#b89560] transition-all duration-300 text-base shadow-xl hover:shadow-2xl flex items-center gap-3 mr-auto'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Talk <i className="ri-arrow-right-line"></i>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
