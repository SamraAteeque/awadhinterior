'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Template({ children }) {
  // Signal PageTransitionProvider that the new page is mounted and ready to reveal.
  // Must run from useEffect (after DOM paint), not during render.
  useEffect(() => {
    window.dispatchEvent(new Event('awadh:page-ready'));
  }, []);

  return (
    <motion.div
      // Removed filter:blur — it creates a CSS stacking context which repositions any
      // position:fixed descendants relative to this div during the animation,
      // causing z-index and layout glitches. opacity+translateY is GPU-composited with no side effects.
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}
