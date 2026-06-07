'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPHeroAboutWrapper({ heroComponent, aboutComponent }) {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        // Full 3D tilt effect — desktop only, where GPUs handle combined
        // rotateX/scale/border-radius transforms smoothly.
        mm.add('(min-width: 1024px)', () => {
            const tween = gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                rotateX: 20,
                scale: 0.88,
                opacity: 0,
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
                transformOrigin: '50% 100%',
                ease: 'none'
            });
            return () => tween.scrollTrigger?.kill();
        });

        // Lighter fade + scale on phones/tablets — animating 3D transforms
        // and border-radius together was causing the scroll to visibly hang
        // during the Hero -> About handoff on lower-powered devices.
        mm.add('(max-width: 1023px)', () => {
            const tween = gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                scale: 0.96,
                opacity: 0,
                ease: 'none'
            });
            return () => tween.scrollTrigger?.kill();
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="relative w-full">
            
            {/* The wrapper is taller than the screen, creating scroll space for the animation BEFORE About section arrives */}
            <div ref={containerRef} className="relative w-full h-[150vh]" style={{ perspective: '1000px' }}>
                
                {/* Hero Layer (Sticky so it stays on screen) */}
                <div className="sticky top-0 left-0 w-full h-screen z-0">
                    <div ref={heroRef} className="w-full h-full origin-bottom bg-[#F7F4EF] overflow-hidden shadow-xl">
                        {heroComponent}
                    </div>
                </div>

            </div>

            {/* About Layer (Flows naturally, comes into view after the 150vh space) */}
            <div className="w-full relative z-10 bg-white rounded-t-[24px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] mt-[-20vh]">
                {aboutComponent}
            </div>
            
        </div>
    );
}
