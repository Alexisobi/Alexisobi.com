import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Use a small timeout to ensure the DOM has painted all elements
    // for the new route before we select and observe them.
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        // Reset visibility if returning to page
        el.classList.remove('visible');
        revealObserver.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timeout);
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
