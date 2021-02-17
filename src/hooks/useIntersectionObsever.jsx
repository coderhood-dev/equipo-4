import React from 'react';

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}) {
  // // Target must be set with a callback like this, useRef kind of works, after the first render, this always works.

  // const [ButtonRef, setButtonRef] = useState();

  // // Sets the target for useInterceptionObserver
  // // the ref prop calls this function when the component is mounted
  // // instead of on a rerender as useRef does

  // const observedButton = useCallback((node) => {
  //   if (node !== null) {
  //     setButtonRef(node);
  //   }
  // }, []);

  React.useEffect(() => {
    // do nothing if not enabled (ie: when there's nothing more to load)
    if (!enabled) {
      return undefined;
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

    // if there is no target, this hook does nothing
    if (!target) {
      return undefined;
    }

    observer.observe(target);
    // cleanup function
    return () => observer.unobserve(target);
  }, [enabled, onIntersect, root, rootMargin, target, threshold]);
}
