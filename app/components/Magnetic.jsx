'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const boundsRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        if (ref.current) {
            boundsRef.current = ref.current.getBoundingClientRect();
        }
    };

    const handleMouse = (e) => {
        if (!boundsRef.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = boundsRef.current;
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // Use requestAnimationFrame to avoid blocking main thread
        requestAnimationFrame(() => {
            setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
        });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
        boundsRef.current = null;
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: 'relative' }}
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            data-magnetic="true"
        >
            {children}
        </motion.div>
    );
}
