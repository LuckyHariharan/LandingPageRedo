import { motion, useAnimation } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    // Optionally, you can adjust the threshold to delay the animation until more of the element is in view
    threshold: 0.1,
  });

  useLayoutEffect(() => {
    if (inView) {
      const animatePage = async () => {
        await controls.start({
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2, // Add a slight delay
          },
        });
      };

      animatePage();
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="text-gray-600 antialiased"
      ref={ref}
      initial={{ opacity: 0 }} // Start from fully transparent
      animate={controls}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Hero />

      <VerticalFeatures />
      <Banner />

      <Footer />
    </motion.div>
  );
};

export { Base };
