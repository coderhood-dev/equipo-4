import React from 'react';

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}) {
  React.useEffect(() => {
    // do nothing if not enabled (ie: when there's nothing more to load)
    if (!enabled) {
      return;
    }
    // create new observer, and for each observed element, if isIntersecting is true, execute onIntercect function
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root,
        rootMargin,
        threshold,
      }
    );

    // target is a useRef object (root if specified, must be a useRef object as well),
    // the actual DOM element watched is target.current
    // so if there is a target, el returns the DOM element, if not, returns undefined
    console.log('target', target);
    const el = target;

    // if there is no target, this hook does nothing
    if (!el) {
      return;
    }

    observer.observe(el);
    // cleanup function
    // eslint-disable-next-line consistent-return
    return () => observer.unobserve(el);
  }, [enabled, onIntersect, root, rootMargin, target, threshold]);
}
