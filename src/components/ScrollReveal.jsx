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
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.visible)');
      elements.forEach((el) => revealObserver.observe(el));
    };

    // Initial observation
    const timeout = setTimeout(observeElements, 50);

    // Watch for DOM changes (like blog filtering) to observe new elements
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
