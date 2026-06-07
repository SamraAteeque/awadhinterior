'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default function BeforeAfterSlider({
    beforeSrc = '/originals/Before.png',
    afterSrc  = '/originals/After.png',
    beforeAlt = 'Room before interior design',
    afterAlt  = 'Room after Awadh Interior transformation',
}) {
    const [position, setPosition]   = useState(42);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const applyPosition = useCallback((clientX) => {
        const el = containerRef.current;
        if (!el) return;
        const { left, width } = el.getBoundingClientRect();
        setPosition(clamp(((clientX - left) / width) * 100, 4, 96));
    }, []);

    /* ── Mouse ── */
    const onMouseDown = (e) => { e.preventDefault(); setIsDragging(true); };

    useEffect(() => {
        if (!isDragging) return;
        const move = (e) => applyPosition(e.clientX);
        const up   = () => setIsDragging(false);
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
        };
    }, [isDragging, applyPosition]);

    /* ── Touch ── */
    const onTouchStart = () => setIsDragging(true);

    useEffect(() => {
        if (!isDragging) return;
        const move = (e) => applyPosition(e.touches[0].clientX);
        const end  = () => setIsDragging(false);
        window.addEventListener('touchmove', move, { passive: true });
        window.addEventListener('touchend', end);
        return () => {
            window.removeEventListener('touchmove', move);
            window.removeEventListener('touchend', end);
        };
    }, [isDragging, applyPosition]);

    /* ── Keyboard ── */
    const onKeyDown = (e) => {
        if (e.key === 'ArrowLeft')  setPosition(p => clamp(p - 5, 4, 96));
        if (e.key === 'ArrowRight') setPosition(p => clamp(p + 5, 4, 96));
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden select-none"
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison. Use arrow keys to adjust."
            aria-valuenow={Math.round(position)}
            aria-valuemin={4}
            aria-valuemax={96}
            onKeyDown={onKeyDown}
            style={{ cursor: 'col-resize' }}
        >
            {/* ── BEFORE layer (bottom) ── */}
            <div className="absolute inset-0">
                <Image
                    src={beforeSrc}
                    fill
                    alt={beforeAlt}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                <span className="absolute top-4 right-4 z-10 bg-black/55 backdrop-blur-sm text-white text-[11px] font-jost font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full pointer-events-none">
                    Before
                </span>
            </div>

            {/* ── AFTER layer (revealed via clip-path) ── */}
            <div
                className="absolute inset-0 will-change-[clip-path]"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={afterSrc}
                    fill
                    alt={afterAlt}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                <span className="absolute top-4 left-4 z-10 bg-[var(--primary-color)] text-white text-[11px] font-jost font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full pointer-events-none">
                    After
                </span>
            </div>

            {/* ── Divider line ── */}
            <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none"
                style={{
                    left: `${position}%`,
                    boxShadow: '0 0 16px rgba(0,0,0,0.55)',
                }}
            />

            {/* ── Drag handle ── */}
            <motion.div
                className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${position}%` }}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                animate={{ scale: isDragging ? 1.12 : 1 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
            >
                <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-[3px] border-white ring-4 ring-white/25 gap-1">
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" aria-hidden="true">
                        <path d="M5.5 1L1 6.5L5.5 12" stroke="#1e3432" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" aria-hidden="true">
                        <path d="M1.5 1L6 6.5L1.5 12" stroke="#1e3432" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </motion.div>

            {/* ── Drag hint (fades out once dragged) ── */}
            <motion.p
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 font-jost text-xs text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: isDragging ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                ← drag to compare →
            </motion.p>
        </div>
    );
}
