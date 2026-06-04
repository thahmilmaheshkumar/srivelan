import { useInView } from 'react-intersection-observer';

export function useScrollReveal(options = {}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    ...options,
  });

  return [ref, inView];
}
