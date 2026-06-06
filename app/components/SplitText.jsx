'use client';

import { motion } from 'framer-motion';

export default function SplitText({ text, className = "" }) {
    if (!text) return null;

    // Use a simpler approach if the text contains complex HTML elements, 
    // but for simple strings or strings with br tags, we can split manually.
    // For safety with existing rich text props, we'll assume it's mostly plain text if used directly.

    const words = typeof text === 'string' ? text.split(' ') : null;

    if (!words) {
        return <span className={className}>{text}</span>; // Fallback for complex React nodes
    }

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="mr-[0.25em] inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
