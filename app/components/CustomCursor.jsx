'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);

    const cursorSize = isHovered ? 40 : 15;

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const smoothOptions = { damping: 25, stiffness: 400, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, smoothOptions);
    const smoothMouseY = useSpring(mouseY, smoothOptions);

    useEffect(() => {
        document.documentElement.classList.add('custom-cursor-active');
        return () => {
            document.documentElement.classList.remove('custom-cursor-active');
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - cursorSize / 2);
            mouseY.set(e.clientY - cursorSize / 2);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, [data-magnetic]')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorSize, mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block bg-white"
            style={{
                x: smoothMouseX,
                y: smoothMouseY,
                width: cursorSize,
                height: cursorSize,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
        />
    );
}