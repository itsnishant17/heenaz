// src/hooks/useFadeIn.js
import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it gets the "visible" class,
 * triggering the fade-in animation defined in index.css.
 */
export default function useFadeIn(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
