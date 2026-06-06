'use client';

import { createContext, useContext, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useAnimationControls } from 'framer-motion';

const TransitionCtx = createContext({ navigate: null });
export const usePageTransition = () => useContext(TransitionCtx);

const DURATION = 0.38;
const EASE = [0.76, 0, 0.24, 1]; // strong deceleration — the "Awwwards" feel

function waitForPageReady() {
  return new Promise(resolve => {
    window.addEventListener('awadh:page-ready', resolve, { once: true });
    // Failsafe: resolve after 3s even if template never fires
    setTimeout(resolve, 3000);
  });
}

export default function PageTransitionProvider({ children }) {
  const router = useRouter();
  const controls = useAnimationControls();
  const busy = useRef(false);

  const navigate = useCallback(async (href) => {
    if (busy.current) return;
    busy.current = true;

    // Step 1: Curtain sweeps up from bottom — covers old page
    await controls.start({
      y: '0%',
      transition: { duration: DURATION, ease: EASE },
    });

    // Step 2: Navigate (Next.js uses prefetched data, so this is instant for cached routes)
    router.push(href, { scroll: false });

    // Step 3: Wait for new page's template.js to mount and signal ready
    await waitForPageReady();

    // Step 4: Curtain sweeps up and off — reveals new page
    await controls.start({
      y: '-100%',
      transition: { duration: DURATION, ease: EASE },
    });

    // Step 5: Reset curtain to below-screen instantly (invisible, no animation)
    controls.set({ y: '100%' });

    busy.current = false;
  }, [router, controls]);

  // ── Global click interceptor ────────────────────────────────────────────────
  // Fires during capture phase (before next/link's bubble handler) so we can
  // own the navigation timing. All internal <Link> clicks are routed through here.
  useEffect(() => {
    const handleClick = (e) => {
      // Ignore modified clicks — let browser handle Ctrl+click, Cmd+click etc.
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Skip: external URLs, special protocols, same-page anchors, new-tab, downloads
      if (/^(https?:|\/\/|mailto:|tel:|javascript:|#)/.test(href)) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;

      // Skip if already on this page
      if (href === window.location.pathname || href === window.location.pathname + '/') return;

      e.preventDefault();
      e.stopPropagation();
      navigate(href);
    };

    window.addEventListener('click', handleClick, { capture: true });
    return () => window.removeEventListener('click', handleClick, { capture: true });
  }, [navigate]);

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}

      {/*
        Curtain — always in DOM, parked below the viewport at y: '100%' when idle.
        No AnimatePresence needed since it never unmounts — we animate it in/out/reset.
        pointer-events: none so it never blocks clicks even when fully covering the screen.
        z-[8999] sits above page content but below Preloader (z-[99999]) and CustomCursor (z-[9999]).
      */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'var(--primary-color)', zIndex: 8999 }}
        initial={{ y: '100%' }}
        animate={controls}
      />
    </TransitionCtx.Provider>
  );
}
