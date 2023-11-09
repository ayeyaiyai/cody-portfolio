import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import '../styles/FadeInSection.css';

const FadeInSection = ({ id, className, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''} ${className}`} id={id}>
      {children}
    </section>
  );
};

FadeInSection.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FadeInSection;