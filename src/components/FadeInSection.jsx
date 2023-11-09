import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/FadeInSection.css';

const FadeInSection = ({ id, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`} id={id}>
      {children}
    </section>
  );
};

export default FadeInSection;
